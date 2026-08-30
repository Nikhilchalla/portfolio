import { motion } from "motion/react";
import {
  Camera,
  Car,
  Cloud,
  Coffee,
  Globe2,
  Headphones,
  Plane,
  Terminal,
} from "lucide-react";

const interests = [
  {
    icon: Plane,
    directory: "travel/",
    title: "Travel",
    description:
      "Exploring cities, cultures, food and places outside my usual environment.",
  },

  {
    icon: Camera,
    directory: "photography/",
    title: "Photography",
    description:
      "Capturing random moments, places and memories worth keeping.",
  },

  {
    icon: Car,
    directory: "automobiles/",
    title: "Automobiles",
    description:
      "Cars, automotive engineering, performance and good design.",
  },

  {
    icon: Headphones,
    directory: "music/",
    title: "Music",
    description:
      "Something is usually playing while I'm coding, travelling or working.",
  },

  {
    icon: Globe2,
    directory: "web3/",
    title: "Web3",
    description:
      "Blockchain ecosystems, communities and experimenting with new technology.",
  },

  {
    icon: Cloud,
    directory: "cloud/",
    title: "Cloud",
    description:
      "Somehow infrastructure became both my profession and one of my interests.",
  },

  {
    icon: Coffee,
    directory: "coffee/",
    title: "Coffee",
    description:
      "Usually found somewhere close to the keyboard.",
  },
];

export default function Interests() {
  return (
    <section className="mb-12">

      {/* Header */}

      <div className="mb-5">

        <h2 className="
          text-[#F0EFEA]
          text-lg
          flex
          items-center
          gap-2
        ">
          <Terminal className="w-4 h-4" />
          Things I Enjoy
        </h2>

        <p className="text-xs text-[#77756F] mt-2">
          root@nikhil:~/interests
        </p>

      </div>

      {/* Terminal-style interests panel */}

      <div
        className="
          border
          border-[#2A2A2A]
          rounded-md
          overflow-hidden
          bg-[#151515]
        "
      >

        {/* Terminal header */}

        <div
          className="
            px-4
            py-3
            bg-[#111111]
            border-b
            border-[#2A2A2A]
            text-xs
            text-[#77756F]
          "
        >
          ~/nikhil/interests
        </div>

        {/* Interest directories */}

        <div className="divide-y divide-[#2A2A2A]">

          {interests.map((interest, index) => {
            const Icon = interest.icon;

            return (
              <motion.div
                key={interest.directory}
                initial={{
                  opacity: 0,
                  x: -16,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
                className="
                  group

                  grid
                  md:grid-cols-[180px_1fr]

                  gap-2
                  md:gap-6

                  px-4
                  py-4

                  hover:bg-[#1A1A1A]

                  transition-colors
                  duration-300
                "
              >

                {/* Directory */}

                <div className="flex items-center gap-3 min-w-0">

                  <Icon
                    className="
                      w-4
                      h-4
                      shrink-0
                      text-[#C66A3A]

                      transition-colors
                      duration-300

                      group-hover:text-[#E07A47]
                    "
                  />

                  <span
                    className="
                      text-sm
                      text-[#F0EFEA]

                      transition-colors
                      duration-300

                      group-hover:text-[#C66A3A]
                    "
                  >
                    {interest.directory}
                  </span>

                </div>

                {/* Description */}

                <div className="min-w-0">

                  <p className="
                    text-sm
                    text-[#A4A29B]
                    leading-relaxed
                  ">
                    {interest.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Footer */}

        <div
          className="
            px-4
            py-3

            border-t
            border-[#2A2A2A]

            bg-[#111111]

            text-xs
            text-[#77756F]
          "
        >
          {interests.length} directories found.

          <span className="
            animate-pulse
            ml-2
            text-[#C66A3A]
          ">
            ▊
          </span>
        </div>

      </div>

    </section>
  );
}