"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface ExploreButtonProps {
  href?: string;
  text?: string;
  className?: string;
}

export default function ExploreButton({
  href = "/blogs",
  text = "Explore Blogs",
  className = "",
}: ExploreButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='flex border w-96 justify-between px-6'
    >
      <span>{text}</span>

      <span className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <motion.span
          className="flex items-center justify-center"
          animate={{
            x: hovered ? 24 : 0,
            rotate: hovered ? 360 : 0,
            opacity: hovered ? 0 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <ArrowRight size={20} />
        </motion.span>
      </span>
    </Link>
  );
}