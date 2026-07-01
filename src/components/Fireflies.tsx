"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Fireflies() {
  const [fireflies, setFireflies] = useState<{ id: number; left: string; top: string; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate fireflies only on client to avoid hydration mismatch
    const particles = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
    setFireflies(particles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {fireflies.map((ff) => (
        <motion.div
          key={ff.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-gold/80"
          style={{ left: ff.left, top: ff.top, filter: "blur(1px)", willChange: "transform, opacity" }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 10, -10, 10, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: ff.duration,
            repeat: Infinity,
            delay: ff.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
