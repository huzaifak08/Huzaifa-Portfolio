import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const links = [
  {
    icon: "contact/emailIcon.png",
    label: "Email",
    value: "contact@huzaifakhan.com",
    href: "mailto:contact@huzaifakhan.com",
  },
  {
    icon: "contact/linkedinIcon.png",
    label: "LinkedIn",
    value: "huzaifak08",
    href: "https://www.linkedin.com/in/huzaifak08/",
  },
  {
    icon: "contact/githubIcon.png",
    label: "GitHub",
    value: "huzaifak08",
    href: "https://github.com/huzaifak08",
  },
  {
    icon: "contact/whatsapp.png",
    label: "WhatsApp",
    value: "+92 371 5330671",
  },
  {
    icon: "contact/loc.png",
    label: "Location",
    value: "Islamabad, Pakistan",
  },
];

function Contact() {
  return (
    <footer id="contact" className={`page-section ${styles.footer}`}>
      <div className={`glass reveal ${styles.panel}`}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.intro}>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let&apos;s build something great.</h2>
          <p className="section-sub">
            Have a project or role in mind? Feel free to reach out.
          </p>
          <a
            href="mailto:contact@huzaifakhan.com"
            className={`btn btn-primary ${styles.cta}`}
          >
            Say hello
          </a>
        </div>

        <ul className={styles.links}>
          {links.map((l) => {
            const inner = (
              <>
                <span className={styles.iconWrap}>
                  <img src={getImageUrl(l.icon)} alt="" />
                </span>
                <span className={styles.linkText}>
                  <span className={styles.linkLabel}>{l.label}</span>
                  <span className={styles.linkValue}>{l.value}</span>
                </span>
              </>
            );
            return (
              <li key={l.label}>
                {l.href ? (
                  <a
                    className={styles.link}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={styles.link}>{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} Huzaifa Khan. Designed &amp; built with care.
      </p>
    </footer>
  );
}

export default Contact;
