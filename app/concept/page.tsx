"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import { SITE } from "@/lib/constants";
import styles from "./page.module.css";

export default function ConceptPage() {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const toggleZoom = (index: number) => {
    setZoomedIndex(zoomedIndex === index ? null : index);
  };

  return (
    <>
      <section className={styles.hero}>
        <video autoPlay muted loop playsInline className={styles.heroVideo}>
          <source src="/oliveconcept.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <div className={styles.heroTextBlock}>
            <p className={styles.heroLabel}>
              <span className={styles.animateLine} style={{ animationDelay: '0ms' }}>
                {SITE.tagline}
              </span>
            </p>
            <h1 className={styles.heroTitle}>
              <span className={styles.animateLine} style={{ animationDelay: '150ms' }}>
                Le concept
              </span>
            </h1>
            <p className={styles.heroSubtitle}>
              <span className={styles.animateLine} style={{ animationDelay: '300ms' }}>
                Curateur d'huiles primées. Nous ne produisons pas — nous sélectionnons,
                nous mettons en valeur, nous proposons. Notre rôle est de repérer
                l'excellence déjà reconnue et de la rendre accessible dans un cadre premium.
              </span>
            </p>
          </div>
          <div className={styles.heroCta}>
            <div className={styles.animateLine} style={{ animationDelay: '450ms', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="/coffret" variant="primary" size="large">
                Découvrir le coffret
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={`section section--narrow ${styles.conceptCards}`}>
        <div className={styles.block}>
          <h3>Pourquoi uniquement des huiles médaillées ?</h3>
          <p>
            Les concours internationaux (NYIOOC, BIOL, EVOOLEUM, etc.) offrent
            un filtre objectif. Nous ne faisons pas de promesse marketing :
            nous ne proposons que des huiles déjà récompensées. La qualité
            est attestée par des jurys indépendants.
          </p>
        </div>
        <div className={styles.block}>
          <h3>Les producteurs au premier plan</h3>
          <p>
            Chaque bouteille est liée à un producteur, un terroir, un
            savoir-faire. Nous racontons leur histoire et mettons en avant
            leur travail. Pas de folklore : des faits, des profils, des
            médailles.
          </p>
        </div>
        <div className={styles.block}>
          <h3>Vision à long terme</h3>
          <p>
            Nous démarrons avec un coffret dégustation en série courte pour
            valider le marché. Ensuite, nous envisageons d'élargir la gamme :
            autres huiles, épices, dattes, produits de terroir algériens —
            toujours avec la même exigence de curation et de mise en valeur.
          </p>
        </div>
      </section>

      <section className={styles.carouselContainer}>
        <div className={styles.secondaryCards}>
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={`card-${i}`} className={styles.cardWrapper}>
              <div 
                className={`${styles.block} ${zoomedIndex === i ? styles.zoomed : ""}`}
                onClick={() => toggleZoom(i)}
              >
                <img src="/concept-card-1.png" alt="Domaine des Oliviers de Kabylie" className={styles.cardImg} />
              </div>
              {i < 4 && (
                <div className={styles.arrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#f2c94c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
          {/* Duplication pour la boucle infinie */}
          <div className={styles.arrow}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#f2c94c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={`card-clone-${i}`} className={styles.cardWrapper}>
              <div 
                className={`${styles.block} ${zoomedIndex === i + 5 ? styles.zoomed : ""}`}
                onClick={() => toggleZoom(i + 5)}
              >
                <img src="/concept-card-1.png" alt="Domaine des Oliviers de Kabylie" className={styles.cardImg} />
              </div>
              {i < 4 && (
                <div className={styles.arrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#f2c94c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
