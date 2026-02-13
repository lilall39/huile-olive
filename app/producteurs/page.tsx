import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import { PRODUCTEURS } from "@/lib/constants";
import styles from "./page.module.css";

export default function ProducteursPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Les producteurs</h1>
          <p className={styles.heroSubtitle}>
            Trois terroirs, trois huiles médaillées. Découvrez les producteurs
            que nous avons sélectionnés pour le coffret dégustation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={styles.grid}>
          {PRODUCTEURS.map((p) => (
            <article key={p.id} className={styles.card}>
              <div className={styles.cardImage}>
                <div className={styles.placeholder}>Huilerie</div>
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{p.nom}</h2>
                <p className={styles.terroir}>
                  <span className={styles.terroirLabel}>Terroir</span> {p.terroir}
                  {" · "}
                  {p.region}
                </p>
                <ul className={styles.medailles} aria-label="Médailles">
                  {p.medailles.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                <p className={styles.description}>{p.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.cta}>
          <Button href="/coffret" variant="primary" size="large">
            Découvrir le coffret
          </Button>
        </div>
      </section>
    </>
  );
}
