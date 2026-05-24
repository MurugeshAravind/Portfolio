"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Spotlight = dynamic(() => import("./spotlight"), { ssr: false });

export default function LazySpotlight() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) {
      return;
    }

    const handleFirstInteraction = () => {
      setMounted(true);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("mousemove", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("mousemove", handleFirstInteraction, { passive: true });
    window.addEventListener("touchstart", handleFirstInteraction, { passive: true });

    return cleanup;
  }, []);

  if (!mounted) return null;

  return <Spotlight />;
}
