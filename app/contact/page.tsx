import { SectionTitle } from "@/components/SectionTitle";
import { SITE } from "@/lib/constants";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Contact</h1>
          <p className={styles.heroSubtitle}>
            Une question, une commande ou une demande B2B ? Écrivez-nous.
          </p>
        </div>
      </section>

      <section className="section section--narrow">
        <SectionTitle
          title="Nous répondons à toutes vos demandes"
          subtitle="Précommande du coffret, devis B2B, partenariats — nous traitons chaque message avec soin."
        />
        <div className={styles.contactBlock}>
          <p className={styles.contactItem}>
            <strong>Email</strong>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <p className={styles.contactItem}>
            <strong>Téléphone</strong>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
          </p>
        </div>
        <div className={styles.formNote}>
          <p>
            Pour l’instant, les commandes et demandes se font par email ou
            téléphone. Un tunnel de commande en ligne sera proposé prochainement.
          </p>
        </div>
      </section>
    </>
  );
}
