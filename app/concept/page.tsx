import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import { SITE } from "@/lib/constants";
import styles from "./page.module.css";

export default function ConceptPage() {
  return (
    <>
      <section className={styles.hero}>
        <video autoPlay muted loop playsInline className={styles.heroVideo}>
          <source src="/ooo.mp4" type="video/mp4" />
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
              <Button href="/producteurs" variant="outline" size="large">
                Voir les producteurs
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

      <section className={`section ${styles.cta}`}>
        <p className={styles.ctaText}>
          Découvrez les trois producteurs de notre coffret et leur terroir.
        </p>
        <Button href="/producteurs" variant="primary" size="large">
          Voir les producteurs
        </Button>
      </section>
    </>
  );
}
