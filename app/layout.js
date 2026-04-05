import { GeistSans } from "geist/font/sans";
import ClientProviders from "./components/client-providers";
import "./global.css";

const siteUrl = "https://www.aravind.is-a.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Murugesh Aravind — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 8+ years of experience building scalable banking platforms and React architectures. Specializing in accessibility, performance, and TypeScript.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Murugesh Aravind — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 8+ years of experience building scalable banking platforms and React architectures. Specializing in accessibility, performance, and TypeScript.",
    siteName: "Murugesh Aravind Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murugesh Aravind — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 8+ years of experience building scalable banking platforms and React architectures. Specializing in accessibility, performance, and TypeScript.",
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
  email: "arvindh.balasubramaniam@gmail.com",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${GeistSans.className} bg-white dark:bg-neutral-950 leading-relaxed text-neutral-600 dark:text-neutral-400 antialiased selection:bg-teal-300 selection:text-teal-900`}>
        {children}
        <ClientProviders />
      </body>
    </html>
  );
}