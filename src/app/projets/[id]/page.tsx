import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/project-detail-page";

// Mock project data - in a real app, this would come from a database
const projects = {
  "1": {
    id: 1,
    title: "Plateforme E-Banking Moderne",
    client: "ECOBANK Togo",
    category: "Fintech",
    description:
      "Solution bancaire digitale complète avec authentification biométrique et transactions en temps réel.",
    fullDescription:
      "Ce projet révolutionnaire a transformé l'expérience bancaire digitale en Afrique de l'Ouest. Nous avons développé une plateforme complète intégrant l'authentification biométrique, les transactions en temps réel, et une interface utilisateur intuitive. La solution inclut également un système de gestion des risques avancé et une architecture cloud scalable.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Blockchain",
      "AWS",
      "TypeScript",
    ],
    features: [
      "Authentification biométrique",
      "Transactions en temps réel",
      "Interface mobile responsive",
      "Système de gestion des risques",
      "Architecture cloud scalable",
      "APIs RESTful sécurisées",
    ],
    results: [
      {
        metric: "Transactions",
        value: "+250%",
        description: "Augmentation du volume de transactions",
      },
      {
        metric: "Utilisateurs",
        value: "50K+",
        description: "Utilisateurs actifs mensuels",
      },
      {
        metric: "Satisfaction",
        value: "98%",
        description: "Taux de satisfaction client",
      },
      {
        metric: "Temps de traitement",
        value: "-80%",
        description: "Réduction du temps de traitement",
      },
    ],
    duration: "8 mois",
    status: "Livré",
    year: "2024",
    teamSize: "6 développeurs",
    budget: "15M FCFA",
    challenges: [
      "Intégration avec les systèmes bancaires existants",
      "Conformité aux réglementations financières",
      "Optimisation des performances pour les connexions mobiles",
      "Sécurisation des données sensibles",
    ],
    testimonial: {
      content:
        "STRIVRA a dépassé nos attentes. Leur expertise technique et leur compréhension du secteur bancaire africain ont été déterminantes pour le succès de ce projet.",
      author: "Jean-Baptiste KOFFI",
      role: "Directeur IT, ECOBANK Togo",
    },
  },
  "2": {
    id: 2,
    title: "Plateforme d'Apprentissage en Ligne",
    client: "Université de Lomé",
    category: "EdTech",
    description:
      "Système de gestion d'apprentissage avec cours interactifs, évaluations en ligne et suivi des progrès.",
    fullDescription:
      "Une plateforme d'apprentissage moderne qui a révolutionné l'éducation supérieure au Togo. Le système inclut des cours interactifs multimédia, des évaluations automatisées, un système de visioconférence intégré, et des outils d'analyse des performances étudiantes.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    technologies: ["Next.js", "PostgreSQL", "WebRTC", "AI", "Python", "Docker"],
    features: [
      "Cours interactifs multimédia",
      "Système d'évaluation automatisé",
      "Visioconférence intégrée",
      "Suivi des performances",
      "Mobile learning",
      "Intelligence artificielle pour recommandations",
    ],
    results: [
      {
        metric: "Étudiants",
        value: "25K+",
        description: "Étudiants inscrits sur la plateforme",
      },
      { metric: "Cours", value: "500+", description: "Cours disponibles" },
      {
        metric: "Engagement",
        value: "+180%",
        description: "Augmentation de l'engagement étudiant",
      },
      {
        metric: "Taux de réussite",
        value: "+45%",
        description: "Amélioration du taux de réussite",
      },
    ],
    duration: "6 mois",
    status: "Livré",
    year: "2024",
    teamSize: "5 développeurs",
    budget: "12M FCFA",
    challenges: [
      "Adaptation aux connexions internet limitées",
      "Interface multilingue (français/anglais/ewe)",
      "Intégration avec le système académique existant",
      "Optimisation pour différents appareils",
    ],
    testimonial: {
      content:
        "Cette plateforme a transformé notre approche pédagogique. Les étudiants sont plus engagés et les résultats sont remarquables.",
      author: "Prof. Ama SANTOS",
      role: "Vice-Rectrice, Université de Lomé",
    },
  },
  "3": {
    id: 3,
    title: "Système de Traçabilité Blockchain",
    client: "CAFE-CACAO",
    category: "AgriTech",
    description:
      "Solution de traçabilité complète de la chaîne d'approvisionnement avec blockchain et IoT.",
    fullDescription:
      "Un système innovant qui révolutionne la traçabilité dans la filière cacao. Utilisant la blockchain et l'IoT, cette solution permet de suivre chaque étape de la production, de la plantation à l'exportation, garantissant ainsi la qualité et l'origine du cacao togolais.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    technologies: [
      "Blockchain",
      "IoT",
      "React",
      "Python",
      "Ethereum",
      "React Native",
    ],
    features: [
      "Traçabilité blockchain",
      "Capteurs IoT pour la qualité",
      "Application mobile pour producteurs",
      "Dashboard analytique",
      "Certification automatisée",
      "Marketplace intégrée",
    ],
    results: [
      {
        metric: "Traçabilité",
        value: "+200%",
        description: "Amélioration de la traçabilité",
      },
      {
        metric: "Producteurs",
        value: "1000+",
        description: "Producteurs connectés",
      },
      {
        metric: "Transparence",
        value: "100%",
        description: "Transparence de la chaîne",
      },
      {
        metric: "Prix producteurs",
        value: "+30%",
        description: "Augmentation des revenus producteurs",
      },
    ],
    duration: "10 mois",
    status: "En cours",
    year: "2024",
    teamSize: "8 développeurs",
    budget: "20M FCFA",
    challenges: [
      "Adoption par les producteurs ruraux",
      "Connectivité réseau en zones reculées",
      "Formation des utilisateurs",
      "Intégration avec les systèmes existants",
    ],
    testimonial: {
      content:
        "Ce système va révolutionner notre filière. La transparence et la traçabilité qu'il apporte sont exceptionnelles.",
      author: "Komi AGBEKO",
      role: "Directeur Général, CAFE-CACAO",
    },
  },
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects[id as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}

export async function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id: id,
  }));
}
