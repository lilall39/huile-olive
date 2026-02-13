"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/constants";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.logo} href="/" aria-label="Huile Olives - Accueil">
          <img
            src="/logo-huile-olive.png"
            alt="Huile Olives"
            className={styles.logoImg}
          />
        </a>
        <nav className={styles.nav} aria-label="Navigation principale">
          <ul className={styles.list}>
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={pathname === href ? styles.linkActive : styles.link}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
