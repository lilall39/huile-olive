import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "default" | "goutte";
  className?: string;
};

export function SectionTitle({
  title,
  subtitle,
  align = "left",
  variant = "default",
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`${styles.sectionTitle} ${align === "center" ? styles.center : ""} ${variant === "goutte" ? styles.goutte : ""} ${className}`.trim()}>
      <h2 className={styles.heading}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
