import { Blog } from "@/types/Blog";
import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";

interface BlogItemsProps {
  blog: Blog;
}

const GridItem: React.FC<BlogItemsProps> = ({ blog }) => {
  const truncateText =
    blog.content.split(" ").length > 10
      ? blog.content.substring(0, 200) + "..."
      : blog.content;

  return (
    <Link to={`/blog/${blog._id}`}>
    <Card className="mt-3">
      <CardHeader>
        <img src={blog.image} className="h-[14rem] object-cover" alt="" />
      </CardHeader>
      <CardContent dangerouslySetInnerHTML={{__html: truncateText}} />
      <CardFooter>
        <CardTitle>{blog.title}</CardTitle>
      </CardFooter>
    </Card>
    </Link>
  );
};

export default GridItem;
