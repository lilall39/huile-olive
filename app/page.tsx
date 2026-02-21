import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/SectionTitle";
import { COFFRET, SITE } from "@/lib/constants";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <video autoPlay muted loop playsInline className={styles.heroVideo}>
          <source src="/videoolive.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <div className={styles.heroTextBlock}>
            <p className={styles.heroLabel}>{SITE.tagline}</p>
          <h1 className={styles.heroTitle}>
            Une sélection d’huiles primées.
            <br />
            Trois terroirs. Un coffret.
          </h1>
          <p className={styles.heroSubtitle}>
            Nous ne produisons pas. Nous sélectionnons pour vous les huiles
            extra vierge déjà médaillées, et mettons en valeur ceux qui les
            font.
          </p>
          </div>
          <div className={styles.heroCta}>
            <Button href="/coffret" variant="primary" size="large">
              Découvrir le coffret
            </Button>
            <Button href="/concept" variant="outline" size="large">
              Notre démarche
            </Button>
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
        />
        <div className={styles.valueList}>
          <div className={styles.valueRowHead}>
            <div className={styles.valueItemHead}>
              <span className={styles.valueIcon}>◇</span>
              <strong>Uniquement des huiles médaillées</strong>
              <span className={styles.valueArrow} aria-hidden>→</span>
            </div>
            <div className={styles.valueItemHead}>
              <span className={styles.valueIcon}>◇</span>
              <strong>Les producteurs au centre</strong>
              <span className={styles.valueArrow} aria-hidden>→</span>
            </div>
            <div className={styles.valueItemHead}>
              <span className={styles.valueIcon}>◇</span>
              <strong>Un coffret dégustation pensé</strong>
              <span className={styles.valueArrow} aria-hidden>→</span>
            </div>
          </div>
          <div className={styles.valueRowDesc}>
            <span className={styles.valueDesc}>NYIOOC, BIOL, EVOOLEUM… Nous ne sélectionnons que des bouteilles déjà récompensées.</span>
            <span className={styles.valueDesc}>Chaque huile raconte un terroir et un savoir-faire. Nous les mettons en lumière.</span>
            <span className={styles.valueDesc}>Trois huiles, trois profils. Pour découvrir la diversité de l'huile algérienne.</span>
          </div>
        </div>
        </section>

      <section className={`section ${styles.spotlight}`}>
        <div className={styles.spotlightCard}>
          <div className={styles.spotlightContent}>
            <h2 className={styles.spotlightTitle}>{COFFRET.nom}</h2>
            <p className={styles.spotlightSubtitle}>{COFFRET.sousTitre}</p>
            <p className={styles.spotlightDesc}>{COFFRET.description}</p>
            <p className={styles.spotlightPrice}>
              {COFFRET.prix} {COFFRET.devise}
              {COFFRET.precommande && (
                <span className={styles.preco}> — Précommande</span>
              )}
            </p>
            <Button href="/coffret" variant="primary" size="large">
              Voir le coffret
            </Button>
          </div>
          <div className={styles.spotlightVisual}>
            <div className={styles.spotlightPlaceholder} aria-hidden>
              Coffret
            </div>
          </div>
        </div>
      </section>
      </div>

      <section className={`section ${styles.ctaSection}`}>
        <div className={styles.ctaBottle}>
          <div className={styles.ctaBottleBg}>
            <SectionTitle
              title="Prêt à découvrir ?"
              subtitle="Passez commande du coffret dégustation ou contactez-nous pour les offres B2B et cadeaux d’entreprise."
              align="center"
            />
            <div className={styles.ctaButtons}>
              <Button href="/coffret" variant="primary" size="large">
                Commander le coffret
              </Button>
              <Button href="/b2b" variant="outline" size="large">
                Offres B2B
              </Button>
              <Button href="/contact" variant="outline" size="large">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
