import { Redis } from "@upstash/redis";
import { randomUUID } from "node:crypto";

const redis = Redis.fromEnv();

const VISITOR_COOKIE = "portfolio_visitor_id";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function getCookie(req, name) {
  const cookieHeader = req.headers.cookie;

  if (!cookieHeader) {
    return null;
  }

  const cookies = cookieHeader.split(";");

  for (const cookie of cookies) {
    const [key, ...valueParts] = cookie.trim().split("=");

    if (key === name) {
      return decodeURIComponent(valueParts.join("="));
    }
  }

  return null;
}

export default async function handler(req, res) {
  try {
    /*
     * GET
     * Returns current analytics without incrementing anything.
     */
    if (req.method === "GET") {
      const pageViews = await redis.get("portfolio:pageviews");
      const visitors = await redis.get("portfolio:visitors");

      return res.status(200).json({
        pageViews: Number(pageViews || 0),
        visitors: Number(visitors || 0),
      });
    }

    /*
     * POST
     * Records a page view and identifies a unique visitor.
     */
    if (req.method === "POST") {
      let visitorId = getCookie(req, VISITOR_COOKIE);
      let isNewVisitor = false;

      /*
       * Create anonymous visitor ID if this browser
       * has never visited before.
       */
      if (!visitorId) {
        visitorId = randomUUID();
        isNewVisitor = true;

        res.setHeader(
          "Set-Cookie",
          `${VISITOR_COOKIE}=${encodeURIComponent(
            visitorId
          )}; Path=/; Max-Age=${COOKIE_MAX_AGE}; HttpOnly; Secure; SameSite=Lax`
        );
      }

      /*
       * Every POST represents one page view.
       */
      const pageViews = await redis.incr("portfolio:pageviews");

      /*
       * Use Redis SET NX so a visitor is counted only once.
       *
       * If the visitor ID already exists:
       * SET NX returns null.
       *
       * If it is new:
       * SET NX creates the key.
       */
      if (isNewVisitor) {
        const visitorKey = `portfolio:visitor:${visitorId}`;

        const created = await redis.set(visitorKey, "1", {
          nx: true,
          ex: COOKIE_MAX_AGE,
        });

        if (created) {
          await redis.incr("portfolio:visitors");
        }
      }

      const visitors = await redis.get("portfolio:visitors");

      return res.status(200).json({
        pageViews: Number(pageViews || 0),
        visitors: Number(visitors || 0),
      });
    }

    return res.status(405).json({
      error: "Method not allowed",
    });
  } catch (error) {
    console.error("Analytics error:", error);

    return res.status(500).json({
      error: "Failed to update analytics",
    });
  }
}