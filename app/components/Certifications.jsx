import Link from "next/link";
import { certifications } from "../data/certifications";
import CertList from "./CertList";

/**
 * Three credentials on the homepage, the rest at /credentials. The full set of
 * eleven previously ran down the landing page as a grid of cards, which read as
 * badge-collecting; the three shown here are the ones carrying the strongest
 * signal, and the count is stated so nothing is hidden.
 */
export default function Certifications() {
  const featured = certifications.filter((cert) => cert.featured);

  return (
    <section id="certifications" className="section" tabIndex={-1}>
      <h2 className="section-label">Certifications</h2>
      <CertList items={featured} />
      <p className="section-foot">
        <Link href="/credentials">
          All {certifications.length} credentials and every award →
        </Link>
      </p>
    </section>
  );
}
