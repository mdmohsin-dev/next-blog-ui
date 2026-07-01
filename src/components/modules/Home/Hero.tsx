"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, PenLine } from "lucide-react";
import Link from "next/link";
import { motion, Variants, useReducedMotion } from "framer-motion";

const tags = [
  { label: "#TECH", rotate: -6, top: "10%", left: "3%", color: "#2F5DFF", duration: 3.2, delay: 0 },
  { label: "#DESIGN", rotate: 5, top: "14%", left: "82%", color: "#E8A33D", duration: 3.8, delay: 0.3 },
  { label: "#PRODUCTIVITY", rotate: -4, top: "68%", left: "80%", color: "#5B6B4F", duration: 3.5, delay: 0.6 },
  { label: "#GROWTH", rotate: 7, top: "74%", left: "5%", color: "#2F5DFF", duration: 4, delay: 0.15 },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#F5F3EE",
        backgroundImage:
          "radial-gradient(rgba(31,36,33,0.08) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-2 min-h-screen justify-center text-center md:px-8 lg:px-12">

        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {tags.map((t, i) => (
            <motion.span
              key={t.label}
              initial={{ opacity: 0, scale: 0.85, rotate: 0, y: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: t.rotate,
                y: shouldReduceMotion ? 0 : [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.2 + i * 0.1 },
                scale: { duration: 0.5, delay: 0.2 + i * 0.1 },
                rotate: { duration: 0.5, delay: 0.2 + i * 0.1 },
                y: shouldReduceMotion
                  ? undefined
                  : {
                    duration: t.duration,
                    delay: 0.6 + t.delay,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
              }}
              style={{
                position: "absolute",
                top: t.top,
                left: t.left,
                borderColor: t.color,
                color: "#1F2421",
              }}
              className="rounded-sm border-[1.5px] border-dashed bg-[#F5F3EE] px-4 py-1 font-mono text-xs tracking-wide shadow-[2px_2px_0px_0px_rgba(31,36,33,0.15)]"
            >
              {t.label}
            </motion.span>
          ))}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div variants={rise} className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-8" style={{ backgroundColor: "#2F5DFF" }} />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8A8578]">
              The Blog — Issue N°1
            </span>
            <span className="h-[2px] w-8" style={{ backgroundColor: "#2F5DFF" }} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={rise}
            className="max-w-4xl font-serif text-3xl md:text-5xl xl:text-7xl font-semibold leading-[1.1] tracking-tight text-[#1F2421]"
            style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
          >
            Read. Learn. Share.
            <br />
            Ideas That Shape the{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-teal-500 bg-clip-text text-transparent">
                Future
              </span>
              <svg
                viewBox="0 0 220 18"
                className="absolute -bottom-2 left-0 w-full"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 12 C 40 4, 80 16, 120 8 S 190 4, 218 10"
                  stroke="#2F5DFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 0.7, ease: "easeInOut" }}
                />
              </svg>
            </span>
            <motion.span
              aria-hidden
              className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.05em] motion-safe:animate-pulse"
              style={{ backgroundColor: "#1F2421" }}
            />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={rise}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-[#4A473F] md:text-xl"
          >
            Discover in-depth articles, tutorials, and thought-provoking stories
            from a global network of creators. Stay updated with fresh insights
            on technology, design, productivity, and personal growth — all in
            one place.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={rise} className="md:mt-10 mt-6">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#1F2421] text-[#F5F3EE] hover:bg-[#1F2421]/90"
            >
              <Link href="/blogs" className="flex items-center gap-2">
                Explore Blogs
                <ArrowRight />
              </Link>
            </Button>
          </motion.div>

          {/* Tags — mobile fallback, inline row */}
          <motion.div
            variants={rise}
            className="mt-10 flex flex-wrap justify-center gap-2 md:hidden"
          >
            {tags.map((t) => (
              <span
                key={t.label}
                style={{ borderColor: t.color }}
                className="rounded-sm border-[1.5px] border-dashed px-3 py-1 font-mono text-xs tracking-wide text-[#1F2421]"
              >
                {t.label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}