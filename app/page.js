import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Awards from "./components/Awards";
import About from "./components/About";
import Footer from "./components/Footer";

/**
 * Six sections and a footer. The GenAI block is no longer its own section: it
 * is part of the Work story (it shipped inside the OAO platform), and giving it
 * a top-level numbered heading claimed a prominence it had not earned.
 *
 * ScrollProgress and LazySpotlight are gone with the rest of the effects.
 */
export default function HomePage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Work />
        <Experience />
        <Certifications />
        <Awards />
        <About />
      </main>
      <Footer />
    </>
  );
}
