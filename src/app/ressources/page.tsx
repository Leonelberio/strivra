// "use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Book,
  FileText,
  Video,
  Download,
  ExternalLink,
  Calendar,
  Users,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/header";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function RessourcesPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Ressources</h1>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Guides, formations, livres blancs et outils pour vous accompagner
              dans votre transformation digitale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Book className="h-8 w-8" />,
                title: "Guides Techniques",
                count: "25+ guides",
                description: "Documentation complète pour démarrer vos projets",
              },
              {
                icon: <Video className="h-8 w-8" />,
                title: "Formations",
                count: "15+ heures",
                description:
                  "Vidéos de formation sur les technologies modernes",
              },
              {
                icon: <FileText className="h-8 w-8" />,
                title: "Livres Blancs",
                count: "10+ documents",
                description: "Analyses approfondies des tendances IT",
              },
              {
                icon: <Download className="h-8 w-8" />,
                title: "Outils Gratuits",
                count: "8+ outils",
                description: "Templates et outils pour optimiser vos processus",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-sm rounded-none text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-50 rounded-none flex items-center justify-center text-blue-600 mx-auto mb-6">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <div className="text-orange-600 font-semibold mb-2">
                      {category.count}
                    </div>
                    <p className="text-gray-600">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Featured Resources */}
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Ressources Populaires
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  type: "Guide",
                  title: "Guide Complet du Développement Web Moderne",
                  description:
                    "De React à Next.js, tout ce qu&apos;il faut savoir pour créer des applications performantes.",
                  downloadCount: "2,500+ téléchargements",
                  icon: <Book className="h-6 w-6" />,
                },
                {
                  type: "Formation",
                  title: "Sécurité des Systèmes d&apos;Information",
                  description:
                    "Formation complète sur les bonnes pratiques de sécurité informatique.",
                  downloadCount: "1,800+ vues",
                  icon: <Video className="h-6 w-6" />,
                },
                {
                  type: "Livre Blanc",
                  title: "L&apos;IA dans la Transformation Digitale",
                  description:
                    "Analyse des impacts de l&apos;intelligence artificielle sur les entreprises togolaises.",
                  downloadCount: "1,200+ téléchargements",
                  icon: <FileText className="h-6 w-6" />,
                },
                {
                  type: "Outil",
                  title: "Template de Cahier des Charges IT",
                  description:
                    "Modèle prêt à l&apos;emploi pour définir vos besoins techniques.",
                  downloadCount: "3,000+ téléchargements",
                  icon: <Download className="h-6 w-6" />,
                },
                {
                  type: "Guide",
                  title: "Migration vers le Cloud",
                  description:
                    "Étapes clés pour réussir votre migration cloud en toute sécurité.",
                  downloadCount: "900+ téléchargements",
                  icon: <Book className="h-6 w-6" />,
                },
                {
                  type: "Formation",
                  title: "Gestion de Projet Agile",
                  description:
                    "Méthodologies agiles adaptées aux projets IT en Afrique.",
                  downloadCount: "1,500+ vues",
                  icon: <Video className="h-6 w-6" />,
                },
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-sm rounded-none">
                    <CardHeader className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-orange-50 rounded-none flex items-center justify-center text-orange-600">
                          {resource.icon}
                        </div>
                        <span className="text-sm text-orange-600 font-semibold">
                          {resource.type}
                        </span>
                      </div>
                      <CardTitle className="text-lg mb-3">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      <p className="text-gray-600 mb-4">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {resource.downloadCount}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-none"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Accéder
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Webinars & Events */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Webinaires & Événements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Participez à nos événements pour rester à jour sur les dernières
              tendances technologiques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                date: "15 Février 2025",
                title: "Les Tendances IT 2025 en Afrique",
                description:
                  "Webinaire sur les technologies émergentes et leur impact sur le continent africain.",
                attendees: "250+ participants",
                status: "À venir",
              },
              {
                date: "28 Janvier 2025",
                title: "Cybersécurité pour les PME",
                description:
                  "Formation pratique sur la protection des données et la prévention des cyberattaques.",
                attendees: "180+ participants",
                status: "Inscriptions ouvertes",
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-sm rounded-none">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="text-blue-600 font-semibold">
                        {event.date}
                      </span>
                      <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-none">
                        {event.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees}
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700 rounded-none">
                        S&apos;inscrire
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Restez Informé</h2>
            <p className="text-xl text-gray-300 mb-10">
              Recevez nos dernières ressources et actualités directement dans
              votre boîte mail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="px-4 py-3 rounded-none text-gray-900 flex-1"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-none">
                S&apos;abonner
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
