"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  X,
  Calculator,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

interface ProjectType {
  id: string;
  name: string;
  basePrice: number;
}

interface Feature {
  id: string;
  name: string;
  price: number;
}

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedType: ProjectType | undefined;
  selectedFeatures: Feature[];
  totalPrice: number;
  timeline: number;
}

export default function QuoteModal({
  isOpen,
  onClose,
  selectedType,
  selectedFeatures,
  totalPrice,
  timeline,
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Réinitialiser après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[9999]"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="bg-white rounded-none shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Calculator className="h-6 w-6 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      Demande de Devis Détaillé
                    </h2>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="h-8 w-8 p-0 rounded-none"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 p-6">
                  {/* Project Summary */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Résumé de votre projet
                    </h3>

                    <Card className="border border-blue-200 bg-blue-50/50 rounded-none mb-6">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Type de projet:</span>
                            <Badge className="bg-blue-600 text-white rounded-none">
                              {selectedType?.name}
                            </Badge>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="font-medium">Prix de base:</span>
                            <span className="font-bold text-blue-600">
                              {formatPrice(selectedType?.basePrice || 0)} FCFA
                            </span>
                          </div>

                          {selectedFeatures.length > 0 && (
                            <div className="space-y-2">
                              <span className="font-medium block">
                                Fonctionnalités sélectionnées:
                              </span>
                              {selectedFeatures.map((feature) => (
                                <div
                                  key={feature.id}
                                  className="flex justify-between text-sm"
                                >
                                  <span>• {feature.name}</span>
                                  <span>
                                    +{formatPrice(feature.price)} FCFA
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="border-t border-blue-200 pt-4">
                            <div className="flex justify-between items-center text-lg font-bold">
                              <span>Total estimé:</span>
                              <span className="text-2xl text-blue-600">
                                {formatPrice(totalPrice)} FCFA
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-sm bg-blue-100 p-3 rounded-none">
                            <span className="font-medium">
                              Durée estimée: {timeline} semaines
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="bg-orange-50 p-4 rounded-none border border-orange-200">
                      <p className="text-sm text-orange-800">
                        <strong>Note:</strong> Ce devis est une estimation basée
                        sur vos sélections. Le prix final sera déterminé après
                        une analyse détaillée de vos besoins spécifiques.
                      </p>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Vos informations de contact
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <User className="h-4 w-4 inline mr-2" />
                            Nom complet *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Votre nom"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Building className="h-4 w-4 inline mr-2" />
                            Entreprise *
                          </label>
                          <input
                            type="text"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Nom de votre entreprise"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="h-4 w-4 inline mr-2" />
                          Email professionnel *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="votre.email@entreprise.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="h-4 w-4 inline mr-2" />
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="+228 XX XX XX XX"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <MessageSquare className="h-4 w-4 inline mr-2" />
                          Message (optionnel)
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                          placeholder="Décrivez brièvement vos besoins spécifiques ou vos questions..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-none h-12 transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                        ) : (
                          <Send className="mr-2 h-4 w-4" />
                        )}
                        {isSubmitting
                          ? "Envoi en cours..."
                          : "Envoyer ma demande"}
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        En soumettant ce formulaire, vous acceptez d&apos;être
                        contacté par STRIVRA concernant votre demande de devis.
                      </p>
                    </form>
                  </div>
                </div>
              </>
            ) : (
              /* Success State */
              <div className="p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15, stiffness: 200 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Demande envoyée avec succès !
                </h3>

                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Merci pour votre demande de devis. Notre équipe va analyser
                  votre projet et vous contacter dans les 24 heures pour
                  discuter des détails.
                </p>

                <div className="bg-blue-50 p-4 rounded-none border border-blue-200 max-w-md mx-auto">
                  <p className="text-sm text-blue-800">
                    <strong>Prochaines étapes:</strong>
                    <br />
                    1. Analyse de votre demande
                    <br />
                    2. Appel de découverte (30 min)
                    <br />
                    3. Proposition détaillée sous 48h
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
