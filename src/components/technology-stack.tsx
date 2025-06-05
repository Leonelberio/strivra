"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const technologies = [
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    width: 60,
    height: 60,
    description: "Bibliothèque UI moderne",
  },
  {
    name: "Next.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    width: 80,
    height: 50,
    description: "Framework React full-stack",
  },
  {
    name: "TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    width: 60,
    height: 60,
    description: "JavaScript avec typage statique",
  },
  {
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    width: 80,
    height: 50,
    description: "Runtime JavaScript serveur",
  },
  {
    name: "MongoDB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    width: 100,
    height: 30,
    description: "Base de données NoSQL",
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    width: 80,
    height: 50,
    description: "Cloud computing Amazon",
  },
  {
    name: "Flutter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
    width: 60,
    height: 60,
    description: "Framework mobile multiplateforme",
  },
  {
    name: "Docker",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
    width: 80,
    height: 60,
    description: "Conteneurisation d'applications",
  },
  {
    name: "Kubernetes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
    width: 60,
    height: 60,
    description: "Orchestration de conteneurs",
  },
  {
    name: "Python",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    width: 60,
    height: 60,
    description: "Langage polyvalent et puissant",
  },
  {
    name: "PostgreSQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    width: 60,
    height: 60,
    description: "Base de données relationnelle",
  },
  {
    name: "GraphQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
    width: 60,
    height: 60,
    description: "API query language moderne",
  },
];

// Duplicate technologies array for seamless loop
const duplicatedTechnologies = [...technologies, ...technologies];

export default function TechnologyStack() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technologies de Pointe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous maîtrisons les technologies les plus avancées pour créer des
            solutions robustes, scalables et performantes qui répondent aux
            exigences du marché moderne
          </p>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <div className="bg-white rounded-none p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 text-center h-full flex flex-col justify-between">
                <div className="flex-1 flex items-center justify-center mb-4">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    width={tech.width}
                    height={tech.height}
                    className="object-contain transition-all duration-300 group-hover:scale-110"
                    priority={index < 6}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sliding Animation Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative overflow-hidden bg-blue-600 rounded-none p-6 mb-12"
        >
          <div className="relative z-10">
            <h3 className="text-white text-center text-lg font-semibold mb-4">
              Technologies que nous maîtrisons parfaitement
            </h3>
          </div>

          {/* Sliding logos container */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex items-center gap-8"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{
                width: "3840px",
              }}
            >
              {duplicatedTechnologies.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-none border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    width={tech.width * 0.7}
                    height={tech.height * 0.7}
                    className="object-contain filter brightness-0 invert opacity-90"
                    priority={index < technologies.length}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-blue-600 to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-blue-600 to-transparent pointer-events-none z-10"></div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Curieux de voir ces technologies en action ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#projects">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-none font-medium transition-all duration-300 hover:shadow-lg">
                Voir nos projets
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-none font-medium transition-all duration-300">
                Discuter de votre projet
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
