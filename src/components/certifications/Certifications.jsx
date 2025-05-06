import React, { useState, useEffect } from "react";
import styles from "./Certifications.module.css";
import certificates from "../../data/certifications.json";
import { getImageUrl } from "../../utils";

function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 450);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 450);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedCertificates = isMobile
    ? showAll
      ? certificates
      : certificates.slice(0, 3)
    : certificates;

  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>
        {displayedCertificates.map((certificate, id) => {
          return (
            <div
              key={id}
              className={styles.certificate}
              onClick={() => window.open(certificate.source, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <img
                src={getImageUrl(certificate.imageSrc)}
                alt={`Certificate of ${certificate.title}`}
                className={styles.image}
              />
            </div>
          );
        })}

        {isMobile && (
          <div
            className={styles.seeMore}
            onClick={() => setShowAll(!showAll)}
            style={{ cursor: "pointer" }}
          >
            {showAll ? "See Less" : "See More"}
          </div>
        )}
      </div>
    </section>
  );
}

export default Certifications;
