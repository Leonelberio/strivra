"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/solutions", label: "Solutions" },
    { href: "/ressources", label: "Ressources" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/a-propos", label: "À propos" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b bg-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/" className="text-2xl font-bold text-blue-600">
            STRIVRA
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center space-x-8"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
          <Button className="bg-orange-500 hover:bg-orange-600 px-10 py-3 rounded-none h-12">
            Commencer
          </Button>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Full-Screen Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
            style={{ top: "73px" }} // Account for header height
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col h-full"
            >
              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8">
                <nav className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="flex items-center justify-between py-4 px-4 text-xl font-medium text-gray-900 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-none group"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Mobile CTA Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="p-6 border-t border-gray-100 bg-gray-50"
              >
                <div className="space-y-4">
                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 py-4 text-lg rounded-none h-14"
                    onClick={handleLinkClick}
                  >
                    Commencer votre projet
                  </Button>

                  {/* Contact Info */}
                  <div className="text-center text-gray-600 space-y-2">
                    <p className="text-sm">Besoin d&apos;aide ?</p>
                    <div className="flex flex-col space-y-1">
                      <a
                        href="tel:+22893670912"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        📞 93 67 09 12
                      </a>
                      <a
                        href="mailto:contact@strivra.com"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        ✉️ contact@strivra.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="p-6 text-center text-sm text-gray-500 border-t border-gray-100"
              >
                <p>© 2025 STRIVRA. Tous droits réservés.</p>
                <p className="mt-1">Lomé, Togo 🇹🇬</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
