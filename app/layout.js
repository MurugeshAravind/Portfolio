import { Syne, DM_Sans } from "next/font/google";
import "./global.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://aravind.is-a.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Murugesh Aravind — Senior Frontend Engineer",
  description:
    "8 years building banking platforms and React architectures for 50,000+ users. Based in India. Open to senior and lead frontend roles.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Murugesh Aravind — Senior Frontend Engineer",
    description: "8 years · React · TypeScript · Banking · 50k+ users",
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
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
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
