import { heroTitle, heroLede, heroMeta, heroCta } from "../data/hero";

/**
 * A statement and one way out of it.
 *
 * What was removed here and why: three stat cards, ten stack pills, a second
 * call to action, and three staggered entrance animations. Each is a
 * recognisable template signature, and together they were the loudest part of
 * the page — the visitor met a wall of badges before a single sentence about
 * the work.
 */
export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <h1 className="hero-title">{heroTitle}</h1>
      <p className="hero-lede">{heroLede}</p>
      <p className="hero-meta">{heroMeta}</p>
      <a className="hero-cta" href={heroCta.href}>
        {heroCta.label}
      </a>
    </section>
  );
}
