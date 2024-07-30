import React from "react";
import styles from "./Certifications.module.css";
import certificates from "../../data/certifications.json";
import { getImageUrl } from "../../utils";

function Certifications() {
  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>
        {certificates.map((certificate, id) => {
          return (
            <div key={id} className={styles.certificate}>
              <img
                src={getImageUrl(certificate.imageSrc)}
                alt={`Certificate of ${certificate.title}`}
                className={styles.image}
              />
              <div className={styles.details}>
                <h3 className={styles.courseTile}>{certificate.title}</h3>
                <div className={styles.organization}>
                  <img
                    src={getImageUrl(certificate.logo)}
                    alt=""
                    className={styles.logo}
                  />
                  <p className={styles.logoText}>{certificate.organization}</p>
                </div>
                <a href={certificate.source} className={styles.openBtn} target="_blank">
                  Click to Open
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Certifications;
