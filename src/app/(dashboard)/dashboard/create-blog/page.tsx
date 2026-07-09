import CreateBlogForm from "@/components/modules/Blogs/CreateBlogForm";

const CreateBlog = () => {
  return (
    <div className="w-full flex flex-col flex-1 gap-8 mt-8 justify-center items-center">
      <h4 className="text-4xl font-semibold">Create a blog</h4>
      <CreateBlogForm></CreateBlogForm>
    </div>
  );
};

export default CreateBlog;
