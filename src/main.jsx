import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { EditorContentItem } from "./components/EditorContentItem.jsx";
const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/item",
    element: <EditorContentItem />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
);
