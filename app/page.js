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
      <ScrollProgress />
      <LazySpotlight />
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Certifications />
      <About />
    </>
  );
}
