import Link from "next/link";
import { certifications } from "../data/certifications";
import CertList from "./CertList";

/**
 * Three credentials on the homepage, the rest at /credentials. The full set of
 * fourteen previously ran down the landing page as a grid of cards, which read as
 * badge-collecting; the three shown here are the ones carrying the strongest
 * signal, and the count is stated so nothing is hidden.
 *
 * Sorted by the `featured` rank rather than taken in array order: the array is
 * sequenced for the LinkedIn profile first, so filtering it would otherwise
 * decide the homepage block as a side effect of where each credential sits.
 * Rank 1 leads — the strongest single credential, not the most recent.
 */
export default function Certifications() {
  const featured = certifications
    .filter((cert) => cert.featured)
    .sort((a, b) => a.featured - b.featured);

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
