import GridItem from "@/components/grid/GridItem";
import { useQuery } from "@tanstack/react-query";
import Carousel from "../components/Carousel";
import { getBlogs } from "../services/blogsAPI";
import SectionDeviderWrapper from "../ui/SectionDeviderWrapper";
import Spinner from "../ui/Spinner";

const Landing = () => {
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <Spinner size="large" />;

  return (
    <section className=" h-auto w-full">
      <Carousel />

      <SectionDeviderWrapper>
        <h1 className="font-extrabold uppercase tracking-widest">Blog Posts</h1>
      </SectionDeviderWrapper>

      {/* grid */}
      <div className=" w-full h-auto grid grid-cols-1 sm:grid-cols-3  gap-2">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => <GridItem key={blog._id} blog={blog} />)
        ) : (
          <div className=" w-full h-screen flex items-center justify-center text-center text-4xl">
            no data
          </div>
        )}
      </div>
    </section>
  );
};

export default Landing;
