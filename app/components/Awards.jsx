import { awards } from "../data/awards";

/**
 * Named internal awards, with what each was actually given for. Two of the
 * three were missing from the site entirely before this section existed.
 */
export default function Awards() {
  return (
    <section id="awards" className="section" tabIndex={-1}>
      <h2 className="section-label">Awards</h2>

      <ol className="awards-list">
        {awards.map((award) => (
          <li key={`${award.name}-${award.year}`} className="award-item">
            <h3 className="award-name">{award.name}</h3>
            <p className="award-meta">
              {award.issuer} · {award.year}
            </p>
            <p className="award-context">{award.context}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
