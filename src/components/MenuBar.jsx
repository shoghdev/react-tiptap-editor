import { useCurrentEditor } from "@tiptap/react";
import React from "react";
import {
  FaBold,
  FaItalic,
  FaParagraph,
  FaStrikethrough,
  FaListOl,
  FaListUl,
  FaUnderline,
  FaQuoteLeft,
  FaRedo,
  FaUndo,
  FaCode,
  FaSave,
  FaExclamation,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const MenuBar = ({ onEditorContentSave }) => {
  const { editor } = useCurrentEditor();
  const navigate = useNavigate();
  if (!editor) {
    return null;
  }
  const html = editor.getHTML();
  const handleEditorContent = () => {
    onEditorContentSave(html);
  };

  const handelSave = () => {
    handleEditorContent(html);
    navigate("/item", {
      state: {
        textContent: html,
      },
    });
  };

  return (
    <div className="control-group">
      <div className="button-group">
        <button onClick={handelSave} className={"saveButton"}>
          <FaSave />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCallout().run()}
          className={editor.isActive("callout") ? "is-active" : ""}
        >
          <FaExclamation />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold("info").run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <FaBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <FaItalic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <FaStrikethrough />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is-active" : ""}
        >
          <FaUnderline />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
        >
          <FaCode />
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={
            editor.isActive("paragraph") && editor.state.selection.empty
              ? ""
              : "is-active"
          }
        >
          <FaParagraph />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          H2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <FaListUl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          <FaListOl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          <FaQuoteLeft />
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <FaUndo />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <FaRedo />
        </button>
      </div>
    </div>
  );
};
