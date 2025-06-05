"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/" className="text-2xl font-bold text-blue-600">
            STRIVRA
          </Link>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center space-x-8"
        >
          <Link
            href="/services"
            className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Services
          </Link>
          <Link
            href="/solutions"
            className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Solutions
          </Link>
          <Link
            href="/ressources"
            className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Ressources
          </Link>
          <Link
            href="/tarifs"
            className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Tarifs
          </Link>
          <Link
            href="/a-propos"
            className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            À propos
          </Link>
          <Button variant="ghost" className="px-8 py-3 rounded-none h-12">
            Se connecter
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 px-10 py-3 rounded-none h-12">
            Commencer
          </Button>
        </motion.nav>
      </div>
    </header>
  );
}
