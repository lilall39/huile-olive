import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import { COFFRET, PRODUCTEURS } from "@/lib/constants";
import styles from "./page.module.css";

export default function CoffretPage() {
  const getProducteur = (id: string) => PRODUCTEURS.find((p) => p.id === id);

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
              src="/bouteille-huile-olive.png"
              alt="Bouteille d'huile d'olive et olives"
              className={styles.heroVisualImg}
            />
          </div>
        </div>
      </section>

      <section className={`section ${styles.contenuSection}`}>
        <SectionTitle
          title="Le contenu du coffret"
          subtitle="Trois bouteilles d’huile extra vierge médaillées, trois profils distincts."
        />
        <ul className={styles.contenu}>
          {COFFRET.contenu.map((item) => {
            const p = getProducteur(item.producteurId);
            return (
              <li key={item.producteurId} className={styles.contenuItem}>
                <div className={styles.contenuVolume}>{item.volume}</div>
                <div>
                  <strong className={styles.contenuNom}>{p?.nom ?? "Producteur"}</strong>
                  <p className={styles.contenuTerroir}>{p?.terroir} · {p?.region}</p>
                  {item.variete && (
                    <p className={styles.contenuVariete}>Variété {item.variete}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
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
