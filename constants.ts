
import { Experience, Education, SkillGroup, Training, Project } from './types';

export const PERSONAL_INFO = {
  name: "Elmostafa JILIT",
  titles: ["Cartographe", "Géomaticien", "Enquêteur", "Aménagement Territoire"],
  age: 33,
  license: "Permis B",
  phone: "+212 668 09 02 85",
  email: "jilitsig@gmail.com",
  location: "Agadir, Maroc",
  linkedin: "https://www.linkedin.com/in/Jilitelmostafa",
  cvLink: "https://drive.google.com/file/d/1PBuR0Xj-wsCRGX_LQacS-sPULB3F6uGj/view?usp=drive_open",
  socials: {
    facebook: "https://facebook.com/Jilitelmostafa",
    instagram: "https://instagram.com/jilitsig",
    tiktok: "https://tiktok.com/@jilitelmostafa",
    twitter: "https://x.com/jilitmostafa",
    whatsapp: "https://wa.me/212668090285",
    linkedin: "https://www.linkedin.com/in/Jilitelmostafa"
  },
  objective: "Géomaticien spécialisé en SIG et télédétection avec plus de 5 ans d’expérience. Expert en modélisation, cartographie, analyse des risques et études de terrain. Mon objectif est d'intégrer un poste stratégique en SIG offrant des opportunités d'innovation et d'évolution."
};

export const PROJECTS: Project[] = [
  {
    title: "Topoma",
    description: "Plateforme interactive de cartographie topographique et thématique pour l'aménagement du territoire.",
    tech: ["QGIS", "Leaflet", "Web GIS"],
    link: "https://jilitelmostafa.github.io/topoma/topoma"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: "Mai 2025 - Juin 2025",
    company: "Global for Survey and Consulting (GSC)",
    role: "Chargé de mission Enquêteur",
    ref: "N°01/ECP/2025",
    description: ["Collecte de données pour la conformité des établissements pionniers (ONDH).", "Responsable : Prof. Mhammed Abderebbi."]
  },
  {
    period: "Juillet 2024 - Août 2024",
    company: "Global for Survey and Consulting (GSC)",
    role: "Chargé de mission Enquêteur Contrôleur",
    ref: "N°01/CIO/2024",
    description: ["Enquête panel de ménages pour l'Observatoire National de Développement Humain.", "Rôle de chauffeur et contrôleur."]
  },
  {
    period: "Déc. 2023 - Mai 2024",
    company: "Haut-Commissariat au Plan du Maroc (HCP)",
    role: "Chargé de mission Opérateur Cellule SIG",
    ref: "N°01/2023/DRRSK/RGPH",
    description: [
      "Mise à jour des repères géographiques sur QGIS.",
      "Découpage des districts pour le recensement 2024 (RGPH) en milieux urbain et rural."
    ]
  },
  {
    period: "Mars 2023 - Déc. 2023",
    company: "Haut-Commissariat au Plan",
    role: "Chargé de mission Contrôleur Cartographe",
    ref: "N°01/2023/DRRSK/RGPH",
    description: ["Coordination avec les agents d'autorité et équipes terrain pour la précision des données."]
  },
  {
    period: "Août 2022 - Mars 2023",
    company: "PCM Consulting",
    role: "Enquêteur de terrain et chauffeur",
    description: ["Enquête nationale sur l'inclusion sociale et économique de la petite agriculture (PAF2022)."]
  },
  {
    period: "Juin 2022 - Août 2022",
    company: "Bureau d’étude SIS Consultants",
    role: "Chargé de Projet",
    description: ["Responsable d'équipes (20 personnes) pour l'étude sur l'investissement touristique au Maroc."]
  },
  {
    period: "Juin 2021 - Août 2022",
    company: "MAROC INGENOV",
    role: "Enquêteur de terrain et chauffeur",
    description: ["Inventaire des points d'eau et usages urbains (ABHBC)."]
  }
];

export const EDUCATIONS: Education[] = [
  {
    period: "2020 - 2021",
    title: "Doctorant chercheur En géographie Urbaine",
    institution: "Université Hassan II Casablanca",
    details: "Laboratoire : Dynamiques Des Espaces et des Sociétés (LADES) Mohammedia"
  },
  {
    period: "2017 - 2019",
    title: "Master spécialisé En SIG & Télédétection",
    institution: "Université Hassan II Casablanca, Maroc",
    details: "Cartographie appliquée à l’aménagement du Territoire, Base de données, GPS."
  },
  {
    period: "2014 - 2017",
    title: "Licence Fondamentale En géographie",
    institution: "Université Ibn Zohr d'Agadir, Maroc",
    details: "Urbanisme, Cartographie, Statistiques, Aménagement territoriale."
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Géomatique & SIG",
    icon: "Map",
    skills: ["ArcGIS", "Q-Gis", "Grass Gis", "Global Mapper", "MapInfo", "ArcView", "Cartographie thématique", "Sémiologie graphique"]
  },
  {
    category: "Télédétection",
    icon: "Zap",
    skills: ["Imagerie optique/radar", "Classification d'image", "Segmentation", "PCI Geomatica", "ERDAS", "ENVI", "SNAP (Sentinel Toolbox)"]
  },
  {
    category: "Urbanisme & Webmapping",
    icon: "Globe",
    skills: ["Webmapping", "Gestion urbaine", "Modélisation 3D", "SDAU, PA, PDAR, SRAT", "Systèmes d'information géographique"]
  },
  {
    category: "Analyse de Données",
    icon: "BarChart",
    skills: ["SPSS", "STATA", "Sphinx", "Traitement d'enquêtes", "Bureautique avancée (Excel, Access)"]
  },
  {
    category: "Infographie & Design",
    icon: "Palette",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "After Effects", "Google SketchUp", "Camtasia Studio"]
  }
];

export const TRAININGS: Training[] = [
  {
    period: "12/2024 - 02/2025",
    title: "Professeur vacataire",
    institution: "Faculté des Sciences Humaines et Sociales Kénitra",
    description: "Master « Géo IA et Gestion des Risques Naturels ». Animation de séances SIG."
  },
  {
    period: "10/2024",
    title: "Formateur SIG QGIS",
    institution: "Centre des Études Géostratégiques",
    description: "Théorie et applications pratiques sur QGIS 3.34.0."
  }
];
