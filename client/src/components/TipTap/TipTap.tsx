import Blockquote from "@tiptap/extension-blockquote";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import "./tiptap.css";
import axios from "axios";
import { useState } from "react";

//http://localhost:8000/api/v1/create

const TipTap = () => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    image: ""
  });

  const [loading, setLoading] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, Blockquote],
    content: ""
  });


  const postBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editor) return;

    const updatedBlog = {
      ...blog,
      content: editor.getHTML(),
    };

    setBlog(updatedBlog);

    try {
      setLoading(true);
      await axios.post("http://localhost:8000/api/v1/create", updatedBlog);
      console.log("posted");
      setBlog({ title: "", content: "", image:"" });
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className={`flex flex-col gap-2 ${loading && "opacity-10"}`}
      onSubmit={postBlog}
    >
      <MenuBar editor={editor} />
      <input
        type="text"
        className="bg-white min-h-[3rem] h-auto rounded-md shadow-md text-xl font-bold px-2"
        placeholder="Title"
        value={blog.title}
        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
      />
      {/* <input type="file"
        accept="image/*"
        onChange={handleImageUpload}
      /> */}
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
