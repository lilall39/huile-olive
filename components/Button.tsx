import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "normal" | "large";
  type?: "button" | "submit";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "normal",
  type = "button",
  className = "",
}: ButtonProps) {
  const classNames = [
    styles.btn,
    styles[size],
    styles[variant],
    className,
  ].filter(Boolean).join(" ");

  if (href) {
    return <Link href={href} className={classNames}>{children}</Link>;
  }

  return (
    <button type={type} className={classNames}>
      {children}
    </button>
  );
}
