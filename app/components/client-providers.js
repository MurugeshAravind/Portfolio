"use client";

import dynamic from "next/dynamic";

// Lazy-load analytics to reduce initial JS bundle and avoid bfcache issues
const Analytics = dynamic(
  () => import("@vercel/analytics/react").then((mod) => mod.Analytics),
  { ssr: false }
);
const SpeedInsights = dynamic(
  () => import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights),
  { ssr: false }
);

export default function ClientProviders() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
