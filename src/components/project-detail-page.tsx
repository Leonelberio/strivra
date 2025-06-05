"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  Quote,
  ExternalLink,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  results: Array<{
    metric: string;
    value: string;
    description: string;
  }>;
  duration: string;
  status: string;
  year: string;
  teamSize: string;
  budget: string;
  challenges: string[];
  testimonial: {
    content: string;
    author: string;
    role: string;
  };
}

interface ProjectDetailPageProps {
  project: Project;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const staggerItem = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div {...fadeInUp}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Retour aux projets
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-white/20 text-white border-white/30 mb-4 rounded-none">
                  {project.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-300" />
                    <span>Année: {project.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-300" />
                    <span>Durée: {project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-300" />
                    <span>Équipe: {project.teamSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Statut: {project.status}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Full Description */}
              <motion.div {...fadeInUp} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Vue d&apos;ensemble du projet
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.fullDescription}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Fonctionnalités clés
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-800">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div {...fadeInUp} className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Technologies utilisées
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-4 py-2 text-sm rounded-none border-blue-200 text-blue-700 bg-blue-50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* Challenges */}
              <motion.div {...fadeInUp} className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Défis relevés
                </h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl"
                    >
                      <Target className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800">{challenge}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info Card */}
              <motion.div {...fadeInUp}>
                <Card className="border-0 shadow-lg rounded-xl">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Informations du projet
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <span className="text-sm text-gray-500">Client</span>
                        <p className="font-medium text-gray-900">
                          {project.client}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Budget</span>
                        <p className="font-medium text-gray-900">
                          {project.budget}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Durée</span>
                        <p className="font-medium text-gray-900">
                          {project.duration}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Équipe</span>
                        <p className="font-medium text-gray-900">
                          {project.teamSize}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-none">
                        Démarrer un projet similaire
                        <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Results */}
              <motion.div {...fadeInUp}>
                <Card className="border-0 shadow-lg rounded-xl">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Résultats obtenus
                    </h3>
                    <div className="space-y-4">
                      {project.results.map((result, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm font-medium text-gray-900 mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs text-gray-500">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <Card className="border-0 shadow-lg rounded-xl bg-white">
              <CardContent className="p-12">
                <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                <blockquote className="text-xl text-gray-800 mb-8 italic leading-relaxed">
                  &ldquo;{project.testimonial.content}&rdquo;
                </blockquote>
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    {project.testimonial.author}
                  </div>
                  <div className="text-blue-600">
                    {project.testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vous avez un projet similaire ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Parlons de votre vision et découvrons ensemble comment nous
              pouvons la concrétiser
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 text-lg rounded-none h-14">
                Commencer un projet
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-3 text-lg rounded-none h-14"
              >
                Voir tous nos projets
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
