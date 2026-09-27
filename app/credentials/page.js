import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CertList from "../components/CertList";
import { certifications } from "../data/certifications";
import { awards } from "../data/awards";

export const metadata = {
  title: "Credentials — Murugesh Aravind",
  description:
    "Eleven certifications across Google Cloud, AWS, Anthropic, OpenAI and Oracle, plus three internal awards for delivery and security work.",
  alternates: { canonical: "https://aravind.is-a.dev/credentials" },
};

/**
 * The full record. The homepage shows three certifications and three awards;
 * this is where the rest live, so the landing page does not have to carry a
 * wall of badges to be complete.
 */
export default function CredentialsPage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <div className="subpage">
          <h1 className="subpage-title">Credentials</h1>
          <p className="subpage-intro">
            Every certification and award, in one place — including the ones
            that did not make the homepage. The issuer and dates are on each
            entry; the links go to the public badge where one exists.
          </p>

          <section className="subpage-group">
            <h2 className="section-label">
              Certifications ({certifications.length})
            </h2>
            <CertList items={certifications} />
          </section>

          <section className="subpage-group">
            <h2 className="section-label">Awards ({awards.length})</h2>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
