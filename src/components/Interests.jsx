import { motion } from "motion/react";
import {
  Camera,
  Cloud,
  Globe2,
  Headphones,
  Plane,
  User,
} from "lucide-react";

const interests = [
  {
    icon: Plane,
    directory: "travel/",
    description:
      "Exploring cities, cultures, food and places outside my usual environment.",
  },
  {
    icon: Camera,
    directory: "photography/",
    description:
      "Capturing random moments, places and memories worth keeping.",
  },
  {
    icon: Headphones,
    directory: "music/",
    description:
      "Something is usually playing while I'm coding, travelling or working.",
  },
  {
    icon: Globe2,
    directory: "web3/",
    description:
      "Blockchain ecosystems, communities and experimenting with new technology.",
  },
  {
    icon: Cloud,
    directory: "cloud/",
    description:
      "Somehow infrastructure became both my profession and one of my interests.",
  },
];

export default function Interests() {
  return (
    <section className="mb-14">
      <div className="mb-5">
        <h2 className="flex items-center gap-2 text-lg text-[var(--heading)]">
          <User className="w-4 h-4 text-[var(--muted)]" />
          root@nikhil:~/interests
        </h2>
      </div>

      <div>
        {interests.map((interest, index) => {
          const Icon = interest.icon;

          return (
            <motion.div
              key={interest.directory}
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
              }}
              className="
                group
                grid
                gap-3
                py-5
                border-b
                border-[var(--border)]
                sm:grid-cols-[190px_1fr]
                sm:gap-6
                transition-colors
              "
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="
                    w-8
                    h-8
                    shrink-0
                    rounded-md
                    border
                    border-[var(--border)]
                    bg-[var(--surface)]
                    flex
                    items-center
                    justify-center
                    text-[var(--muted)]
                    transition-all
                    duration-300
                    group-hover:text-[var(--accent)]
                    group-hover:border-[var(--border-hover)]
                    group-hover:bg-[var(--surface-hover)]
                  "
                >
                  <Icon className="w-4 h-4" />
                </div>

                <span
                  className="
                    text-sm
                    text-[var(--heading)]
                    transition-colors
                    duration-300
                    group-hover:text-[var(--accent)]
                  "
                >
                  {interest.directory}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-[var(--body)]">
                {interest.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 text-[10px] text-[var(--muted)]">
        {interests.length} directories found.
        <span className="ml-2 text-[var(--accent)] animate-pulse">▊</span>
      </div>
    </section>
  );
}