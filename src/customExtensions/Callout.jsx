import { Mark, mergeAttributes } from "@tiptap/core";

export const Callout = Mark.create({
  name: "callout",

  addOptions() {
    return {
      multicolor: true,
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    if (!this.options.multicolor) {
      return {};
    }

    return {
      backgroundColor: {
        default: "lightblue",
        parseHTML: (element) =>
          element.getAttribute("data-background-color") || "lightblue",
        renderHTML: (attributes) => {
          if (!attributes.backgroundColor) {
            return {};
          }

          return {
            "data-background-color": attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor}; padding: 10px; display:block;`,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "p",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "p",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      "!",
    ];
  },

  addCommands() {
    return {
      toggleCallout:
        (attributes) =>
        ({ commands }) => {
          return commands.toggleMark(this.name, attributes);
        },
    };
  },

  addKeyboardShortcuts() {
    return {
      "Mod-Shift-L": () => {
        return this.editor.commands.toggleCallout();
      },
    };
  },
});
