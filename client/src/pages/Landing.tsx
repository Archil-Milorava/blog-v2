import Carousel from "../components/Carousel";
import BlogItem from "../components/grid/BlogItem";
import SectionDeviderWrapper from "../ui/SectionDeviderWrapper";

const Landing = () => {
  const blogItems = Array(4).fill(true);

  return (
    <section className=" h-auto w-full">
      <Carousel />
      <SectionDeviderWrapper>
        <h1 className="font-extrabold uppercase tracking-widest">Blog Posts</h1>
      </SectionDeviderWrapper>

      {/* grid */}
      <div className=" w-full h-auto grid grid-cols-1 sm:grid-cols-3  gap-2">
        {blogItems.map(() => (
          <BlogItem />
        ))}
      </div>
    </section>
  );
};

export default Landing;
