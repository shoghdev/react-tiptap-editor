import { useState } from "react";
import "./App.css";
import TipTap from "./components/TipTap";

function App() {
  const [htmlContent, setHtmlContent] = useState("");
  const handleEditorContentSave = (html) => {
    setHtmlContent(html);
  };
  return (
    <div className="App">
      <TipTap onEditorContentSave={handleEditorContentSave} />
    </div>
  );
}

export default App;
