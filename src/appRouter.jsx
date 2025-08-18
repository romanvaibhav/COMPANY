import { createBrowserRouter } from "react-router-dom";
import Navbar from "../src/components/nav/Navbar";
import Home from "../src/components/admin/Home";
import Service from "../src/components/admin/Service";
import Layout from "../src/components/nav/Layout";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "service",
        element: <Service />,
      },
    ],
  },
]);

export default appRouter;
