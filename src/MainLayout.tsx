import { Outlet } from "react-router-dom";
import LandingHeader from "./Components/LandingHeader";
import Footer from "./Components/Footer";

const MainLayout = () => {
  return (
    <>
      <LandingHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;