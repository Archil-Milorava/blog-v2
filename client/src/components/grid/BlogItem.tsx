import { Link } from "react-router-dom";
import { Blog } from "../../types/Blog";

interface BlogItemsProps {
  blog: Blog
}


const BlogItem: React.FC<BlogItemsProps> = ({blog}) => {

  const truncateText =
  blog.content.split(" ").length > 10
      ? blog.content.substring(0, 200) + "..."
      : blog.content;

  return (
    <Link to={`/blog/${blog._id}`} className=" h-[24rem] w-full overflow-hidden mt-4 hover:underline transition-all">
      {/* iamge */}
      <div className=" h-1/2">
      <img src={blog.image} alt="asd" className={`${!blog.image && "skeleton"} min-h-full max-h-full w-full object-cover cursor-pointer`} />
      </div>

      {/* titile */}
      <div className="h-1/2 w-full flex flex-col items-center justify-center gap-1">
        
      <h1 className="h-auto  max-h-[4rem]  text-lg font-semibold tracking-wider text-center overflow-hidden w-full ">
        {blog.title}
      </h1>

      {/* content */}
      {/* <p className="text-sm text-center px-1">{truncateText}</p> */}
        <div dangerouslySetInnerHTML={{__html: truncateText}} className="text-sm" />

      {/* author */}
      <h2 className="uppercase ">
        <span>DEc 16 2024</span> <span className="hover:underline transition-all cursor-pointer">Archil milorava</span>
      </h2>
      </div>
    </Link>
  );
};

export default BlogItem;
