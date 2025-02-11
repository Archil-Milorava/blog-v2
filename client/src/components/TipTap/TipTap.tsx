import { useMutation } from "@tanstack/react-query";
import Blockquote from "@tiptap/extension-blockquote";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import toast from "react-hot-toast";
import { createBlog } from "../../services/blogsAPI";
import MenuBar from "./MenuBar";
import "./tiptap.css";

const TipTap = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      toast.success("Posted");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const [blog, setBlog] = useState({
    title: "",
    content: "",
    image: "",
  });

  const editor = useEditor({
    extensions: [StarterKit, Blockquote],
    content: "",
    onUpdate: ({ editor }) => {
      setBlog((prev) => ({ ...prev, content: editor.getHTML() }));
    },
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setBlog((prev) => ({ ...prev, image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const postBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editor) return;
    console.log(blog);
    mutate(blog);
  };

  return (
    <form
      className={`flex flex-col gap-2 ${isPending && "opacity-10"}`}
      onSubmit={postBlog}
    >
      <MenuBar editor={editor} />
      <input
        type="text"
        className="bg-white min-h-[3rem] h-auto rounded-md shadow-md text-xl font-bold px-2"
        placeholder="Title"
        value={blog.title}
        onChange={(e) =>
          setBlog((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div className="container_editor">
        <EditorContent editor={editor} />
      </div>
      <button
        className="bg-red-500 h-12 text-xl font-semibold tracking-wide hover:opacity-80 transition-all"
        type="submit"
      >
        Post
      </button>
    </form>
  );
};

export default TipTap;
