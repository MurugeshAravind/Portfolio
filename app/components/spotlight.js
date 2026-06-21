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
          spotlightRef.current.style.transform = `translate3d(${currentPos.current.x - 600}px, ${currentPos.current.y - 600}px, 0)`;
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
      className="pointer-events-none fixed left-0 top-0 z-30 w-[1200px] h-[1200px]"
      style={{
        background: "radial-gradient(600px circle at center, rgba(200, 245, 69, 0.04) 0%, rgba(59, 130, 246, 0.02) 40%, transparent 80%)",
        transform: "translate3d(-600px, -600px, 0)",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}
