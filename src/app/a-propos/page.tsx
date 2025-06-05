// "use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Target,
  Award,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Heart,
  Lightbulb,
  Shield,
  Globe,
} from "lucide-react";
import Header from "@/components/header";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function AProposPage() {
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
              À Propos de STRIVRA
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Votre partenaire technologique de confiance pour transformer vos
              idées en solutions digitales innovantes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fondée en 2025, STRIVRA (SARL U) est née de la vision de
                démocratiser l&apos;accès aux technologies de pointe en Afrique
                de l&apos;Ouest. Basée à Lomé, au Togo, notre entreprise
                s&apos;est rapidement imposée comme un acteur incontournable de
                la transformation digitale.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nous croyons fermement que la technologie doit être accessible,
                compréhensible et adaptée aux réalités locales. C&apos;est
                pourquoi nous développons des solutions sur mesure qui répondent
                aux besoins spécifiques des entreprises togolaises et
                ouest-africaines.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-none h-12">
                Découvrir nos services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "50+", label: "Projets Réalisés" },
                { number: "25+", label: "Clients Satisfaits" },
                { number: "3", label: "Secteurs d'Activité" },
                { number: "100%", label: "Satisfaction Client" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-sm rounded-none"
                >
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre approche et définissent notre
              engagement envers nos clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-12 w-12" />,
                title: "Passion",
                description:
                  "Nous sommes passionnés par la technologie et son potentiel de transformation.",
              },
              {
                icon: <Lightbulb className="h-12 w-12" />,
                title: "Innovation",
                description:
                  "Nous recherchons constamment des solutions innovantes et adaptées aux besoins locaux.",
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Fiabilité",
                description:
                  "Nous nous engageons à livrer des solutions robustes et sécurisées.",
              },
              {
                icon: <Globe className="h-12 w-12" />,
                title: "Impact",
                description:
                  "Nous visons à créer un impact positif durable sur nos communautés.",
              },
            ].map((value, index) => (
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
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Notre Mission
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Accompagner les entreprises dans leur transformation digitale en
                proposant des solutions technologiques innovantes, accessibles
                et adaptées au contexte africain. Nous nous engageons à
                démocratiser l&apos;accès aux technologies avancées pour
                permettre à chaque organisation de prospérer dans
                l&apos;économie numérique.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-orange-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Notre Vision
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Devenir le leader régional des solutions IT en Afrique de
                l&apos;Ouest, reconnu pour notre excellence technique, notre
                approche humaine et notre contribution au développement de
                l&apos;écosystème technologique africain. Nous aspirons à un
                futur où chaque entreprise africaine peut tirer parti du
                potentiel illimité des technologies numériques.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe de passionnés dédiés à votre succès
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Kofi MENSAH",
                role: "Directeur Technique",
                description:
                  "Expert en architecture système avec 8+ ans d'expérience dans le développement d'applications d'entreprise.",
              },
              {
                name: "Amina BAWA",
                role: "Cheffe de Projet",
                description:
                  "Spécialiste en gestion de projet agile et transformation digitale, passionnée par l'innovation technologique.",
              },
              {
                name: "Jean-Baptiste TOGO",
                role: "Développeur Senior",
                description:
                  "Expert en développement web et mobile, formateur et contributeur open source actif.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-sm rounded-none text-center">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <div className="text-orange-600 font-semibold mb-4">
                      {member.role}
                    </div>
                    <p className="text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Contactez-Nous</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Prêt à démarrer votre projet ? Notre équipe est là pour vous
              accompagner
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Adresse",
                info: "Lomé, Togo",
                details: "SARL U",
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Téléphone",
                info: "93 67 09 12",
                details: "Lun-Ven 8h-18h",
              },
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Email",
                info: "contact@strivra.com",
                details: "Réponse sous 24h",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-none flex items-center justify-center mx-auto mb-6">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                <div className="text-orange-400 font-semibold mb-2">
                  {contact.info}
                </div>
                <div className="text-gray-400">{contact.details}</div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Button className="bg-orange-500 hover:bg-orange-600 px-12 py-4 text-lg rounded-none h-14">
              Démarrer un projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
