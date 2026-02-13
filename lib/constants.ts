/**
 * Données et constantes partagées.
 * Architecture extensible : ajouter catégories (épices, dattes) plus tard
 * sans toucher à la structure des pages.
 */

export const SITE = {
  name: "Huile Olive",
  tagline: "Huiles d'olives primées d'Algérie",
  email: "contact@huile-olive.com",
  phone: "+33 0 00 00 00 00",
} as const;

export const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/concept", label: "Le concept" },
  { href: "/producteurs", label: "Les producteurs" },
  { href: "/coffret", label: "Le coffret" },
  { href: "/b2b", label: "B2B & Cadeaux" },
  { href: "/contact", label: "Contact" },
] as const;

export type Producteur = {
  id: string;
  nom: string;
  terroir: string;
  region: string;
  medailles: string[];
  description: string;
  image?: string;
};

export const PRODUCTEURS: Producteur[] = [
  {
    id: "p1",
    nom: "Domaine des Oliviers de Kabylie",
    terroir: "Kabylie",
    region: "Tizi Ouzou",
    medailles: ["Médaille d'or NYIOOC", "Médaille d'argent BIOL"],
    description:
      "Une huile fruitée verte, aux notes d'amande et d'artichaut. Récolte à la main, extraction à froid dans les 24 heures.",
    image: "/img/producteur-1.jpg",
  },
  {
    id: "p2",
    nom: "Huilerie du Tell",
    terroir: "Tell Oranais",
    region: "Oran",
    medailles: ["Médaille d'or EVOOLEUM", "Médaille de bronze NYIOOC"],
    description:
      "Profil équilibré, notes de tomate mûre et d'herbes fraîches. Parcelle en agriculture raisonnée, variété Chemlal.",
    image: "/img/producteur-2.jpg",
  },
  {
    id: "p3",
    nom: "Les Moulins de Constantine",
    terroir: "Hauts plateaux constantinois",
    region: "Constantine",
    medailles: ["Médaille d'or BIOL", "Médaille d'argent NYIOOC"],
    description:
      "Huile intense et poivrée, typique du terroir. Petite production familiale, récolte tardive pour un fruité mûr.",
    image: "/img/producteur-3.jpg",
  },
];

export type CoffretItem = {
  producteurId: string;
  volume: string;
  variete?: string;
};

export const COFFRET = {
  id: "coffret-degustation-2025",
  nom: "Coffret Dégustation",
  sousTitre: "3 huiles primées · 3 terroirs d'Algérie",
  description:
    "Une sélection exclusive de trois huiles d'olive extra vierge médaillées, chacune issue d'un producteur et d'un terroir différents. L'occasion de découvrir la diversité et la qualité de l'huile algérienne.",
  contenu: [
    { producteurId: "p1", volume: "250 ml", variete: "Chemlal" },
    { producteurId: "p2", volume: "250 ml", variete: "Chemlal" },
    { producteurId: "p3", volume: "250 ml", variete: "Azeradj" },
  ] as CoffretItem[],
  prix: 49,
  devise: "€",
  precommande: true,
  image: "/img/coffret.jpg",
} as const;
