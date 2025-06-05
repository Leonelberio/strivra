"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  User,
  Building,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ContactClientPage() {
  return (
    <>
      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-Nous
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Prêt à transformer votre vision en réalité ? Parlons de votre
              projet et découvrons ensemble comment nous pouvons vous aider.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div {...fadeInUp}>
              <Card className="border-0 shadow-lg rounded-none">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Envoyez-nous un message
                  </h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Votre nom"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Entreprise
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Nom de votre entreprise"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="email"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="tel"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="+228 XX XX XX XX"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type de projet
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Développement Web</option>
                        <option>Application Mobile</option>
                        <option>Consultation IT</option>
                        <option>Formation</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <textarea
                          rows={6}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Décrivez votre projet..."
                        ></textarea>
                      </div>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-none h-12">
                      Envoyer le message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nos Coordonnées
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Nous sommes là pour vous accompagner dans tous vos projets de
                  transformation digitale.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-sm rounded-none hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-none flex items-center justify-center text-blue-600">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">
                          Adresse
                        </h3>
                        <p className="text-gray-600">
                          Lomé, Togo
                          <br />
                          Quartier Administratif
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm rounded-none hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-50 rounded-none flex items-center justify-center text-orange-600">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">
                          Téléphone
                        </h3>
                        <p className="text-gray-600">+228 93 67 09 12</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm rounded-none hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-50 rounded-none flex items-center justify-center text-green-600">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600">contact@strivra.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm rounded-none hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-50 rounded-none flex items-center justify-center text-purple-600">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">
                          Horaires
                        </h3>
                        <p className="text-gray-600">
                          Lundi - Vendredi: 8h00 - 18h00
                          <br />
                          Samedi: 9h00 - 16h00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 p-6 rounded-none">
                <h3 className="font-bold text-gray-900 mb-3">
                  Consultation Gratuite
                </h3>
                <p className="text-gray-600 text-sm">
                  Profitez d&apos;une consultation gratuite de 30 minutes pour
                  discuter de votre projet et recevoir nos recommandations
                  personnalisées.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
