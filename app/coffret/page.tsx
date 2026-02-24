"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import { COFFRET, PRODUCTEURS } from "@/lib/constants";
import styles from "./page.module.css";

export default function CoffretPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const getProducteur = (id: string) => PRODUCTEURS.find((p) => p.id === id);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Données étendues pour les notes de dégustation (statiques pour l'exercice)
  const getExtendedData = (id: string) => {
    const data: Record<string, { profil: string; notes: string }> = {
      p1: {
        profil: "Fruité vert intense",
        notes: "Herbe coupée, artichaut cru, amande fraîche."
      },
      p2: {
        profil: "Fruité vert équilibré",
        notes: "Tomate mûre, herbes aromatiques, pomme verte."
      },
      p3: {
        profil: "Fruité mûr intense",
        notes: "Fruits secs, fleurs sauvages, finale poivrée."
      }
    };
    return data[id] || { profil: "Fruité", notes: "Notes équilibrées" };
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{COFFRET.nom}</h1>
            <p className={styles.heroSubtitle}>{COFFRET.sousTitre}</p>
            <p className={styles.heroDesc}>{COFFRET.description}</p>
            <div className={styles.priceBlock}>
              <span className={styles.price}>{COFFRET.prix} {COFFRET.devise}</span>
              {COFFRET.precommande && (
                <span className={styles.preco}>Précommande — Livraison à venir</span>
              )}
            </div>
            <Button href="/contact" variant="primary" size="large">
              {COFFRET.precommande ? "Réserver / Précommander" : "Commander"}
            </Button>
          </div>
          <div className={styles.heroVisual}>
            <img
              src="/coffret-selection.png"
              alt="Sélection de coffrets NAFEES"
              className={styles.heroVisualImg}
            />
          </div>
        </div>
      </section>

      <section className={`section ${styles.contenuSection}`}>
        <SectionTitle
          title="Le contenu du coffret :"
          subtitle="Trois bouteilles d’huile extra vierge médaillées, trois profils distincts."
        />
        
        <div className={styles.contenu}>
          {COFFRET.contenu.map((item, index) => {
            const p = getProducteur(item.producteurId);
            const extended = getExtendedData(item.producteurId);
            const isOpen = openIndex === index;

            return (
              <div key={item.producteurId} className={styles.accordion}>
                <button 
                  className={styles.accordionHeader}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span>{p?.terroir} · {p?.nom} ({item.volume})</span>
                  <svg 
                    className={`${styles.accordionIcon} ${isOpen ? styles.accordionIconActive : ""}`} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                
                <div className={`${styles.accordionContent} ${isOpen ? styles.accordionContentActive : ""}`}>
                  <div className={styles.accordionDetails}>
                    <div className={styles.detailGroup}>
                      <span className={styles.detailLabel}>Région</span>
                      <span className={styles.detailValue}>{p?.region}</span>
                    </div>
                    <div className={styles.detailGroup}>
                      <span className={styles.detailLabel}>Producteur</span>
                      <span className={styles.detailValue}>{p?.nom}</span>
                    </div>
                    <div className={styles.detailGroup}>
                      <span className={styles.detailLabel}>Variété</span>
                      <span className={styles.detailValue}>{item.variete || "Chemlal"}</span>
                    </div>
                    <div className={styles.detailGroup}>
                      <span className={styles.detailLabel}>Profil aromatique</span>
                      <span className={styles.detailValue}>{extended.profil}</span>
                    </div>
                    <div className={`${styles.detailGroup} ${styles.fullWidth}`}>
                      <span className={styles.detailLabel}>Notes de dégustation</span>
                      <span className={styles.detailValue}>{extended.notes}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className={`section ${styles.cta}`}>
        <p className={styles.ctaText}>
          Idéal en cadeau ou pour découvrir la diversité de l’huile algérienne.
        </p>
        <Button href="/contact" variant="primary" size="large">
          Nous contacter pour commander
        </Button>
      </section>
    </>
  );
}
