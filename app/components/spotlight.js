"use client";

import { useEffect, useRef } from "react";

export default function Spotlight() {
  const spotlightRef = useRef(null);
  const rafRef = useRef(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;
    
    const animate = () => {
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      // Only update DOM when there's meaningful movement
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.08);
        currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.08);
        if (spotlightRef.current) {
          spotlightRef.current.style.background = `radial-gradient(700px at ${currentPos.current.x}px ${currentPos.current.y}px, rgba(20, 184, 166, 0.12), transparent 80%)`;
        }
        rafRef.current = requestAnimationFrame(animate);
      } else {
        isMoving.current = false;
      }
    };

    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isMoving.current) {
        isMoving.current = true;
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30"
      aria-hidden="true"
    />
  );
}
