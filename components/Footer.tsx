import Link from "next/link";
import { NAV, SITE } from "@/lib/constants";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <span className={styles.name}>{SITE.name}</span>
          <p className={styles.tagline}>{SITE.tagline}</p>
        </div>
        <nav className={styles.nav} aria-label="Navigation pied de page">
          <ul className={styles.list}>
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={styles.link}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.legal}>
          <p className={styles.contact}>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
