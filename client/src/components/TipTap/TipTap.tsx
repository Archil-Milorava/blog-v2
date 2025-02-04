import "./tiptap.css";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BulletList from '@tiptap/extension-bullet-list'
import Blockquote from '@tiptap/extension-blockquote'
import MenuBar from "./MenuBar";

const extensions = [StarterKit, Blockquote, BulletList];

const content = ``;

const TipTap = () => {
  const editor = useEditor({
    extensions,
    content,
  });

  

  return (
    <div className="flex flex-col gap-2">
      <MenuBar editor={editor} />
      <div className="container_editor">
        <EditorContent editor={editor}></EditorContent>
      </div>
      <button>Post</button>
    </div>
  );
};

export default TipTap;

