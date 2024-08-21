import { Footer } from "@/components/homepage/footer/Footer";
import { Header } from "@/components/homepage/header/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
