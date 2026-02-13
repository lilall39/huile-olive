import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import styles from "./page.module.css";

export default function B2BPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>B2B & Cadeaux d’entreprise</h1>
          <p className={styles.heroSubtitle}>
            Coffrets sur mesure, volumes adaptés, personnalisation possible.
            Pour vos événements, partenaires et collaborateurs.
          </p>
        </div>
      </section>

      <section className="section section--narrow">
        <SectionTitle
          title="Une offre dédiée aux professionnels"
          subtitle="Nous proposons des solutions sur mesure pour les entreprises qui souhaitent offrir un cadeau premium, authentique et porteur de sens."
        />
        <ul className={styles.list}>
          <li>
            <strong>Coffrets en volume</strong> — Commandes groupées pour
            séminaires, salons, remises de prix.
          </li>
          <li>
            <strong>Personnalisation</strong> — Coffrets aux couleurs de votre
            marque, messages personnalisés, packaging dédié.
          </li>
          <li>
            <strong>Livraison et délais</strong> — Devis sur demande, planning
            adapté à vos contraintes.
          </li>
        </ul>
        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Pour un devis ou une demande spécifique, contactez-nous.
          </p>
          <Button href="/contact" variant="primary" size="large">
            Nous contacter
          </Button>
        </div>
      </section>
    </>
  );
}
