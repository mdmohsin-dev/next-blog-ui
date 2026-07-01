"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PenLine, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogImg from "@/assets/blog.jpg"
import avatar from "@/assets/rizwan.jpg"

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden py-16 px-6">
      {/* Background: soft gradient + blurred color blobs for light theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <motion.div
        className="absolute -top-24 -left-24 w-[24rem] h-[24rem] rounded-full blur-3xl opacity-40"
        style={{ backgroundColor: "rgb(199, 210, 254)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 -right-28 w-[22rem] h-[22rem] rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "rgb(251, 207, 232)" }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 left-1/3 w-[20rem] h-[20rem] rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "rgb(153, 246, 228)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-14 lg:gap-10">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left w-full lg:w-auto lg:max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-100 bg-white/80 backdrop-blur-sm shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm text-slate-600">
              Join 10,000+ writers already publishing
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Your Story Deserves
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              To Be Read
            </span>
          </h2>

          <p className="mt-5 text-slate-500 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Start writing today and share your ideas with a community that
            actually reads, comments, and grows with you.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-slate-900 text-white hover:bg-slate-800"
            >
              <Link href="/write" className="flex items-center gap-2">
                <PenLine className="w-4 h-4" />
                Start Writing
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 bg-transparent"
            >
              <Link href="/blogs" className="flex items-center gap-2">
                Explore Blogs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Right: Tilted browser-style blog mockup with floating stat badge */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-[24rem] h-[22rem] sm:h-[24rem] lg:h-[28rem] shrink-0"
        >
          {/* Main tilted browser card */}
          <motion.div
            initial={{ rotate: -6 }}
            whileInView={{ rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 w-[85%] sm:w-[22rem] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-indigo-200/50"
          >
            {/* Browser top bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800/80">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
              <div className="ml-3 flex-1 h-5 rounded-full bg-slate-700/60" />
            </div>

            {/* Cover image */}
            <div className="relative w-full h-40 sm:h-44">
              <Image
                src={blogImg}
                alt="Featured blog post"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-indigo-500/90 text-white text-xs font-medium">
                Web Development
              </div>
            </div>

            {/* Post content */}
            <div className="p-4 sm:p-5">
              <h4 className="text-white font-semibold text-sm sm:text-base leading-snug mb-2">
                10 Tips to Write Blog Posts People Actually Finish
              </h4>
              <div className="space-y-1.5 mb-4">
                <div className="h-2 rounded-full bg-slate-700/70 w-full" />
                <div className="h-2 rounded-full bg-slate-700/70 w-4/5" />
                <div className="h-2 rounded-full bg-slate-700/70 w-2/3" />
              </div>
              <div className="flex items-center gap-2">
                <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={avatar}
                    alt="Author avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-slate-400 text-xs">
                  M Rizwan &middot; 5 min read
                </span>
              </div>
            </div>
          </motion.div>

          {/* Floating trending tag */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 sm:bottom-16 lg:bottom-24 left-1/2 -translate-x-1/2 lg:left-[-0.5rem] lg:translate-x-0 flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-900 text-xs font-medium">
              Trending now
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}