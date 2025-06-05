"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const heroSlides = [
  {
    title: "Votre stratégie IT & digitale",
    highlight: "soutenue par des données réelles,",
    subtitle: "des actions concrètes",
    description:
      "Solutions complètes de consultation informatique, développement web/mobile, intégration de systèmes et formation pour transformer votre entreprise",
  },
  {
    title: "Transformez vos idées",
    highlight: "en solutions digitales innovantes",
    subtitle: "avec STRIVRA",
    description:
      "De l'analyse de vos besoins à la mise en production, nous vous accompagnons à chaque étape de votre transformation digitale",
  },
  {
    title: "L'excellence technique",
    highlight: "au service de votre croissance",
    subtitle: "en Afrique de l'Ouest",
    description:
      "Expertise locale, standards internationaux. Découvrez nos solutions sur mesure adaptées aux réalités du marché togolais et ouest-africain",
  },
  {
    title: "Accélérez votre business",
    highlight: "avec des technologies de pointe",
    subtitle: "accessibles et performantes",
    description:
      "IA, Cloud, Mobile, Web - Toutes les technologies modernes pour propulser votre entreprise vers le succès",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
};

const swipeConfidenceThreshold = 5000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function HeroCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Memoize paginate function
  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => clearInterval(timer);
  }, [page, isAutoPlaying, paginate]);

  const imageIndex =
    ((page % heroSlides.length) + heroSlides.length) % heroSlides.length;

  return (
    <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 px-4 md:px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Carousel Container */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: {
                  type: "tween",
                  ease: [0.25, 0.46, 0.45, 0.94],
                  duration: 0.8,
                },
                opacity: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full text-center cursor-grab active:cursor-grabbing select-none px-4"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 leading-tight"
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {heroSlides[imageIndex].title}
                <br />
                <span className="text-orange-400">
                  {heroSlides[imageIndex].highlight}
                </span>
                <br />
                {heroSlides[imageIndex].subtitle}
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {heroSlides[imageIndex].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-16"
              >
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 md:px-16 py-3 md:py-4 text-base md:text-lg rounded-none h-12 md:h-14 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <span className="hidden sm:inline">
                    Commencer avec STRIVRA
                  </span>
                  <span className="sm:hidden">Commencer</span>
                  <ArrowRight className="ml-2 md:ml-3 h-4 md:h-5 w-4 md:w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-300 text-blue-600 hover:bg-blue-500 hover:text-blue-100 px-8 md:px-16 py-3 md:py-4 text-base md:text-lg rounded-none h-12 md:h-14 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
                >
                  <span className="hidden sm:inline">
                    Consultation gratuite
                  </span>
                  <span className="sm:hidden">Consultation</span>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-10 md:w-12 h-10 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-none border border-white/20 flex items-center justify-center transition-all duration-300 group"
          onClick={() => paginate(-1)}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="h-5 md:h-6 w-5 md:w-6 text-white group-hover:text-orange-400 transition-colors duration-300" />
        </motion.button>
        <motion.button
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-10 md:w-12 h-10 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-none border border-white/20 flex items-center justify-center transition-all duration-300 group"
          onClick={() => paginate(1)}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="h-5 md:h-6 w-5 md:w-6 text-white group-hover:text-orange-400 transition-colors duration-300" />
        </motion.button>

        {/* Slide Indicators */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
          {heroSlides.map((_, index) => (
            <motion.button
              key={index}
              className={`h-2 md:h-3 rounded-full transition-all duration-500 ${
                index === imageIndex
                  ? "bg-orange-400 w-6 md:w-8 shadow-lg"
                  : "bg-white/40 hover:bg-white/60 w-2 md:w-3"
              }`}
              onClick={() => {
                const newDirection = index > imageIndex ? 1 : -1;
                setPage([index, newDirection]);
              }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              layout
              layoutId={`indicator-${index}`}
            />
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
