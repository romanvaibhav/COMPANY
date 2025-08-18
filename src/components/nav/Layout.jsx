import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Page content will be rendered here */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
