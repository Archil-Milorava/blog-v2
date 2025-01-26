import BackToTop from "../components/BackToTop";
import Carousel from "../components/Carousel";
import BlogItem from "../components/grid/BlogItem";

const Landing = () => {
  const blogItems = Array(5).fill(true)

  return (
    <section className="h-full">
      <Carousel />
      <div className="mt-4 border-t border-b border-black w-full py-2 flex items-center justify-center">
        <h1 className="font-extrabold uppercase tracking-widest">Blog Posts</h1>
      </div>

      <div className="grid gap-2 sm:grid-cols-3 sm:grid-rows-2 grid-cols-1 grid-rows-4">
        {blogItems.map((_, index) => (
          <BlogItem key={index}  />
        ))}
      </div>
      
      <BackToTop />
    </section>
  );
};

export default Landing;
