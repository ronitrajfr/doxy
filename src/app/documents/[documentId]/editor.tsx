"use client";
import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px;",
        class:
          "focus:outline-none border cursor-text pr-14 pb-10 w-[816px] pt-10 flex flex-col min-h-[1054px] print:border-0 bg-white border-[#C7C7C7]",
      },
    },
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });
  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:overflow-visible print:bg-white">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
