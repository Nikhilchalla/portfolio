import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Box, X } from "lucide-react";

const particles = [
  { x: -55, y: -55, rotate: -80 },
  { x: 0, y: -70, rotate: 20 },
  { x: 55, y: -50, rotate: 70 },
  { x: -70, y: 0, rotate: -120 },
  { x: 70, y: 5, rotate: 130 },
  { x: -45, y: 55, rotate: -160 },
  { x: 5, y: 70, rotate: 180 },
  { x: 50, y: 55, rotate: 220 },
];

export default function FloatingPod() {
  const [exploded, setExploded] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const blastPod = () => {
    if (exploded) return;

    setExploded(true);

    setTimeout(() => {
      setShowMessage(true);
    }, 350);

    setTimeout(() => {
      setExploded(false);
    }, 3500);
  };

  return (
    <>
      {/* FLOATING POD */}
      <motion.div
        drag
        dragMomentum
        dragElastic={0.8}
        initial={{
          x: "10vw",
          y: "15vh",
        }}
        animate={
          exploded
            ? {}
            : {
                x: ["10vw", "70vw", "35vw", "80vw", "15vw"],
                y: ["15vh", "30vh", "55vh", "70vh", "20vh"],
                rotate: [0, 10, -8, 7, 0],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed top-0 left-0 z-[80] block cursor-grab active:cursor-grabbing"
        style={{
          touchAction: "none",
        }}
      >
        <div className="relative">
          <AnimatePresence>
            {!exploded && (
              <motion.button
                type="button"
                onClick={blastPod}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.8,
                  rotate: 180,
                }}
                whileHover={{
                  scale: 1.12,
                  rotate: 8,
                }}
                whileTap={{
                  scale: 0.85,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg border border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-md flex items-center justify-center text-[var(--accent)] shadow-lg shadow-black/20 hover:bg-[var(--surface-hover)] hover:border-[var(--border-hover)] transition-all duration-300"
                aria-label="Floating Kubernetes pod"
              >
                <Box className="w-4 h-4 sm:w-5 sm:h-5" />

                <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[var(--green)]" />

                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  pod-01
                </span>
              </motion.button>
            )}
          </AnimatePresence>

          {/* EXPLOSION */}
          {exploded && (
            <div className="absolute left-1/2 top-1/2">
              <motion.div
                initial={{
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  scale: [0, 1.8, 0],
                  opacity: [1, 0.8, 0],
                }}
                transition={{
                  duration: 0.7,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--accent)]/25 blur-md"
              />

              {particles.map((particle, index) => (
                <motion.span
                  key={index}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  animate={{
                    x: particle.x,
                    y: particle.y,
                    rotate: particle.rotate,
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="absolute w-2 h-2 rounded-sm bg-[var(--accent)]"
                />
              ))}

              {[...Array(6)].map((_, index) => (
                <motion.span
                  key={`spark-${index}`}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                  }}
                  animate={{
                    x: Math.cos(index) * 45,
                    y: Math.sin(index) * 45,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.04,
                  }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-[var(--accent-hover)]"
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* CHAOS MESSAGE */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="fixed inset-0 z-[90] flex items-center justify-center pointer-events-none px-4"
          >
            <motion.div
              animate={{
                y: [0, -6, 0],
                rotate: [0, 0.4, -0.4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-auto relative w-full max-w-md border border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-xl rounded-lg overflow-hidden shadow-2xl shadow-black/30"
            >
              {/* Hanging line */}
              <div className="absolute left-1/2 -top-16 -translate-x-1/2 w-px h-16 bg-[var(--border)]" />

              {/* Hook */}
              <div className="absolute left-1/2 -top-1 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--accent)]" />

              {/* Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--border)] bg-[var(--surface-deep)]">
                <span className="text-[10px] text-[var(--muted)]">
                  pod/chaos-engineering.log
                </span>

                <button
                  type="button"
                  onClick={() => setShowMessage(false)}
                  className="text-[var(--muted)] hover:text-[var(--heading)] transition-colors"
                  aria-label="Close easter egg"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Message */}
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-widest text-[var(--accent)] mb-3">
                  pod terminated
                </p>

                <div className="space-y-1 text-xs text-[var(--muted)] mb-4">
                  <p>
                    <span className="text-[var(--body)]">status:</span>{" "}
                    Failed
                  </p>

                  <p>
                    <span className="text-[var(--body)]">reason:</span>{" "}
                    UserInducedChaos
                  </p>

                  <p>
                    <span className="text-[var(--body)]">restartPolicy:</span>{" "}
                    Always
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-[var(--heading)]">
                  Everything works perfectly until someone touches production.
                </p>

                <p className="mt-4 text-[10px] text-[var(--faint)]">
                  pod-01 will respawn automatically.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}