import Image from "next/image";
import profileImg from "../../profile.webp";
import { heroTitle, heroLede, heroMeta, heroCta } from "../data/hero";
import { site } from "../data/site";

/**
 * A statement, one way out of it, and the person making it.
 *
 * What was removed here and why: three stat cards, ten stack pills, a second
 * call to action, and three staggered entrance animations. Each is a
 * recognisable template signature, and together they were the loudest part of
 * the page — the visitor met a wall of badges before a single sentence about
 * the work.
 *
 * The portrait moved up from About. It gives the first screen a human subject
 * instead of leaving two thirds of it empty, and it stops the About section
 * from opening with an oversized headshot beside an oversized paragraph.
 */
export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-content">
        <h1 className="hero-title">{heroTitle}</h1>
        <p className="hero-lede">{heroLede}</p>
        <p className="hero-meta">{heroMeta}</p>
        <a className="hero-cta" href={heroCta.href}>
          {heroCta.label}
        </a>
      </div>

      <figure className="hero-portrait">
        <div className="hero-portrait-frame">
          <Image
            src={profileImg}
            alt={`Portrait of ${site.name}`}
            width={280}
            height={280}
            className="hero-portrait-image"
            priority
          />
        </div>
        <figcaption>{site.location}</figcaption>
      </figure>
    </section>
  );
}
