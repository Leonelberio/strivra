"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Smartphone,
  Globe,
  Users,
  Star,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Shield,
  Clock,
  Award,
  Lightbulb,
  Target,
} from "lucide-react";
import HeroCarousel from "@/components/hero-carousel";
import ProjectSimulator from "@/components/project-simulator";
import TrustedPartners from "@/components/trusted-partners";
import ProjectsShowcase from "@/components/projects-showcase";
import TechnologyStack from "@/components/technology-stack";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function HomeClientPage() {
  return (
    <>
      {/* Hero Section avec Carousel */}
      <HeroCarousel />

      {/* Trusted Partners Section */}
      <TrustedPartners />

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Expertises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions technologiques complètes pour propulser votre
              entreprise vers le futur
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Développement Web",
                description:
                  "Applications web modernes et performantes avec React, Next.js",
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "Apps Mobile",
                description:
                  "Applications iOS et Android natives et cross-platform",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Consultation IT",
                description:
                  "Audit, architecture et stratégie de transformation digitale",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Formation",
                description:
                  "Formation de vos équipes aux nouvelles technologies",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-sm rounded-none group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-none flex items-center justify-center text-blue-600 mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulateur de Projet Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Estimez Votre Projet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obtenez une estimation personnalisée en quelques clics avec notre
              simulateur intelligent
            </p>
          </motion.div>

          <ProjectSimulator />
        </div>
      </section>

      {/* Projects Showcase Section */}
      <ProjectsShowcase />

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi Choisir STRIVRA ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre expertise locale combinée à une vision internationale pour
              des solutions qui transforment vraiment votre business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Innovation Continue",
                description:
                  "Nous restons à la pointe des technologies pour vous offrir les meilleures solutions",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Approche Sur Mesure",
                description:
                  "Chaque solution est adaptée aux spécificités de votre entreprise et de votre secteur",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Équipe Experte",
                description:
                  "Des développeurs et consultants seniors avec une expertise reconnue",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Livraison Rapide",
                description:
                  "Des délais respectés grâce à notre méthodologie agile éprouvée",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Sécurité Renforcée",
                description:
                  "Toutes nos solutions intègrent les meilleures pratiques de sécurité",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Support Premium",
                description:
                  "Un accompagnement continu pour garantir le succès de votre projet",
              },
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-sm rounded-none">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-orange-50 rounded-none flex items-center justify-center text-orange-600 mb-6">
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <TechnologyStack />

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La satisfaction de nos clients est notre plus grande récompense
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marie KOFFI",
                role: "Directrice Générale",
                company: "TechStart Lomé",
                content:
                  "STRIVRA a transformé notre vision en réalité. Leur expertise technique et leur compréhension du marché local sont exceptionnelles.",
                rating: 5,
              },
              {
                name: "Jean MENSAH",
                role: "CTO",
                company: "FinanceCorpInc",
                content:
                  "Une équipe professionnelle qui livre dans les temps. Nos systèmes n'ont jamais été aussi performants et sécurisés.",
                rating: 5,
              },
              {
                name: "Fatou BARRY",
                role: "Fondatrice",
                company: "EduTech Solutions",
                content:
                  "Le support et l'accompagnement post-livraison sont remarquables. Je recommande sans hésitation.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-sm rounded-none">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-orange-400 fill-current"
                          />
                        )
                      )}
                    </div>
                    <p className="text-gray-600 mb-6 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">
                        {testimonial.role} chez {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à Transformer Votre Vision en Réalité ?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Contactez-nous aujourd&apos;hui pour une consultation gratuite et
              découvrez comment nous pouvons propulser votre entreprise vers le
              succès
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 px-12 py-4 text-lg rounded-none h-14">
                  Consultation Gratuite
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/projets">
                <Button
                  variant="outline"
                  className="px-12 py-4 text-lg rounded-none h-14 border-white text-gray-600 hover:bg-white hover:text-gray-900"
                >
                  Voir Nos Réalisations
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>93 67 09 12</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@strivra.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Lomé, Togo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
