import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`,{
    next:{
      tags:["BLOGS"]
    }
  })
  const { data: blogs } = await res.json()
  console.log(blogs)
  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto">
        {blogs.slice(0,3).map((blog: any) => <BlogCard post={blog} key={blog.id}></BlogCard>)}
      </div>
    </div>
  );
}
