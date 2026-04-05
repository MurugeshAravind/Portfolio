"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Spotlight = dynamic(() => import("./spotlight"), { ssr: false });

export default function LazySpotlight() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side) and above mobile/tablet width
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkWidth();
    window.addEventListener("resize", checkWidth);
    
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (!isDesktop) return null;

  return <Spotlight />;
}
