import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { Heart, MessageCircle } from "lucide-react";
import { useParams } from "react-router-dom";
import { getBlog, likeUnlikeBlog } from "../services/blogsAPI";
import Spinner from "../ui/Spinner";
import toast from "react-hot-toast";

const Blog = () => {
  const { id } = useParams();
  const queryClient = useQueryClient()


  const { data: blog, isLoading } = useQuery({
    queryKey: ["blogs", id],
    queryFn: () => getBlog(id),
  });

  const {
    data,
    isPaused: isLiking,
    mutate,
    error
  } = useMutation({
    mutationFn: likeUnlikeBlog,
    onSuccess: () => {
      toast.success(data);
      queryClient.invalidateQueries(["blogs"])
    },
    onError: (err)=>{
      toast.error(error)
    }
  });

  function handleLikeUnlike() {
    mutate(id);
  }

  if (isLoading) return <Spinner size="large" />;

  if (!blog) return <div>Blog not found</div>;

  const { title, content, image, likes, createdAt } = blog;

  return (
    <article
      className={` ${
        isLoading && "opacity-50"
      } w-full h-full flex flex-col gap-1`}
    >
      <div className=" sm:h-[30rem] h-[17rem] w-full  ">
        <img src={image} alt="asd" className="h-full w-full object-cover" />
      </div>
      <div className="w-full h-auto uppercase text-sm flex flex-col sm:flex-row items-center gap-1 sm:gap-4 sm:my-2">
        <p className="text-sm font-semibold text-center">
          {format(new Date(createdAt), "dd MMM yyyy")}
        </p>
        <p>
          | by
          <a className="hover:underline cursor-pointer transition-all"> achi</a>
        </p>
      </div>
      <div className="flex gap-2">
        <div className="text-lg flex items-center gap-1">
          <MessageCircle
            className="cursor-pointer hover:opacity-65"
            size={20}
          />
          <span>12</span>
        </div>
        <div className="text-lg flex items-center gap-1">
          <Heart
            onClick={handleLikeUnlike}
            className={`cursor-pointer hover:text-red-400  ${isLiking && 'opacity-5'}`}
            size={20}
          />
          <span>{likes.length}</span>
        </div>
      </div>
      <div className="h-auto w-full overflow-hidden">
        <h1 className="text-4xl font-semibold mb-4">{title}</h1>
      </div>
      <div className="w-full h-auto">
        {/* <p className=" text-sm text-left leading-6">{content}</p> */}
        <div
          className="text-left leading-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  );
};

export default Blog;
