import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/SectionTitle";
import { COFFRET, SITE } from "@/lib/constants";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <video autoPlay muted loop playsInline className={styles.heroVideo}>
          <source src="/videoolive_deux.mp4" type="video/mp4" />
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
                Une sélection d’huiles primées.
              </span>
              <br />
              <span className={styles.animateLine} style={{ animationDelay: '300ms' }}>
                Trois terroirs. Un coffret.
              </span>
            </h1>
            <p className={styles.heroSubtitle}>
              <span className={styles.animateLine} style={{ animationDelay: '450ms' }}>
                Nous ne produisons pas. Nous sélectionnons pour vous les huiles
                extra vierge déjà médaillées, et mettons en valeur ceux qui les
                font.
              </span>
            </p>
          </div>
          <div className={styles.heroCta}>
            <div className={styles.animateLine} style={{ animationDelay: '600ms', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="/coffret" variant="primary" size="large">
                Découvrir le coffret
              </Button>
              <Button href="/concept" variant="outline" size="large">
                Notre démarche
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.valueSpotlightWrap}>
        <section className={`section ${styles.value}`}>
        <SectionTitle
          title="Curation, pas production"
          subtitle="Notre rôle : repérer l'excellence, la mettre en avant, vous la proposer dans un écrin digne d'elle."
          align="center"
          variant="goutte"
          className={styles.animateSlide}
        />
        <div className={styles.valueList}>
          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueCardHead}>
                <strong>Uniquement des huiles médaillées</strong>
              </div>
              <p className={styles.valueCardDesc}>
                NYIOOC, BIOL, EVOOLEUM… Nous ne sélectionnons que des bouteilles déjà récompensées.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueCardHead}>
                <strong>Les producteurs au centre</strong>
              </div>
              <p className={styles.valueCardDesc}>
                Chaque huile raconte un terroir et un savoir-faire. Nous les mettons en lumière.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueCardHead}>
                <strong>Un coffret dégustation pensé</strong>
              </div>
              <p className={styles.valueCardDesc}>
                Trois huiles, trois profils. Pour découvrir la diversité de l'huile algérienne.
              </p>
            </div>
          </div>
        </div>
        </section>

      <section className={`section ${styles.spotlight}`}>
        <div className={styles.spotlightCard}>
          <div className={styles.spotlightContent}>
            <h2 className={`${styles.spotlightTitle} ${styles.animateSlide}`} style={{ animationDelay: '0ms' }}>{COFFRET.nom}</h2>
            <p className={`${styles.spotlightSubtitle} ${styles.animateSlide}`} style={{ animationDelay: '150ms' }}>{COFFRET.sousTitre}</p>
            <p className={`${styles.spotlightDesc} ${styles.animateSlide}`} style={{ animationDelay: '300ms' }}>{COFFRET.description}</p>
            <p className={`${styles.spotlightPrice} ${styles.animateSlide}`} style={{ animationDelay: '450ms' }}>
              {COFFRET.prix} {COFFRET.devise}
              {COFFRET.precommande && (
                <span className={styles.preco}> — Précommande</span>
              )}
            </p>
            <div className={styles.animateSlide} style={{ animationDelay: '600ms' }}>
              <Button href="/coffret" variant="primary" size="large">
                Voir le coffret
              </Button>
            </div>
          </div>
          <div className={styles.spotlightVisual}>
            <img 
              src="/coffret-nafees.png" 
              alt="Coffret NAFEES - Collection Grands Crus d'Olive" 
              className={styles.spotlightImg}
            />
          </div>
        </div>
      </section>
      </div>

      <section className={`section ${styles.ctaSection}`}>
        <div className={styles.ctaBottle}>
          <div className={`${styles.ctaContainer} ${styles.animateSlide}`}>
            <img src="/cta-final.png" alt="" className={styles.ctaImg} />
            <div className={styles.ctaButtons}>
              <div className={styles.ctaMainButtonWrap}>
                <Button href="/coffret" variant="primary" size="large">
                  Commander le coffret
                </Button>
              </div>
              <div className={styles.ctaB2BButtonWrap}>
                <Button href="/b2b" variant="primary" size="large">
                  Offres B2B
                </Button>
              </div>
              <div className={styles.ctaContactButtonWrap}>
                <Button href="/contact" variant="primary" size="large">
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
