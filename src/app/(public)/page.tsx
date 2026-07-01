import BlogCard from "@/components/modules/Blogs/BlogCard";
import CtaSection from "@/components/modules/Home/CTAsection";
import Hero from "@/components/modules/Home/Hero";
import ReviewSlider from "@/components/modules/Home/ReviewSlider";
import WhyChooseUs from "@/components/modules/Home/WhyChoose";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    next: {
      tags: ["BLOGS"]
    }
  })
  const { data: blogs } = await res.json()
  return (
    <div>
      <Hero />
      <div className="my-20">
        <h2 className="text-center pb-10 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">Featured <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-teal-500 bg-clip-text text-transparent">
                Posts
              </span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl px-4 mx-auto">
          {blogs.slice(0, 3).map((blog: any) => <BlogCard post={blog} key={blog.id}></BlogCard>)}
        </div>
      </div>
      <WhyChooseUs/>
      <CtaSection/>
      <ReviewSlider/>
    </div>
  );
}
