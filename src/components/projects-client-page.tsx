"use client";

import { motion } from "framer-motion";
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
  Building,
  GraduationCap,
  Leaf,
  Banknote,
  Heart,
  ShoppingCart,
  Search,
  Filter,
  Calendar,
  Tag,
} from "lucide-react";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const allProjects = [
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
  },
  {
    id: 4,
    title: "Application E-commerce Mobile",
    client: "African Market",
    category: "E-commerce",
    description:
      "Application mobile native pour la vente en ligne avec paiement mobile intégré et livraison.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    technologies: ["React Native", "Firebase", "Stripe", "Node.js"],
    results: [
      {
        metric: "Téléchargements",
        value: "100K+",
        icon: <TrendingUp className="h-4 w-4" />,
      },
      {
        metric: "Ventes",
        value: "+300%",
        icon: <Award className="h-4 w-4" />,
      },
      {
        metric: "Utilisateurs actifs",
        value: "15K+",
        icon: <Users className="h-4 w-4" />,
      },
    ],
    duration: "5 mois",
    status: "Livré",
    year: "2023",
  },
  {
    id: 5,
    title: "Système de Gestion Hospitalière",
    client: "CHU Lomé",
    category: "HealthTech",
    description:
      "Plateforme complète de gestion des patients, rendez-vous et dossiers médicaux avec télémédecine.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
    results: [
      {
        metric: "Patients",
        value: "50K+",
        icon: <Users className="h-4 w-4" />,
      },
      {
        metric: "Efficacité",
        value: "+150%",
        icon: <TrendingUp className="h-4 w-4" />,
      },
      {
        metric: "Satisfaction",
        value: "95%",
        icon: <Heart className="h-4 w-4" />,
      },
    ],
    duration: "12 mois",
    status: "Livré",
    year: "2023",
  },
  {
    id: 6,
    title: "Portail RH Corporate",
    client: "TotalEnergies Togo",
    category: "Corporate",
    description:
      "Solution RH complète avec gestion des employés, paies, congés et évaluations de performance.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker"],
    results: [
      {
        metric: "Employés",
        value: "2000+",
        icon: <Users className="h-4 w-4" />,
      },
      {
        metric: "Productivité",
        value: "+120%",
        icon: <TrendingUp className="h-4 w-4" />,
      },
      {
        metric: "Automatisation",
        value: "85%",
        icon: <CheckCircle className="h-4 w-4" />,
      },
    ],
    duration: "9 mois",
    status: "Livré",
    year: "2023",
  },
];

const categories = [
  "Tous",
  "Fintech",
  "EdTech",
  "AgriTech",
  "E-commerce",
  "HealthTech",
  "Corporate",
];

const statusOptions = ["Tous", "Livré", "En cours"];

const categoryIcons = {
  "Fintech": <Banknote className="h-5 w-5" />,
  "EdTech": <GraduationCap className="h-5 w-5" />,
  "AgriTech": <Leaf className="h-5 w-5" />,
  "HealthTech": <Heart className="h-5 w-5" />,
  "E-commerce": <ShoppingCart className="h-5 w-5" />,
  "Corporate": <Building className="h-5 w-5" />,
};

export default function ProjectsClientPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedStatus, setSelectedStatus] = useState("Tous");
  const [selectedYear, setSelectedYear] = useState("Tous");

  const years = [
    "Tous",
    ...Array.from(new Set(allProjects.map((p) => p.year))),
  ];

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "Tous" || project.category === selectedCategory;
      const matchesStatus =
        selectedStatus === "Tous" || project.status === selectedStatus;
      const matchesYear =
        selectedYear === "Tous" || project.year === selectedYear;

      return matchesSearch && matchesCategory && matchesStatus && matchesYear;
    });
  }, [searchTerm, selectedCategory, selectedStatus, selectedYear]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <>
      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Projets</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Découvrez notre portfolio de solutions innovantes qui transforment
              les entreprises à travers l&apos;Afrique de l&apos;Ouest
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par titre, client ou description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Tag className="inline h-4 w-4 mr-1" />
                  Catégorie
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <CheckCircle className="inline h-4 w-4 mr-1" />
                  Statut
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Année
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <div className="w-full p-3 bg-blue-50 rounded-none text-center">
                  <div className="text-sm text-gray-600">Résultats</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {filteredProjects.length}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length === 0 ? (
            <motion.div {...fadeInUp} className="text-center py-20">
              <Filter className="h-20 w-20 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Aucun projet trouvé
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Essayez d&apos;ajuster vos filtres ou votre recherche pour
                trouver des projets correspondants.
              </p>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
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
                        {project.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs rounded-none"
                            >
                              {tech}
                            </Badge>
                          ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs rounded-none"
                          >
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
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Votre projet sera le prochain ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez nos clients satisfaits et transformez votre vision en
              réalité avec nos solutions sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 text-lg rounded-none h-14">
                  Démarrer un projet
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg rounded-none h-14"
                >
                  Voir nos services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
