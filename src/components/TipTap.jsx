import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import React from "react";
import { MenuBar } from "./MenuBar";
import { Callout } from "../customExtensions/Callout";

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  Underline,
  Callout,
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
];

const content = `
`;

const TipTap = ({ onEditorContentSave }) => {
  return (
    <>
      <EditorProvider
        slotBefore={<MenuBar onEditorContentSave={onEditorContentSave} />}
        extensions={extensions}
        content={content}
      ></EditorProvider>
    </>
  );
};

export default TipTap;
