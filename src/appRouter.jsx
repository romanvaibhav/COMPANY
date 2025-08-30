import { createBrowserRouter } from "react-router-dom";
import Navbar from "../src/components/nav/Navbar";
import Home from "../src/components/admin/Home";
import Service from "../src/components/admin/Service";
import Layout from "../src/components/nav/Layout";
import Works from "../src/components/admin/Work";
import AboutSection from "./components/admin/About";
import Contact from "../src/components/admin/contact";
import ProductEngi from "../src/components/admin/Services/ProductEng";
import Cloud from "../src/components/admin/Services/CloudandDev";
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
      {
        path: "work",
        element: <Works />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <AboutSection />,
      },
      {
        path: "productengii",
        element: <ProductEngi />,
      },
      {
        path: "cloud",
        element: <Cloud />,
      },
    ],
  },
]);

export default appRouter;
