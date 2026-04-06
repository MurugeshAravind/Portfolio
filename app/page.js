import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LazySpotlight from "./components/lazy-spotlight";

export default function HomePage() {
  return (
    <>
      <LazySpotlight />
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
