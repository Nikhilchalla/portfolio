import Interests from "./components/Interests";
import FloatingPod from "./components/FloatingPod";
import { useEffect, useState } from "react";
import { Ascii } from "ascii.rest/react";
import {
  Mail,
  Server,
  Container,
  ExternalLink,
  BookOpen,
  UserIcon,
  FileText,
  Cloud,
  Database,
  Moon,
  Sun,
} from "lucide-react";
import {
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiHelm,
  SiTerraform,
  SiAnsible,
  SiGithubactions,
  SiJenkins,
  SiGitlab,
  SiGnubash,
  SiPython,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";
import { GitHubCalendar } from "react-github-calendar";
import { Analytics } from "@vercel/analytics/react";

const GithubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const themes = {
  dark: {
    page: "#0B0D10",
    surface: "#111419",
    surfaceHover: "#161A20",
    surfaceDeep: "#0D1014",
    border: "#242932",
    borderHover: "#343B46",
    heading: "#F1F3F5",
    body: "#A7ADB7",
    muted: "#68707C",
    faint: "#444B55",
    accent: "#8AADF4",
    accentHover: "#A5BFF8",
    green: "#7EE787",
  },
  light: {
  page: "#F1F2F4",
  surface: "#F8F9FA",
  surfaceHover: "#ECEFF2",
  surfaceDeep: "#E5E8EC",
  border: "#CDD3DA",
  borderHover: "#AEB6C0",

  heading: "#111318",
  body: "#343A44",
  muted: "#5E6672",
  faint: "#818996",

  accent: "#3F5F9B",
  accentHover: "#2F4F87",
  green: "#2F7D4B",
},
};

export default function Portfolio() {
  const githubUsername = "Nikhilchalla";
  const [time, setTime] = useState(new Date());
  const [pageViews, setPageViews] = useState(null);
  const [visitors, setVisitors] = useState(null);
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme === "light" ? "light" : "dark";
  });

  const colors = themes[theme];

  const themeVars = {
    "--page": colors.page,
    "--surface": colors.surface,
    "--surface-hover": colors.surfaceHover,
    "--surface-deep": colors.surfaceDeep,
    "--border": colors.border,
    "--border-hover": colors.borderHover,
    "--heading": colors.heading,
    "--body": colors.body,
    "--muted": colors.muted,
    "--faint": colors.faint,
    "--accent": colors.accent,
    "--accent-hover": colors.accentHover,
    "--green": colors.green,
  };

  const email = "nikhilchalla511@gmail.com";
  const linkedin = "https://linkedin.com/in/nikhil-challa";
  const github = `https://github.com/${githubUsername}`;
  const resume =
    "https://drive.google.com/file/d/1hE33B4JXxB9ZJewpjya09xX3r46dEMj_/view?usp=drive_link";

  const projects = [
  {
    number: "01",
    slug: "terraform-ha",
    title: "Highly Available AWS App with Terraform",
    intro:
      "Built a highly available AWS application stack with load balancing, autoscaling and infrastructure defined entirely through Terraform.",
    stack: ["Terraform", "AWS", "Flask", "EC2", "ALB"],
    github: "https://github.com/Nikhilchalla/terraform-aws-ha-flask",
    demo: null,
  },
  {
    number: "02",
    slug: "cloud-observability",
    title: "Cloud-Native Observability Stack",
    intro:
      "Built a multi-cluster Kubernetes monitoring setup using Prometheus, Grafana and Alertmanager to surface infrastructure and application health.",
    stack: ["Kubernetes", "Prometheus", "Grafana", "AWS", "Alertmanager"],
    github: "https://github.com/Nikhilchalla",
    demo: null,
  },
];

  const exploring = [
    {
      title: "Kubernetes Networking",
      description:
        "Going deeper into Services, Ingress, CNI and how traffic actually moves through a cluster.",
    },
    {
      title: "Backend Engineering",
      description:
        "Learning authentication, sessions, cookies, PostgreSQL and API design through full-stack builds.",
    },
    {
      title: "System Design",
      description:
        "Understanding how small applications evolve into reliable distributed systems.",
    },
    {
      title: "Cloud Architecture",
      description:
        "Connecting cloud services into production-style systems instead of learning them individually.",
    },
  ];

  const tools = [
    { name: "AWS", icon: Cloud },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "Docker", icon: SiDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Helm", icon: SiHelm },
    { name: "Terraform", icon: SiTerraform },
    { name: "Ansible", icon: SiAnsible },
    { name: "GitHub Actions", icon: SiGithubactions },
    { name: "Jenkins", icon: SiJenkins },
    { name: "GitLab CI", icon: SiGitlab },
    { name: "Bash", icon: SiGnubash },
    { name: "Python", icon: SiPython },
    { name: "Grafana", icon: SiGrafana },
    { name: "Prometheus", icon: SiPrometheus },
    { name: "ELK", icon: Database },
  ];

  useEffect(() => {
    fetch("/api/analytics", { method: "POST" })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Analytics request failed: ${res.status}`);
        }

        return res.json();
      })
      .then((data) => {
        setPageViews(data.pageViews);
        setVisitors(data.visitors);
      })
      .catch((error) => {
        console.error("Analytics failed:", error);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

const formattedTime = time.toLocaleTimeString("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

  const socialButtonClass =
    "w-10 h-10 rounded-md border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-hover)] transition-all duration-300";

  return (
    <div
      style={themeVars}
      className="min-h-screen bg-[var(--page)] text-[var(--body)] font-mono transition-colors duration-300" >

      {/* STATUS BAR */}
      <header className="border-b border-[var(--border)] bg-[var(--page)] px-4 py-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 flex-wrap text-[11px] sm:text-xs text-[var(--muted)]">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
              online
            </span>

            <span>nikhil@cloud</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span>{formattedTime}</span>
              <span className="text-[var(--faint)]">IST</span>
            </div>

            <button
              type="button"
              onClick={() =>
                setTheme((current) => (current === "dark" ? "light" : "dark"))
              }
              className="w-8 h-8 rounded-md border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--border-hover)] transition-all duration-300"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* ASCII BANNER */}
        <div className="mb-8">
          <div className="relative w-full h-[170px] sm:h-[210px] md:h-[240px] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface-deep)] flex items-center justify-center">
            <Ascii
              piece="sparkline"
              style={{
                fontSize: "clamp(9px, 1.25vw, 16px)",
                lineHeight: 1.1,
                margin: 0,
                whiteSpace: "pre",
                color: colors.accent,
              }}
              className="opacity-90 select-none pointer-events-none"
            />

            <div className="absolute bottom-3 left-4 text-[9px] sm:text-[10px] text-[var(--muted)]">
              root@nikhil:~/metrics$ watch sparkline
            </div>
          </div>
        </div>

        {/* WHOAMI */}
        <section className="mb-8">
          <div className="mb-5">
            <h2 className="text-[var(--heading)] text-lg flex items-center gap-2">
              <UserIcon className="w-4 h-4 text-[var(--muted)]" />
              root@nikhil:~/
            </h2>
          </div>

          <div className="mb-4 flex items-center gap-4 sm:gap-5 flex-wrap">
            <img
              src={`https://github.com/${githubUsername}.png`}
              alt="Nikhil Challa"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[var(--border)] object-cover"
              loading="lazy"
            />

            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--heading)] mb-1">
                Nikhil Challa
              </h1>

              <p className="text-[var(--accent)] text-base sm:text-lg">
                Cloud · DevOps · Infrastructure
              </p>
            </div>
          </div>

          <p className="text-[var(--body)] max-w-2xl leading-relaxed text-sm mb-8">
            I build things around cloud, infrastructure and automation, break
            them occasionally, figure out why, and document what I learn.
          </p>

          <div className="flex items-center gap-2">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className={socialButtonClass}
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className={socialButtonClass}
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${email}`}
              aria-label="Email"
              title="Email"
              className={socialButtonClass}
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              title="Resume"
              className={socialButtonClass}
            >
              <FileText className="w-4 h-4" />
            </a>
          </div>
        </section>

      {/* BUILDS */}
<section id="builds" className="mb-8">
  <div className="mb-6">
    <h2 className="flex items-center gap-2 text-lg text-[var(--heading)]">
      <Container className="w-4 h-4 text-[var(--muted)]" />
      root@nikhil:~/builds
    </h2>

    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--body)]">
      A few things I've built while learning how infrastructure, applications
      and distributed systems work in practice.
    </p>
  </div>

  <div>
    {projects.map((project) => (
      <article
        key={project.slug}
        className="
          group
          py-6
          border-b
          border-[var(--border)]
        "
      >
        <div
          className="
            grid
            gap-4
            md:grid-cols-[48px_1fr]
            md:gap-4
          "
        >
          <span className="text-[10px] text-[var(--muted)] pt-1">
            {project.number}
          </span>

          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  className="
                    text-base
                    sm:text-lg
                    font-medium
                    text-[var(--heading)]
                    transition-colors
                    duration-300
                    group-hover:text-[var(--accent)]
                  "
                >
                  {project.title}
                </h3>

                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] text-[var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} on GitHub`}
                className="
                  shrink-0
                  text-[var(--muted)]
                  hover:text-[var(--accent)]
                  transition-colors
                "
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--body)]">
              {project.intro}
            </p>

            <div className="mt-4 flex items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  text-xs
                  text-[var(--accent)]
                  hover:text-[var(--accent-hover)]
                  transition-colors
                "
              >
                view project
                <ExternalLink className="w-3 h-3" />
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    text-xs
                    text-[var(--muted)]
                    hover:text-[var(--accent)]
                    transition-colors
                  "
                >
                  live demo
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    ))}
  </div>

  <a
    href={github}
    target="_blank"
    rel="noreferrer"
    className="
      mt-5
      inline-flex
      items-center
      gap-2
      text-xs
      text-[var(--muted)]
      hover:text-[var(--accent)]
      transition-colors
    "
  >
    more experiments on GitHub
    <ExternalLink className="w-3 h-3" />
  </a>
</section>

    {/* EXPLORING */}
<section id="exploring" className="mb-8">
  <div className="mb-5">
    <h2 className="flex items-center gap-2 text-lg text-[var(--heading)]">
      <BookOpen className="w-4 h-4 text-[var(--muted)]" />
      root@nikhil:~/now
    </h2>
  </div>

  <div>
    {exploring.map((item, index) => (
      <div
        key={item.title}
        className="
          group
          grid
          gap-3
          py-5
          border-b
          border-[var(--border)]
          md:grid-cols-[220px_1fr]
          md:gap-6
        "
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-[10px] text-[var(--muted)]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span
            className="
              text-sm
              text-[var(--heading)]
              transition-colors
              duration-300
              group-hover:text-[var(--accent)]
            "
          >
            {item.title}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-[var(--body)]">
          {item.description}
        </p>
      </div>
    ))}
  </div>

  <div className="mt-4 text-[10px] text-[var(--muted)]">
    {exploring.length} topics in progress.
    <span className="ml-2 text-[var(--accent)] animate-pulse">▊</span>
  </div>
</section>

      {/* GITHUB */}
        <section id="github" className="mb-8">
          <div className="mb-4">
            <h2 className="text-[var(--heading)] text-lg flex items-center gap-2">
              <GithubIcon className="w-4 h-4 text-[var(--muted)]" />
              root@nikhil:~/github
            </h2>
          </div>

          <div className="border border-[var(--border)] rounded-lg p-5 bg-[var(--surface)] overflow-hidden">
            <GitHubCalendar
              username={githubUsername}
              colorScheme={theme}
              blockSize={12}
              blockMargin={3}
              fontSize={12}
              hideColorLegend={false}
              hideMonthLabels={false}
              theme={{
                dark: [
                  "#16191E",
                  "#203128",
                  "#31543C",
                  "#4E795A",
                  "#7EE787",
                ],
                light: [
                  "#EBEDF0",
                  "#D5E8DA",
                  "#AED3B7",
                  "#76B889",
                  "#3A8F58",
                ],
              }}
            />
          </div>
        </section>

      <Interests />

        {/* TOOLS */}
        <section id="tools" className="mb-8">
          <div className="mb-5">
            <h2 className="text-[var(--heading)] text-lg flex items-center gap-2">
              <Server className="w-4 h-4 text-[var(--muted)]" />
              root@nikhil:~/stack
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-6 py-2">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <span
                  key={tool.name}
                  title={tool.name}
                  aria-label={tool.name}
                  role="img"
                  className="group flex items-center justify-center"
                >
                  <Icon
                    className="w-8 h-8 text-[var(--muted)] transition-all duration-300 group-hover:text-[var(--accent)] group-hover:scale-110"
                    aria-hidden="true"
                  />
                </span>
              );
            })}
          </div>
        </section>

      {/* FOOTER */}
        <footer className="mt-14 pt-6 border-t border-[var(--border)]">
          <div className="flex items-center justify-between gap-5 flex-wrap text-xs text-[var(--muted)]">
            <span>root@nikhil:~$ echo "Thanks for visiting."</span>

            <div className="flex items-center gap-4 flex-wrap">
              <span>
                {visitors !== null ? visitors.toLocaleString() : "—"} visitors
              </span>

              <span className="text-[var(--faint)]">/</span>

              <span>
                {pageViews !== null ? pageViews.toLocaleString() : "—"} views
              </span>

              <span className="text-[var(--faint)]">/</span>

              <span>© {new Date().getFullYear()} Nikhil Challa</span>
            </div>
          </div>
        </footer>
      </main>

      <Analytics />
      <FloatingPod />
    </div>
  );
}