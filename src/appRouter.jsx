import { createBrowserRouter } from "react-router-dom";
import Navbar from "../src/components/nav/Navbar";
import Home from "../src/components/admin/Home";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default appRouter;
