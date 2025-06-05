"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Globe,
  ShoppingCart,
  Database,
  Shield,
  Zap,
  Users,
  BarChart3,
  Calculator,
  ArrowRight,
  CheckCircle,
  Clock,
  Sparkles,
  Trash2,
} from "lucide-react";
import { useState, useEffect } from "react";
import QuoteModal from "@/components/quote-modal";

const projectTypes = [
  {
    id: "website",
    name: "Site Web",
    icon: <Globe className="h-6 w-6" />,
    basePrice: 750000,
    description: "Site vitrine professionnel",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: <ShoppingCart className="h-6 w-6" />,
    basePrice: 1500000,
    description: "Boutique en ligne complète",
    color: "from-green-500 to-green-600",
  },
  {
    id: "mobile",
    name: "App Mobile",
    icon: <Smartphone className="h-6 w-6" />,
    basePrice: 2000000,
    description: "Application iOS/Android",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "custom",
    name: "Solution Sur Mesure",
    icon: <Database className="h-6 w-6" />,
    basePrice: 3000000,
    description: "Développement personnalisé",
    color: "from-orange-500 to-orange-600",
  },
];

const features = [
  {
    id: "design",
    name: "Design Premium",
    price: 300000,
    icon: <Sparkles className="h-5 w-5" />,
    category: "design",
  },
  {
    id: "cms",
    name: "Système de Gestion",
    price: 400000,
    icon: <Database className="h-5 w-5" />,
    category: "backend",
  },
  {
    id: "security",
    name: "Sécurité Avancée",
    price: 250000,
    icon: <Shield className="h-5 w-5" />,
    category: "security",
  },
  {
    id: "analytics",
    name: "Analytics & Reporting",
    price: 200000,
    icon: <BarChart3 className="h-5 w-5" />,
    category: "analytics",
  },
  {
    id: "performance",
    name: "Optimisation Performance",
    price: 300000,
    icon: <Zap className="h-5 w-5" />,
    category: "performance",
  },
  {
    id: "multiuser",
    name: "Multi-utilisateurs",
    price: 350000,
    icon: <Users className="h-5 w-5" />,
    category: "backend",
  },
];

export default function ProjectSimulator() {
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedType = localStorage.getItem("strivra-simulator-type");
      const savedFeatures = localStorage.getItem("strivra-simulator-features");

      if (savedType) {
        setSelectedType(savedType);
      }

      if (savedFeatures) {
        try {
          const features = JSON.parse(savedFeatures);
          if (Array.isArray(features)) {
            setSelectedFeatures(features);
          }
        } catch (error) {
          console.error("Error parsing saved features:", error);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (selectedType) {
        localStorage.setItem("strivra-simulator-type", selectedType);
      } else {
        localStorage.removeItem("strivra-simulator-type");
      }
    }
  }, [selectedType]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (selectedFeatures.length > 0) {
        localStorage.setItem(
          "strivra-simulator-features",
          JSON.stringify(selectedFeatures)
        );
      } else {
        localStorage.removeItem("strivra-simulator-features");
      }
    }
  }, [selectedFeatures]);

  const clearSimulator = () => {
    setSelectedType("");
    setSelectedFeatures([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("strivra-simulator-type");
      localStorage.removeItem("strivra-simulator-features");
    }
  };

  const calculateTotal = () => {
    const typePrice =
      projectTypes.find((type) => type.id === selectedType)?.basePrice || 0;
    const featuresPrice = selectedFeatures.reduce((total, featureId) => {
      const feature = features.find((f) => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);
    return typePrice + featuresPrice;
  };

  const calculateTimeline = () => {
    const baseWeeks =
      selectedType === "website"
        ? 3
        : selectedType === "ecommerce"
        ? 6
        : selectedType === "mobile"
        ? 8
        : 12;
    const additionalWeeks = Math.ceil(selectedFeatures.length / 2);
    return baseWeeks + additionalWeeks;
  };

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calculator className="h-8 w-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900">
              Simulateur de Projet
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estimez le coût et la durée de votre projet IT en quelques clics
          </p>

          {/* Add auto-save indicator */}
          {(selectedType || selectedFeatures.length > 0) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center justify-center gap-2 text-sm text-green-600 bg-green-50 px-4 py-2 rounded-none border border-green-200"
            >
              <CheckCircle className="h-4 w-4" />
              <span>Vos sélections sont automatiquement sauvegardées</span>
            </motion.div>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project Type Selection */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                1. Choisissez votre type de projet
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <motion.div
                    key={type.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      className={`cursor-pointer transition-all duration-300 border-2 rounded-none ${
                        selectedType === type.id
                          ? "border-blue-500 shadow-lg bg-blue-50"
                          : "border-gray-200 hover:border-blue-300 hover:shadow-md"
                      }`}
                      onClick={() => setSelectedType(type.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div
                            className={`w-12 h-12 rounded-none bg-gradient-to-br ${type.color} flex items-center justify-center text-white`}
                          >
                            {type.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg">{type.name}</h4>
                            <p className="text-gray-600 text-sm">
                              {type.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-blue-600">
                            {formatPrice(type.basePrice)} FCFA
                          </span>
                          {selectedType === type.id && (
                            <CheckCircle className="h-6 w-6 text-green-500" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features Selection */}
            <AnimatePresence>
              {selectedType && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    2. Sélectionnez vos fonctionnalités
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.map((feature) => (
                      <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Card
                          className={`cursor-pointer transition-all duration-300 border rounded-none ${
                            selectedFeatures.includes(feature.id)
                              ? "border-orange-500 bg-orange-50 shadow-md"
                              : "border-gray-200 hover:border-orange-300 hover:shadow-sm"
                          }`}
                          onClick={() => toggleFeature(feature.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-none bg-orange-100 flex items-center justify-center text-orange-600">
                                  {feature.icon}
                                </div>
                                <div>
                                  <h5 className="font-semibold">
                                    {feature.name}
                                  </h5>
                                  <p className="text-sm text-gray-600">
                                    +{formatPrice(feature.price)} FCFA
                                  </p>
                                </div>
                              </div>
                              {selectedFeatures.includes(feature.id) && (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <Card className="border-0 shadow-xl rounded-none bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Calculator className="h-6 w-6" />
                    Estimation de Projet
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {selectedType ? (
                    <>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b border-blue-500/30">
                          <span>Type de projet:</span>
                          <Badge
                            variant="secondary"
                            className="bg-white/20 text-white border-0"
                          >
                            {
                              projectTypes.find((t) => t.id === selectedType)
                                ?.name
                            }
                          </Badge>
                        </div>

                        <div className="flex justify-between items-center">
                          <span>Prix de base:</span>
                          <span className="font-bold">
                            {formatPrice(
                              projectTypes.find((t) => t.id === selectedType)
                                ?.basePrice || 0
                            )}{" "}
                            FCFA
                          </span>
                        </div>

                        {selectedFeatures.length > 0 && (
                          <div className="space-y-2">
                            <span className="text-sm font-medium">
                              Fonctionnalités:
                            </span>
                            {selectedFeatures.map((featureId) => {
                              const feature = features.find(
                                (f) => f.id === featureId
                              );
                              return (
                                <div
                                  key={featureId}
                                  className="flex justify-between text-sm"
                                >
                                  <span>• {feature?.name}</span>
                                  <span>
                                    +{formatPrice(feature?.price || 0)}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        <div className="border-t border-blue-500/30 pt-4">
                          <div className="flex justify-between items-center text-lg font-bold">
                            <span>Total:</span>
                            <motion.span
                              key={calculateTotal()}
                              initial={{ scale: 1.2, color: "#fbbf24" }}
                              animate={{ scale: 1, color: "#ffffff" }}
                              className="text-2xl"
                            >
                              {formatPrice(calculateTotal())} FCFA
                            </motion.span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm bg-white/10 rounded-none p-3">
                          <Clock className="h-4 w-4" />
                          <span>
                            Durée estimée: {calculateTimeline()} semaines
                          </span>
                        </div>
                      </div>

                      <Button
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-none h-12"
                        onClick={() => setIsModalOpen(true)}
                      >
                        Demander un devis détaillé
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full border-white/30 text-white hover:bg-white/20 rounded-none h-10"
                        onClick={clearSimulator}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Recommencer
                      </Button>

                      <p className="text-xs text-blue-100 text-center">
                        * Prix indicatifs. Devis final après analyse détaillée
                      </p>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <Calculator className="h-8 w-8" />
                      </motion.div>
                      <p className="text-blue-100">
                        Sélectionnez un type de projet pour voir
                        l&apos;estimation
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedType={projectTypes.find((t) => t.id === selectedType)}
        selectedFeatures={selectedFeatures
          .map((id) => features.find((f) => f.id === id))
          .filter((f): f is (typeof features)[0] => f !== undefined)}
        totalPrice={calculateTotal()}
        timeline={calculateTimeline()}
      />
    </section>
  );
}
