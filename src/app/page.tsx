"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Network,
  Shield,
  Search,
  TrendingUp,
  Cpu,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/header";
import ProjectSimulator from "@/components/project-simulator";
import { useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

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

export default function Home() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 6000); // Increased to 6 seconds for better UX

    return () => clearInterval(timer);
  }, [page, isAutoPlaying]);

  const imageIndex =
    ((page % heroSlides.length) + heroSlides.length) % heroSlides.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Carousel Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          {/* Carousel Container */}
          <div className="relative h-96 flex items-center justify-center">
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
                className="absolute w-full text-center cursor-grab active:cursor-grabbing select-none"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <motion.h1
                  className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
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
                  className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
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
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-16 py-4 text-lg rounded-none h-14 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Commencer avec STRIVRA
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-blue-300 text-blue-100 hover:bg-blue-500 px-16 py-4 text-lg rounded-none h-14 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
                  >
                    Consultation gratuite
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-none border border-white/20 flex items-center justify-center transition-all duration-300 group"
            onClick={() => paginate(-1)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-6 w-6 text-white group-hover:text-orange-400 transition-colors duration-300" />
          </motion.button>
          <motion.button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-none border border-white/20 flex items-center justify-center transition-all duration-300 group"
            onClick={() => paginate(1)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="h-6 w-6 text-white group-hover:text-orange-400 transition-colors duration-300" />
          </motion.button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {heroSlides.map((_, index) => (
              <motion.button
                key={index}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === imageIndex
                    ? "bg-orange-400 w-8 shadow-lg"
                    : "bg-white/40 hover:bg-white/60 w-3"
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

          {/* Trusted by logos */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-20"
          >
            <p className="text-blue-200 mb-8 text-sm">
              127 entreprises nous ont fait confiance ces 7 derniers jours
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
              {[
                "BANQUE ATL",
                "ECOBANK",
                "MOOV AFRICA",
                "TOGOTELECOM",
                "CAFE CACAO",
                "MINISTERE",
              ].map((company, index) => (
                <motion.div
                  key={index}
                  className="text-white/60 text-sm font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
            <p className="text-blue-200 text-xs mt-8">
              STRIVRA fait confiance aux entreprises de 44% des grandes sociétés
              togolaises.
            </p>
          </motion.div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* All-in-one platform section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Plateforme complète de solutions IT
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des outils professionnels pour analyser, optimiser et développer
              votre infrastructure technologique
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                number: "1",
                title: "Analysez l&apos;infrastructure de vos concurrents",
                subtitle: "Audit Infrastructure →",
                icon: <Network className="h-8 w-8" />,
              },
              {
                number: "2",
                title: "Auditez & optimisez votre système",
                subtitle: "Audit Système →",
                icon: <Shield className="h-8 w-8" />,
              },
              {
                number: "3",
                title: "Découvrez ce que recherchent vos clients",
                subtitle: "Analyse Besoins →",
                icon: <Search className="h-8 w-8" />,
              },
              {
                number: "4",
                title: "Suivez vos mentions web & liens",
                subtitle: "Monitoring Web →",
                icon: <TrendingUp className="h-8 w-8" />,
              },
              {
                number: "5",
                title: "Améliorez vos solutions avec l&apos;IA",
                subtitle: "IA Solutions →",
                icon: <Cpu className="h-8 w-8" />,
              },
              {
                number: "6",
                title: "Surveillez vos performances système",
                subtitle: "Monitoring Performance →",
                icon: <BarChart3 className="h-8 w-8" />,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:border-blue-300 border-0 shadow-sm rounded-none">
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {service.number}
                      </div>
                      <div className="w-12 h-12 bg-blue-50 rounded-none flex items-center justify-center text-blue-600">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-3 leading-snug">
                      {service.title}
                    </CardTitle>
                    <div className="text-blue-600 text-sm font-medium group-hover:underline">
                      {service.subtitle}
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <p className="text-gray-600 mb-8">...& bien plus encore.</p>
            <Button className="bg-blue-600 hover:bg-blue-700 px-12 py-4 rounded-none h-14">
              Voir tous nos services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Project Simulator Section */}
      <ProjectSimulator />

      {/* Best data section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Les meilleures données
                <br />
                de l&apos;industrie IT
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Nous collectons et analysons des données sur les systèmes
                informatiques, les technologies et les performances depuis plus
                de 10 ans, traitant des téraoctets de données chaque jour.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-none h-14">
                En savoir plus sur nos données
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gray-800 rounded-none p-8">
                <h3 className="text-xl font-bold mb-6">
                  STRIVRA Bot est l&apos;outil de scan #1 le plus actif au Togo
                </h3>
                <div className="space-y-4">
                  {[
                    { rank: "1", bot: "STRIVRA Scanner", owner: "STRIVRA" },
                    { rank: "2", bot: "System Audit Bot", owner: "STRIVRA" },
                    { rank: "3", bot: "Network Monitor", owner: "TelecomBot" },
                    { rank: "4", bot: "Security Scanner", owner: "CyberSec" },
                    { rank: "5", bot: "Performance Bot", owner: "STRIVRA" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-6 h-6 bg-blue-600 text-white rounded-none text-sm flex items-center justify-center font-medium">
                          {item.rank}
                        </span>
                        <span className="font-medium">{item.bot}</span>
                      </div>
                      <span className="text-gray-400 text-sm">
                        {item.owner}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-6">
                  Source: Togo Digital Infrastructure Report
                </p>
              </div>

              <div className="bg-gray-800 rounded-none p-8">
                <p className="text-lg mb-6 font-medium">
                  Nos données & métriques sont les plus fiables de
                  l&apos;industrie IT togolaise.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-orange-400 mb-2">
                      87%
                    </div>
                    <div className="text-gray-300 text-sm leading-relaxed">
                      des professionnels IT font confiance aux données de
                      STRIVRA par rapport à nos concurrents.
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-orange-400 mb-2">
                      72%
                    </div>
                    <div className="text-gray-300 text-sm leading-relaxed">
                      des entreprises utilisent les métriques STRIVRA comme
                      référence pour leurs projets IT.
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-6">
                  Source: Étude STRIVRA sur l&apos;état des solutions IT au Togo
                  2025
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Prêt à transformer votre infrastructure IT ?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Contactez notre équipe d&apos;experts pour une consultation
              gratuite et découvrez comment STRIVRA peut optimiser vos systèmes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 px-12 py-4 text-lg rounded-none h-14">
                Consultation gratuite
              </Button>
              <Button
                variant="outline"
                className="px-12 py-4 text-lg rounded-none h-14"
              >
                Voir nos tarifs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">STRIVRA</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Votre partenaire technologique de confiance pour tous vos
                projets digitaux. Solutions sur mesure depuis 2025.
              </p>
              <div className="text-sm text-gray-500">
                <p>SARL U - Lomé, Togo</p>
                <p>contact@strivra.com • 93 67 09 12</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Développement Web
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Applications Mobile
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Consultation IT
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Formation
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  À propos
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Carrières
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Blog
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2025 STRIVRA. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
