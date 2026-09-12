import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import About from "./components/About";
import LazySpotlight from "./components/lazy-spotlight";
import ScrollProgress from "./components/ScrollProgress";

export default function HomePage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <LazySpotlight />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects />
        <Experience />
        <Certifications />
        <About />
      </main>
    </>
  );
}
