"use client";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  repeat?: boolean; // 再表示オプション
};

const variants: Variants = {
  hidden: (custom: { y: number }) => ({ opacity: 0, y: custom.y }),
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Reveal({ children, delay = 0, y = 24, repeat = false }: Props) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            controls.start("show");
          } else if (repeat) {
            controls.set("hidden");
          }
        });
      },
      { threshold: 0.15 } // ← これが正しい位置
    );

    io.observe(el);
    return () => io.disconnect();
  }, [controls, repeat]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      custom={{ y }}
      animate={controls}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
