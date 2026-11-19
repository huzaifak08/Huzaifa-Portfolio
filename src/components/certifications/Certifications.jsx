import { useState, useEffect } from "react";
import styles from "./Certifications.module.css";
import certificates from "../../data/certifications.json";
import { getImageUrl } from "../../utils";

const MOBILE_QUERY = "(max-width: 480px)";
const MOBILE_LIMIT = 4;

function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(MOBILE_QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const displayed =
    isMobile && !showAll ? certificates.slice(0, MOBILE_LIMIT) : certificates;

  return (
    <section className="page-section" id="certifications">
      <div className="section-head reveal">
        <span className="eyebrow">Certifications</span>
        <h2 className="section-title">Always learning.</h2>
        <p className="section-sub">
          Courses and credentials. Tap any card to view the certificate.
        </p>
      </div>

      <div className={styles.grid}>
        {displayed.map((certificate, id) => (
          <a
            key={id}
            href={certificate.source}
            target="_blank"
            rel="noreferrer"
            className={`glass glass-interactive ${styles.certificate}`}
            aria-label={`View ${certificate.title} certificate${
              certificate.organization ? ` from ${certificate.organization}` : ""
            }`}
          >
            <div className={styles.imageWrap}>
              <img
                src={getImageUrl(certificate.imageSrc)}
                alt=""
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.meta}>
              <span className={styles.name}>{certificate.title}</span>
              {certificate.organization && (
                <span className={styles.org}>{certificate.organization}</span>
              )}
            </div>
          </a>
        ))}
      </div>

      {isMobile && certificates.length > MOBILE_LIMIT && (
        <div className={styles.moreRow}>
          <button
            type="button"
            className="btn btn-glass"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show less" : `Show all ${certificates.length}`}
          </button>
        </div>
      )}
    </section>
  );
}

export default Certifications;
