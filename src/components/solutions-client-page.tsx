"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Building2,
  Store,
  GraduationCap,
  Heart,
  Landmark,
  Factory,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function SolutionsClientPage() {
  return (
    <>
      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Solutions par Secteur
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Des solutions sur mesure adaptées aux besoins spécifiques de votre
              secteur d&apos;activité
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="h-12 w-12" />,
                title: "Entreprises & PME",
                description:
                  "Solutions complètes pour optimiser vos processus métier, améliorer la productivité et accélérer votre croissance.",
                solutions: [
                  "ERP sur mesure",
                  "CRM intégré",
                  "Automatisation",
                  "Business Intelligence",
                ],
              },
              {
                icon: <Store className="h-12 w-12" />,
                title: "E-commerce & Retail",
                description:
                  "Plateformes e-commerce performantes, gestion des stocks, paiements sécurisés et expérience client optimisée.",
                solutions: [
                  "Boutiques en ligne",
                  "Gestion stocks",
                  "Paiements sécurisés",
                  "Analytics ventes",
                ],
              },
              {
                icon: <GraduationCap className="h-12 w-12" />,
                title: "Éducation & Formation",
                description:
                  "Plateformes d&apos;apprentissage en ligne, gestion des étudiants, contenus interactifs et suivi des performances.",
                solutions: [
                  "LMS personnalisé",
                  "Gestion étudiants",
                  "Contenu interactif",
                  "Évaluations en ligne",
                ],
              },
              {
                icon: <Heart className="h-12 w-12" />,
                title: "Santé & Médical",
                description:
                  "Systèmes de gestion hospitalière, dossiers patients électroniques, télémédecine et conformité RGPD.",
                solutions: [
                  "Gestion hospitalière",
                  "Dossiers patients",
                  "Télémédecine",
                  "Conformité RGPD",
                ],
              },
              {
                icon: <Landmark className="h-12 w-12" />,
                title: "Banque & Finance",
                description:
                  "Solutions fintech, gestion des risques, conformité réglementaire et systèmes de paiement sécurisés.",
                solutions: [
                  "Solutions fintech",
                  "Gestion risques",
                  "Conformité",
                  "Paiements sécurisés",
                ],
              },
              {
                icon: <Factory className="h-12 w-12" />,
                title: "Industrie & Manufacturing",
                description:
                  "IoT industriel, maintenance prédictive, optimisation des processus et traçabilité des produits.",
                solutions: [
                  "IoT industriel",
                  "Maintenance prédictive",
                  "Optimisation processus",
                  "Traçabilité",
                ],
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-sm rounded-none">
                  <CardHeader className="p-8">
                    <div className="w-16 h-16 bg-orange-50 rounded-none flex items-center justify-center text-orange-600 mb-6">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl mb-4">
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.solutions.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {item}
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

      {/* Success Stories */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Histoires de Succès
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nos solutions ont transformé les entreprises de
              nos clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "ECOBANK Togo",
                sector: "Banque & Finance",
                result: "+150% d&apos;efficacité opérationnelle",
                description:
                  "Modernisation complète du système bancaire avec des solutions fintech innovantes.",
              },
              {
                company: "Université de Lomé",
                sector: "Éducation",
                result: "25,000+ étudiants connectés",
                description:
                  "Plateforme d&apos;apprentissage en ligne pour la formation à distance.",
              },
              {
                company: "CAFE-CACAO",
                sector: "Agriculture",
                result: "+200% de traçabilité",
                description:
                  "Système de traçabilité blockchain pour la chaîne d&apos;approvisionnement.",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-sm rounded-none">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {story.company}
                      </h3>
                      <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-none font-semibold">
                        {story.sector}
                      </span>
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-orange-600 mb-2">
                        {story.result}
                      </div>
                    </div>
                    <p className="text-gray-600 text-center mb-6">
                      {story.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full rounded-none"
                      size="sm"
                    >
                      Lire l&apos;étude de cas
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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
              Votre Secteur Nécessite une Solution Spécifique ?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Contactez-nous pour découvrir comment nous pouvons adapter nos
              solutions à vos besoins sectoriels
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 px-12 py-4 text-lg rounded-none h-14">
                Consultation gratuite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="px-12 py-4 text-lg rounded-none h-14 border-white text-white hover:bg-white hover:text-gray-900"
              >
                Voir nos études de cas
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
