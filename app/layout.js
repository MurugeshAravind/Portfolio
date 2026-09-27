import {
  IBM_Plex_Sans,
  IBM_Plex_Serif,
  IBM_Plex_Mono,
} from "next/font/google";
import "./global.css";
import { metrics } from "./data/metrics";

/**
 * One superfamily, three members with separate jobs: serif for headings, sans
 * for prose, mono for metadata (dates, tech lists, labels). An earlier revision
 * paired Space Grotesk with Inter — the display-plus-body pairing that every
 * generated portfolio reaches for. A single superfamily reads as a deliberate
 * system instead.
 */
const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-display",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://aravind.is-a.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Murugesh Aravind — Senior Frontend Engineer",
  description: `${metrics.yearsExperience.text} building banking platforms and React architectures for enterprise systems serving ${metrics.usersServed.text} users, plus hands-on AI work with the Claude API and Gemini ADK. Based in India. Open to senior and lead frontend roles.`,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Murugesh Aravind — Senior Frontend Engineer",
    description: `${metrics.yearsExperience.text} · React · TypeScript · Enterprise · GenAI · ${metrics.usersServed.compact} users`,
    siteName: "Murugesh Aravind",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murugesh Aravind — Senior Frontend Engineer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "lQosaKZzzIGt1_-iGncrCIJf9zkPCykkk5WbZomaRQo",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Murugesh Aravind",
  jobTitle: "Senior Frontend Engineer",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/MurugeshAravind",
    "https://linkedin.com/in/murugesh-aravind-0ab64847",
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "Frontend Architecture",
    "Accessibility",
    "Performance Optimization",
    "AI Architecture",
    "Model Context Protocol (MCP)",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plexSerif.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
