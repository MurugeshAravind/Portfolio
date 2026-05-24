"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Spotlight = dynamic(() => import("./spotlight"), { ssr: false });

export default function LazySpotlight() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    let active = true;
    let resizeListenerAdded = false;

    const checkWidth = () => {
      if (active) {
        setIsDesktop(window.innerWidth >= 1024);
      }
    };

    const setupSpotlight = () => {
      if (!active) return;
      checkWidth();
      window.addEventListener("resize", checkWidth);
      resizeListenerAdded = true;
    };

    const handleIdleSetup = () => {
      if (typeof window !== "undefined") {
        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(setupSpotlight);
        } else {
          setTimeout(setupSpotlight, 200);
        }
      }
    };

    if (document.readyState === "complete") {
      handleIdleSetup();
    } else {
      window.addEventListener("load", handleIdleSetup, { once: true });
    }

    return () => {
      active = false;
      window.removeEventListener("load", handleIdleSetup);
      if (resizeListenerAdded) {
        window.removeEventListener("resize", checkWidth);
      }
    };
  }, []);

  if (!isDesktop) return null;

  return <Spotlight />;
}
