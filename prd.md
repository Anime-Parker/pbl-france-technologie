# Document de Spécifications du Produit (PRD) - Édition "Visual Storytelling"
**Nom du Projet :** L'Ingénierie de Demain : Les Triomphes Technologiques Français
**Type de Projet :** Site Web Interactif (PBL Français présenté en Anglais)
**Équipe :** 3 Développeurs/Auteurs
**Date :** 16 Avril 2026

---

## 1. Vue d'Ensemble & Stratégie de Présentation (Le Défi)
Ce projet possède une contrainte unique : **Le texte est en français, mais l'audience et les présentateurs parlent anglais.** Pour réussir la présentation, le site web ne doit pas être un mur de texte. Il doit agir comme un support visuel universel. L'interface doit permettre à l'audience de comprendre immédiatement le contexte grâce à une iconographie forte, des visualisations de données (chiffres universels), des schémas explicites et des modèles 3D interactifs.

---

## 2. Pile Technologique (Tech Stack)
* **Framework Core :** Next.js (App Router) avec TypeScript.
* **Stylisation :** Tailwind CSS.
* **Animations & Transitions :** Framer Motion.
* **Défilement & Récit Visuel :** GSAP (ScrollTrigger) pour lier le texte aux changements d'images.
* **Rendu 3D :** React Three Fiber / Three.js.
* **Iconographie (Crucial) :** Lucide Icons ou Phosphor Icons (pour des symboles universels clairs).
* **Graphiques/Data Viz :** Recharts ou D3.js (pour des statistiques visuelles).
* **Hébergement :** Vercel.

---

## 3. L'Esthétique "Visual-First" (Comprendre sans lire)
Le design doit être "scannable". Si quelqu'un ne comprend pas un mot de français, l'image à côté doit faire passer le message.

* **Thème Principal :** "Midnight Glass" (Dark mode pour faire ressortir les images et les couleurs).
* **La Règle du 50/50 :** Chaque écran d'ordinateur doit comporter au maximum 50% de texte (en français) et au moins 50% d'éléments visuels (images, 3D, chiffres).
* **Typographie des Chiffres :** Les nombres (dates, vitesses, températures) sont les mêmes en français et en anglais. Ils doivent être affichés en très grand format (ex: police `Space Grotesk` taille `6xl`) avec des compteurs animés.

---

## 4. Architecture et Contenu (Optimisé pour la présentation)

### 4.1. Page d'Accueil (Le Hub Visuel)
* **Design "Bento Grid" :** Une grille très visuelle où chaque carte est dominée par une image ou une vidéo en boucle, et non par du texte.
* **Iconographie Évidente :** * Rafale = Icône d'avion de chasse + Drapeau français.
    * Carte à Puce = Icône de puce électronique / cadenas de sécurité.
    * ITER = Icône d'atome / soleil.

### 4.2. Les Pages de Contenu (Conçues pour le "Live Pitch")
Chaque page suit une structure de "Défilement Narratif" (Scrollytelling). Le présentateur parle en anglais pendant qu'il fait défiler la page.

1. **L'Amorce (Le grand chiffre) :** * *Rafale:* Un compteur qui monte à "Mach 1.8" (vitesse).
   * *Carte à Puce:* "1974" (année d'invention) en énorme.
   * *ITER:* "150 000 000 °C" (température du plasma).
2. **Le Récit (Timeline Visuelle) :** Au lieu de gros paragraphes d'histoire en français, utilisez une ligne de temps (timeline) avec des photos historiques courtes. Le texte français est bref, l'image est grande.
3. **Le Moteur (Schémas & 3D) :** * C'est ici que le groupe explique techniquement en anglais. 
   * Le site montre un modèle 3D ou un schéma légendé avec de très courts mots français (ex: *Le Radar*, *La Puce*, *Le Plasma*). Les flèches et les couleurs guident l'œil de l'audience.
4. **Les Points Clés (Bullet Points Visuels) :** Pour atteindre le quota de mots requis par le professeur de français, le texte détaillé est placé dans de belles cartes à puces (bullet points) avec des icônes explicites à côté de chaque point. 

### 4.3. Le "Mode Présentation" (Secret Feature)
* **Touche Raccourci (ex: Appuyer sur 'P') :** Une fonctionnalité cachée codée avec Framer Motion. Lorsqu'elle est activée pendant votre présentation orale, les blocs de texte français volumineux (qui ennuieraient le public non francophone) deviennent légèrement transparents, et les éléments visuels, images et chiffres clés sont mis en surbrillance (glow effect) pour concentrer l'attention de la classe.

---

## 5. Répartition des Tâches (Groupe de 3)
* **Membre 1 : Architecte de l'Expérience (Lead Frontend & UX)**
    * Mise en place du layout "Scrollytelling". Développement de la grille visuelle de l'accueil et du "Mode Présentation" secret.
* **Membre 2 : Spécialiste 3D & Data Viz (Le visuel)**
    * Création des compteurs animés géants (nombres universels). Intégration des modèles 3D pour donner un support visuel lourd pendant les explications orales.
* **Membre 3 : Ingénieur Contenu & Iconographie (L'interface)**
    * Rédaction du contenu en français (pour satisfaire le professeur) structuré en blocs courts. Sélection stricte des icônes universelles pour traduire visuellement chaque paragraphe.