import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./route/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Createpost from "./components/Createpost.jsx";
import Postlist from "./components/Postlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Postlist /> },
      {
        path: "/Create-Post",
        element: <Createpost />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
