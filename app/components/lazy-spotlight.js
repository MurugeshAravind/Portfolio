"use client";

import dynamic from "next/dynamic";

const Spotlight = dynamic(() => import("./spotlight"), { ssr: false });

export default function LazySpotlight() {
  return <Spotlight />;
}
