"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Code,
  Smartphone,
  Globe,
  Users,
  Shield,
  Database,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ServicesClientPage() {
  return (
    <>
      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Nos Services
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Des solutions complètes pour transformer votre infrastructure IT
              et accélérer votre croissance digitale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-12 w-12" />,
                title: "Développement Web & Mobile",
                description:
                  "Applications web modernes, sites e-commerce, applications mobiles iOS et Android avec les dernières technologies React, Next.js, Flutter.",
                features: [
                  "Applications React/Next.js",
                  "Sites e-commerce",
                  "Applications mobiles",
                  "API REST/GraphQL",
                ],
              },
              {
                icon: <Globe className="h-12 w-12" />,
                title: "Consultation IT",
                description:
                  "Audit et optimisation de votre infrastructure, conseil en architecture système, migration cloud et transformation digitale.",
                features: [
                  "Audit infrastructure",
                  "Architecture système",
                  "Migration cloud",
                  "Transformation digitale",
                ],
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Sécurité & Maintenance",
                description:
                  "Protection de vos données, monitoring 24/7, sauvegardes automatisées et maintenance préventive de vos systèmes.",
                features: [
                  "Sécurité des données",
                  "Monitoring 24/7",
                  "Sauvegardes automatisées",
                  "Maintenance préventive",
                ],
              },
              {
                icon: <Database className="h-12 w-12" />,
                title: "Intégration de Solutions",
                description:
                  "Intégration de systèmes existants, API sur mesure, automatisation des processus et synchronisation des données.",
                features: [
                  "Intégration systèmes",
                  "API sur mesure",
                  "Automatisation",
                  "Synchronisation données",
                ],
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Formation & Support",
                description:
                  "Formation de vos équipes, documentation complète, support technique et accompagnement dans l'adoption des technologies.",
                features: [
                  "Formation équipes",
                  "Documentation",
                  "Support technique",
                  "Accompagnement",
                ],
              },
              {
                icon: <Smartphone className="h-12 w-12" />,
                title: "Solutions Digitales",
                description:
                  "Solutions e-commerce, marketing digital, analytics avancés et outils de gestion pour optimiser votre présence en ligne.",
                features: [
                  "E-commerce",
                  "Marketing digital",
                  "Analytics",
                  "Outils de gestion",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-sm rounded-none">
                  <CardHeader className="p-8">
                    <div className="w-16 h-16 bg-blue-50 rounded-none flex items-center justify-center text-blue-600 mb-6">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl mb-4">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
            <h2 className="text-4xl font-bold mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Contactez-nous pour discuter de vos besoins et obtenir un devis
              personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 px-12 py-4 text-lg rounded-none h-14">
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="px-12 py-4 text-lg rounded-none h-14 border-white text-white hover:bg-white hover:text-gray-900"
              >
                Voir nos tarifs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
