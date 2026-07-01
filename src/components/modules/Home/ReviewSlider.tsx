"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Star, Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/free-mode";

interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Aisha Rahman",
    role: "Daily Reader",
    avatar: "https://placehold.co/100x100/6366f1/white?text=AR",
    rating: 5,
    review:
      "This blog completely changed how I write. The community feedback here is gold, and the editor makes publishing effortless.",
  },
  {
    id: 2,
    name: "Tanvir Ahmed",
    role: "Content Writer",
    avatar: "https://placehold.co/100x100/ec4899/white?text=TA",
    rating: 5,
    review:
      "I've tried many blogging platforms, but the search and discovery tools here actually help readers find my work fast.",
  },
  {
    id: 3,
    name: "Sarah Khan",
    role: "Tech Blogger",
    avatar: "https://placehold.co/100x100/14b8a6/white?text=SK",
    rating: 4,
    review:
      "Clean interface, fast performance, and a genuinely supportive writer community. It quickly became my go-to platform.",
  },
  {
    id: 4,
    name: "Mahfuz Islam",
    role: "Freelance Author",
    avatar: "https://placehold.co/100x100/8b5cf6/white?text=MI",
    rating: 5,
    review:
      "Publishing my first post took less than five minutes here. The analytics and reader engagement tools are a huge plus.",
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    role: "Lifestyle Blogger",
    avatar: "https://placehold.co/100x100/f59e0b/white?text=NJ",
    rating: 5,
    review:
      "The rich knowledge base and community-driven articles keep me coming back to this blog every single day, always.",
  },
  {
    id: 6,
    name: "Rakib Hasan",
    role: "Software Engineer",
    avatar: "https://placehold.co/100x100/0ea5e9/white?text=RH",
    rating: 5,
    review:
      "The technical write-ups on this blog are detailed and accurate. It has genuinely helped me level up as a developer.",
  },
];

export default function ReviewSlider() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-white">
      <div
        className="absolute bottom-0 right-1/4 w-[22rem] h-[22rem] rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "rgb(251, 207, 232)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-indigo-100 bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Loved by Writers
            <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              {" "}
              &amp; Readers
            </span>
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            Real stories from real people who write, read, and grow with us
            every day.
          </p>
        </motion.div>
      </div>

      {/* Infinite continuous marquee slider - full bleed */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-white to-transparent" />

        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={24}
          slidesPerView="auto"
          loop
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          allowTouchMove={true}
          speed={6000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="!px-6 sm:!px-10"
        >
          {reviews.map((r) => (
            <SwiperSlide key={r.id} className="!w-[300px] sm:!w-[420px] h-auto py-2">
              <div className="group relative h-full flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100 group-hover:text-indigo-100 transition-colors" />

                <div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < r.rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-slate-200 text-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-4 min-h-[6rem] sm:min-h-[6.5rem]">
                    &ldquo;{r.review}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-100">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={r.avatar}
                      alt={r.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">
                      {r.name}
                    </p>
                    <p className="text-slate-500 text-xs">{r.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}