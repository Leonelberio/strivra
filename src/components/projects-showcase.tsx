"use client";

import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Users,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Building,
  GraduationCap,
  Leaf,
  Banknote,
  Heart,
  Zap,
  ShoppingCart,
} from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    id: 1,
    title: "Plateforme E-Banking Moderne",
    client: "ECOBANK Togo",
    category: "Fintech",
    description:
      "Solution bancaire digitale complète avec authentification biométrique et transactions en temps réel.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Blockchain"],
    results: [
      {
        metric: "Transactions",
        value: "+250%",
        icon: <TrendingUp className="h-4 w-4" />,
      },
      {
        metric: "Utilisateurs",
        value: "50K+",
        icon: <Users className="h-4 w-4" />,
      },
      {
        metric: "Satisfaction",
        value: "98%",
        icon: <Award className="h-4 w-4" />,
      },
    ],
    duration: "8 mois",
    status: "Livré",
    year: "2024",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    id: 2,
    title: "Plateforme d'Apprentissage en Ligne",
    client: "Université de Lomé",
    category: "EdTech",
    description:
      "Système de gestion d'apprentissage avec cours interactifs, évaluations en ligne et suivi des progrès.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    technologies: ["Next.js", "PostgreSQL", "WebRTC", "AI"],
    results: [
      {
        metric: "Étudiants",
        value: "25K+",
        icon: <Users className="h-4 w-4" />,
      },
      {
        metric: "Cours",
        value: "500+",
        icon: <GraduationCap className="h-4 w-4" />,
      },
      {
        metric: "Engagement",
        value: "+180%",
        icon: <TrendingUp className="h-4 w-4" />,
      },
    ],
    duration: "6 mois",
    status: "Livré",
    year: "2024",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    id: 3,
    title: "Système de Traçabilité Blockchain",
    client: "CAFE-CACAO",
    category: "AgriTech",
    description:
      "Solution de traçabilité complète de la chaîne d'approvisionnement avec blockchain et IoT.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    technologies: ["Blockchain", "IoT", "React", "Python"],
    results: [
      {
        metric: "Traçabilité",
        value: "+200%",
        icon: <CheckCircle className="h-4 w-4" />,
      },
      {
        metric: "Producteurs",
        value: "1000+",
        icon: <Users className="h-4 w-4" />,
      },
      {
        metric: "Transparence",
        value: "100%",
        icon: <Award className="h-4 w-4" />,
      },
    ],
    duration: "10 mois",
    status: "En cours",
    year: "2024",
    gradient: "from-orange-600 to-amber-600",
  },
];

const projectStats = [
  {
    number: "150+",
    label: "Projets Réalisés",
    icon: <CheckCircle className="h-8 w-8" />,
    color: "text-blue-600",
  },
  {
    number: "50+",
    label: "Clients Satisfaits",
    icon: <Heart className="h-8 w-8" />,
    color: "text-red-500",
  },
  {
    number: "98%",
    label: "Taux de Réussite",
    icon: <Award className="h-8 w-8" />,
    color: "text-green-600",
  },
  {
    number: "24/7",
    label: "Support Continu",
    icon: <Zap className="h-8 w-8" />,
    color: "text-orange-500",
  },
];

const categoryIcons = {
  "Fintech": <Banknote className="h-5 w-5" />,
  "EdTech": <GraduationCap className="h-5 w-5" />,
  "AgriTech": <Leaf className="h-5 w-5" />,
  "HealthTech": <Heart className="h-5 w-5" />,
  "E-commerce": <ShoppingCart className="h-5 w-5" />,
  "Corporate": <Building className="h-5 w-5" />,
};

export default function ProjectsShowcase() {
  const [, setSelectedProject] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header with animated stats */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <Badge className="mb-4 px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-none">
              Nos Réalisations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Projets qui Transforment l&apos;Avenir Digital
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nous avons aidé nos clients à révolutionner
              leurs activités avec des solutions innovantes et sur mesure
            </p>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {projectStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div className="bg-white rounded-none p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div
                    className={`${stat.color} mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Projects Gallery */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setSelectedProject(index)}
              className="group cursor-pointer"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-none bg-white">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-blue-600/80 group-hover:bg-blue-600/90 transition-all duration-300" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm rounded-none">
                      {
                        categoryIcons[
                          project.category as keyof typeof categoryIcons
                        ]
                      }
                      <span className="ml-1">{project.category}</span>
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`${
                        project.status === "Livré"
                          ? "bg-green-500"
                          : "bg-orange-500"
                      } text-white border-0 rounded-none`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-xl font-bold">{project.year}</div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Client & Title */}
                  <div className="mb-4">
                    <p className="text-sm text-blue-600 font-medium mb-1">
                      {project.client}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs rounded-none"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs rounded-none">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="flex items-center justify-center text-blue-600 mb-1">
                          {result.icon}
                        </div>
                        <div className="text-sm font-bold text-gray-900">
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Duration */}
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Durée: {project.duration}</span>
                  </div>

                  {/* CTA */}
                  <Link href={`/projets/${project.id}`}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 rounded-none border-blue-600 text-blue-600"
                    >
                      Voir les détails
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center bg-blue-600 rounded-none p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Prêt à rejoindre nos success stories ?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transformons ensemble votre vision en réalité avec des solutions
            technologiques innovantes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-3 rounded-none h-12 font-medium">
                Démarrer un projet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/projets">
              <Button
                variant="outline"
                className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-3 rounded-none h-12"
              >
                Voir tous nos projets
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
