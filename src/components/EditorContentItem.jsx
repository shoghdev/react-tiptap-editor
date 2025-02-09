import { useLocation } from "react-router-dom";
import parse from "html-react-parser";

export const EditorContentItem = () => {
  const location = useLocation();
  const { textContent } = location.state || {};
  return (
    <>
      <div>{parse(textContent)}</div>
    </>
  );
};
