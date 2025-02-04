import Blog from "../components/Blog";
import LatestBlog from "../components/LatestBlog";
import SectionDeviderWrapper from "../ui/SectionDeviderWrapper";

const BlogPage = () => {
  return (
    <section className=" w-full h-auto my-2  flex flex-col sm:flex-row gap-1 sm:gap-3">
      <div className=" h-auto sm:w-8/12 w-full ">
        <Blog />
      </div>
      <div className=" h-auto sm:w-4/12 w-full flex flex-col  gap-3 ">
        <SectionDeviderWrapper>latest blogs</SectionDeviderWrapper>
        <LatestBlog />
        <LatestBlog />
        <LatestBlog />
      </div>
    </section>
  );
};

export default BlogPage;
