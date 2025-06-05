// "use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check, X, ArrowRight, Star, Phone, Mail } from "lucide-react";
import Header from "@/components/header";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

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
                service: "Audit Sécurité",
                price: "300,000 FCFA",
                duration: "par audit",
                description: "Audit complet de la sécurité de vos systèmes",
              },
              {
                service: "Migration Cloud",
                price: "500,000 FCFA",
                duration: "par projet",
                description:
                  "Migration de vos données et applications vers le cloud",
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

      {/* FAQ Pricing */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Questions Fréquentes
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                question: "Les prix incluent-ils l&apos;hébergement ?",
                answer:
                  "Oui, tous nos plans incluent l&apos;hébergement pour la première année. Après cela, l&apos;hébergement coûte 50,000 FCFA/an.",
              },
              {
                question: "Proposez-vous des facilités de paiement ?",
                answer:
                  "Oui, nous acceptons les paiements échelonnés : 50% au démarrage, 30% à mi-parcours, et 20% à la livraison.",
              },
              {
                question: "Que se passe-t-il après la livraison ?",
                answer:
                  "Nous offrons 3 mois de support gratuit après livraison. Ensuite, vous pouvez souscrire à notre service de maintenance.",
              },
              {
                question: "Les prix sont-ils négociables ?",
                answer:
                  "Nos prix sont fixes pour garantir la transparence. Cependant, nous proposons des remises pour les projets multiples.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-sm rounded-none">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Custom Quote */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">
              Besoin d&apos;un Devis Personnalisé ?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Contactez-nous pour discuter de vos besoins spécifiques et obtenir
              un devis sur mesure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 px-12 py-4 text-lg rounded-none h-14">
                <Phone className="mr-2 h-5 w-5" />
                Appeler : 93 67 09 12
              </Button>
              <Button
                variant="outline"
                className="px-12 py-4 text-lg rounded-none h-14 border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Mail className="mr-2 h-5 w-5" />
                contact@strivra.com
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
