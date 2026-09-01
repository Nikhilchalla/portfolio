import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import {
  Camera,
  ChevronLeft,
  ChevronRight,
  MapPin,
  User,
  X,
} from "lucide-react";

import { galleryImages } from "../data/gallery";

const categories = ["all", "travel", "events", "random"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  const selectedIndex =
    selectedImage !== null
      ? filteredImages.findIndex(
          (image) => image.id === selectedImage.id
        )
      : -1;

  const showNext = () => {
    if (selectedIndex === -1) return;

    const nextIndex =
      selectedIndex === filteredImages.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedImage(filteredImages[nextIndex]);
  };

  const showPrevious = () => {
    if (selectedIndex === -1) return;

    const previousIndex =
      selectedIndex === 0
        ? filteredImages.length - 1
        : selectedIndex - 1;

    setSelectedImage(filteredImages[previousIndex]);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, selectedIndex]);

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  return (
    <>
      <section className="mb-10">

        <div className="flex items-center justify-between gap-4 flex-wrap mb-5">

          <div>

            <h7 className="text-[#F0EFEA] text-lg flex items-center gap-2">
              <User className="w-4 h-4" />
              root@nikhil:~/life/memories
            </h7>
          </div>

        </div>

        {/* Filters */}

        <div className="flex flex-wrap gap-2 mb-6">

          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                  text-xs
                  uppercase
                  tracking-wider
                  px-3 py-2
                  border
                  rounded
                  transition-all
                  duration-300

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#C66A3A]/50

                  ${
                    active
                      ? "bg-[#F0EFEA] text-[#0E0E0E] border-[#F0EFEA]"
                      : "bg-[#151515] border-[#303030] text-[#77756F] hover:border-[#555] hover:text-[#F0EFEA]"
                  }
                `}
              >
                {category}
              </button>
            );
          })}

        </div>

        {/* Gallery */}

        <motion.div
          layout
          className="
            columns-1
            sm:columns-2
            md:columns-3
            gap-4
            space-y-4
          "
        >

          <AnimatePresence>

            {filteredImages.map((image, index) => (

              <motion.button
                layout
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(image)}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="
                  group
                  relative
                  w-full
                  break-inside-avoid
                  overflow-hidden
                  rounded-md

                  border
                  border-[#2A2A2A]

                  bg-[#151515]
                  text-left

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#C66A3A]/50
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#0E0E0E]
                "
              >

                <div className="overflow-hidden">

                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.045]
                    "
                  />

                </div>

                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                  opacity-75
                  transition-opacity
                  duration-300
                  group-hover:opacity-95
                " />

                {/* Fake camera filename */}

                <div className="
                  absolute
                  top-3
                  left-3
                  text-[10px]
                  uppercase
                  tracking-widest
                  text-white/60
                  opacity-0
                  translate-y-1
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                ">
                  IMG_{String(image.id).padStart(4, "0")}.JPG
                </div>

                {/* Metadata */}

                <div className="absolute bottom-0 left-0 right-0 p-4">

                  <p className="text-[#F0EFEA] text-sm font-semibold mb-1">
                    {image.title}
                  </p>

                  <div className="flex items-center gap-2 text-white/60 text-[11px]">

                    <MapPin className="w-3 h-3" />

                    <span>{image.location}</span>

                    <span>•</span>

                    <span>{image.date}</span>

                  </div>

                </div>

              </motion.button>

            ))}

          </AnimatePresence>

        </motion.div>

      </section>

      {/* Lightbox */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Photo: ${selectedImage.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="
              fixed
              inset-0
              z-[100]
              bg-[#080808]/95
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
              md:p-8
            "
            onClick={() => setSelectedImage(null)}
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                relative
                max-w-6xl
                w-full
                max-h-[92vh]
                flex
                flex-col
              "
              onClick={(event) => event.stopPropagation()}
            >

              {/* Header */}

              <div className="
                flex
                items-center
                justify-between
                text-white/50
                text-xs
                mb-3
              ">

                <span>
                  IMG_
                  {String(selectedImage.id).padStart(4, "0")}
                  .JPG
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="
                    w-10 h-10
                    flex
                    items-center
                    justify-center
                    rounded-full
                    border border-white/10
                    hover:bg-white/10
                    transition-colors
                  "
                  aria-label="Close gallery"
                >
                  <X className="w-5 h-5" />
                </button>

              </div>

              {/* Image */}

              <div className="
                flex-1
                min-h-0
                flex
                justify-center
                items-center
              ">

                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="
                    max-w-full
                    max-h-[72vh]
                    object-contain
                    rounded-md
                  "
                />

              </div>

              {/* Metadata */}

              <div className="
                flex
                items-end
                justify-between
                gap-5
                flex-wrap
                mt-4
                text-white
              ">

                <div>

                  <h3 className="text-lg font-semibold text-[#F0EFEA]">
                    {selectedImage.title}
                  </h3>

                  <p className="text-white/45 text-xs mt-1">
                    {selectedImage.location} · {selectedImage.date}
                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <span className="text-xs text-white/35 mr-2">
                    {selectedIndex + 1} / {filteredImages.length}
                  </span>

                  <button
                    type="button"
                    onClick={showPrevious}
                    className="
                      w-10 h-10
                      rounded-full
                      border border-white/15
                      flex
                      items-center
                      justify-center
                      hover:bg-white/10
                      transition-colors
                    "
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    className="
                      w-10 h-10
                      rounded-full
                      border border-white/15
                      flex
                      items-center
                      justify-center
                      hover:bg-white/10
                      transition-colors
                    "
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}