"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check, X, ArrowRight, Star, Phone, Mail } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function PricingClientPage() {
  return (
    <>
      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Tarifs Transparents
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Des prix clairs et adaptés à tous les budgets. Pas de frais
              cachés, pas de surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Starter",
                price: "750,000",
                period: "FCFA / projet",
                description:
                  "Parfait pour les petites entreprises qui démarrent leur transformation digitale",
                popular: false,
                features: [
                  "Site web vitrine (5 pages)",
                  "Design responsive",
                  "Hébergement 1 an inclus",
                  "Certificat SSL",
                  "Formation de base",
                  "Support email",
                ],
                notIncluded: [
                  "E-commerce",
                  "Applications mobiles",
                  "Intégrations avancées",
                  "Support prioritaire",
                ],
              },
              {
                name: "Business",
                price: "2,500,000",
                period: "FCFA / projet",
                description:
                  "Pour les entreprises qui veulent une solution complète et professionnelle",
                popular: true,
                features: [
                  "Site web complet (illimité)",
                  "Boutique e-commerce",
                  "Application mobile basique",
                  "Intégrations API",
                  "Analytics avancés",
                  "Formation approfondie",
                  "Support prioritaire",
                  "Maintenance 6 mois",
                ],
                notIncluded: [
                  "Applications mobiles complexes",
                  "IA personnalisée",
                ],
              },
              {
                name: "Enterprise",
                price: "Sur devis",
                period: "Solutions personnalisées",
                description:
                  "Solutions sur mesure pour les grandes entreprises avec des besoins spécifiques",
                popular: false,
                features: [
                  "Solutions 100% sur mesure",
                  "Applications mobiles avancées",
                  "IA et Machine Learning",
                  "Intégrations complexes",
                  "Architecture cloud",
                  "Formation équipe complète",
                  "Support 24/7",
                  "Maintenance illimitée",
                  "Consultant dédié",
                ],
                notIncluded: [],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-none text-sm font-semibold">
                    <Star className="h-4 w-4 inline mr-1" />
                    Plus Populaire
                  </div>
                )}
                <Card
                  className={`h-full transition-all duration-300 border-0 shadow-sm rounded-none ${
                    plan.popular
                      ? "shadow-xl border-2 border-orange-500"
                      : "hover:shadow-xl"
                  }`}
                >
                  <CardHeader className="p-8 text-center">
                    <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-blue-600">
                        {plan.price}
                      </div>
                      <div className="text-gray-500">{plan.period}</div>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {plan.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-center opacity-50">
                          <X className="h-5 w-5 text-gray-400 mr-3" />
                          <span className="text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className={`w-full py-3 rounded-none h-12 ${
                        plan.popular
                          ? "bg-orange-500 hover:bg-orange-600"
                          : "bg-blue-600 hover:bg-blue-700"
                      }`}
                    >
                      {plan.name === "Enterprise"
                        ? "Nous contacter"
                        : "Commencer"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Services À la Carte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complétez votre projet avec nos services additionnels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                service: "Formation Équipe",
                price: "150,000 FCFA",
                duration: "par jour",
                description:
                  "Formation de vos équipes sur les outils développés",
              },
              {
                service: "Maintenance Mensuelle",
                price: "75,000 FCFA",
                duration: "par mois",
                description: "Maintenance, mises à jour et support continu",
              },
              {
                service: "Audit de Sécurité",
                price: "300,000 FCFA",
                duration: "par audit",
                description: "Analyse complète de sécurité de vos systèmes",
              },
              {
                service: "Migration de Données",
                price: "200,000 FCFA",
                duration: "par migration",
                description: "Transfert sécurisé de vos données existantes",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-sm rounded-none text-center">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">
                      {service.service}
                    </h3>
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {service.price}
                    </div>
                    <div className="text-gray-500 text-sm mb-4">
                      {service.duration}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur nos tarifs et services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Les prix incluent-ils la maintenance ?",
                answer:
                  "Les forfaits Business et Enterprise incluent une période de maintenance. Pour le forfait Starter, la maintenance est disponible en option.",
              },
              {
                question: "Puis-je modifier mon forfait en cours de projet ?",
                answer:
                  "Oui, il est possible d'upgrader votre forfait pendant le développement. Nous ajusterons la facturation en conséquence.",
              },
              {
                question: "Quels sont les délais de livraison ?",
                answer:
                  "Starter: 2-4 semaines, Business: 6-12 semaines, Enterprise: selon la complexité. Nous établissons un planning détaillé avant de commencer.",
              },
              {
                question: "Proposez-vous des facilités de paiement ?",
                answer:
                  "Oui, nous proposons des échelonnements de paiement adaptés à vos besoins. Contactez-nous pour discuter des modalités.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-sm rounded-none">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
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
              Contactez-nous pour un devis personnalisé ou pour discuter de vos
              besoins spécifiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button className="bg-orange-500 hover:bg-orange-600 px-12 py-4 text-lg rounded-none h-14">
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="px-12 py-4 text-lg rounded-none h-14 border-white text-white hover:bg-white hover:text-gray-900"
              >
                Consultation gratuite
              </Button>
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
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
