"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";

import { motion } from "framer-motion";
import writingImg from "@/assets/write.png"
import knowledgeImg from "@/assets/knowledge.png"
import communityImg from "@/assets/community.png"
import searchImg from "@/assets/search.png"

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  iconUrl: StaticImageData
}

const features: FeatureCard[] = [
  {
    id: 1,
    title: "Easy Blog Writing",
    description:
      "Write and publish your blog posts effortlessly with our clean, distraction-free editor built for speed.",
    iconUrl: writingImg,
  },
  {
    id: 2,
    title: "Rich Knowledge",
    description:
      "Explore a growing library of well-researched articles covering a wide range of topics and ideas.",
    iconUrl: knowledgeImg,
  },
  {
    id: 3,
    title: "Community Driven",
    description:
      "Connect with passionate writers and readers who share feedback, support, and engagement.",
    iconUrl: communityImg,
  },
  {
    id: 4,
    title: "Powerful Search",
    description:
      "Find exactly what you're looking for instantly with our fast and smart search functionality.",
    iconUrl: searchImg,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full my-36 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Why Choose Our Blog
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Everything you need to read, write, and grow — all in one place.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                delay: index * 0.3,
                ease: "easeOut",
              }}
              className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 px-4 py-6 border border-slate-100"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 shrink-0 rounded-xl">
                  <Image
                    src={feature.iconUrl}
                    alt={feature.title}
                    fill
                    sizes="48px"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}