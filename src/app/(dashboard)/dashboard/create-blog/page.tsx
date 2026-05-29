import CreateBlogForm from "@/components/modules/Blogs/CreateBlogForm";
import React from "react";

const CreateBlog = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <h4 className="text-4xl font-semibold">Create a blog</h4>
      <CreateBlogForm></CreateBlogForm>
    </div>
  );
};

export default CreateBlog;
