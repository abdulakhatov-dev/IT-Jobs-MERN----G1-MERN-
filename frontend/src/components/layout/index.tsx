import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface PropsI {
  children: React.ReactNode;
}

const MainLayout: React.FC<PropsI> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-80px-40px)]">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
