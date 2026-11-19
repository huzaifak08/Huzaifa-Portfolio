import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={styles.wrap}>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${
          menuOpen ? styles.open : ""
        }`}
        aria-label="Main"
      >
        <div className={styles.bar}>
          <a className={styles.title} href="#top">
            <span className={styles.logoDot} aria-hidden="true" />
            Huzaifa
          </a>

          <ul className={styles.desktopItems}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          <a
            className={`btn btn-primary ${styles.cta}`}
            href="mailto:contact@huzaifakhan.com"
          >
            Hire me
          </a>

          <button
            type="button"
            className={styles.menuBtn}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </div>

        <ul
          id="mobile-menu"
          className={styles.mobileItems}
          onClick={() => setMenuOpen(false)}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} tabIndex={menuOpen ? 0 : -1}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
