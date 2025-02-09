## Custom Rich Text Editor

- Overview
  A React-based rich text editor using Tiptap. It includes basic functionality like bold, italic, underline, headings, lists, and a custom "Callout" extension. The editor is fully interactive, with keyboard shortcuts and a responsive UI. Content can be serialized and reinitialized.

- Features

- Core Formatting:
  -- Bold, Italic, Underline
  -- Headings (h1, h2,h3)
  -- Bullet and Numbered Lists

- Custom Extension:
  Callout block with a background color.

- Content Persistence:
  Clicking the "Save" button redirects you to the "/item" page, where the rendered HTML content is displayed.
  For rendering the HTML, html-react-parser package is used.

- Keyboard Shortcuts:
  Ctrl+B / Cmd+B for Bold.
  Ctrl+I / Cmd+I for Italic.
  Ctrl+U / Cmd+U for Underline.
  Ctrl+Z for Undo.
  Ctrl+Shift+Z / Cmd+Shift+Z for Redo.
  Ctrl + E / Cmd + E for Code
  Ctrl+shift+ L / Cmd+shift+L for Callout
  etc.

Responsive UI:
Real-time updates as you type or apply formatting.
Installation
Clone the repository:

# bash

- git clone <https://github.com/shoghdev/react-tiptap-editor.git>
- cd "react-tiptap-editor"
- npm run dev

# Usage

The editor component is integrated into a React app.
The toolbar allows users to toggle bold, italic, underline, and headings, as well as apply the custom Callout extension.

# Approach

Integrated Tiptap with React and created custom extensions for callouts and mark formatting.
Implemented UI controls and handled state persistence using JSON serialization.

# Key Decisions

Focused on core features (bold, italic, etc.) and custom callout extension.
Prioritized real-time UI updates for a responsive editing experience.
