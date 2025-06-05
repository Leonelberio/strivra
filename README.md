# STRIVRA - Landing Page

Une landing page moderne et élégante pour STRIVRA, entreprise spécialisée dans les solutions informatiques et le développement web/mobile.

## 🚀 Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI modernes
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes élégantes

## 🎨 Design

Landing page inspirée du design d'Ahrefs avec :
- Design moderne et professionnel
- Animations fluides avec Framer Motion
- Interface responsive (mobile-first)
- Palette de couleurs bleue et orange
- Typographie optimisée avec Inter

## 📋 Fonctionnalités

- ✅ Header avec navigation fixe
- ✅ Section hero avec animations
- ✅ Présentation des services
- ✅ Section à propos
- ✅ Formulaire de contact
- ✅ Footer complet
- ✅ Design responsive
- ✅ Animations au scroll
- ✅ SEO optimisé

## 🛠️ Installation

1. **Cloner le projet** (déjà fait)

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📦 Scripts disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run start` - Serveur de production
- `npm run lint` - Linter ESLint

## 🏢 Informations entreprise

**STRIVRA**
- **Type** : SARL U
- **Activité** : Consultation en réseaux et systèmes informatiques, développement web et mobile
- **Contact** : contact@strivra.com
- **Téléphone** : 93 67 09 12
- **Localisation** : Lomé, Togo
- **Début d'activité** : Juin 2025

## 📁 Structure du projet

```
src/
├── app/
│   ├── globals.css      # Styles globaux
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Page d'accueil
├── components/
│   └── ui/              # Composants shadcn/ui
└── lib/
    └── utils.ts         # Utilitaires
```

## 🎯 Sections de la landing page

1. **Header** - Navigation fixe avec menu responsive
2. **Hero** - Titre principal avec call-to-action
3. **Services** - Grille des 6 services principaux
4. **À propos** - Présentation de l'entreprise
5. **Contact** - Informations et formulaire
6. **Footer** - Liens et informations légales

## 🚀 Déploiement

Le site peut être déployé sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **Tout hébergeur supportant Node.js**

### Déploiement Vercel

```bash
npm run build
```

Puis connecter le repo GitHub à Vercel pour un déploiement automatique.

## 📝 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.js` :
- Bleu principal : `#3b82f6`
- Orange accent : `#f97316`

### Contenu
Modifier le contenu dans `src/app/page.tsx` :
- Textes des sections
- Services proposés
- Informations de contact

### Animations
Les animations Framer Motion peuvent être ajustées dans les objets `fadeInUp` et `staggerContainer`.

## 📞 Support

Pour toute question ou support technique :
- Email : contact@strivra.com
- Téléphone : 93 67 09 12

---

**STRIVRA** - Votre partenaire technologique de confiance 🚀
