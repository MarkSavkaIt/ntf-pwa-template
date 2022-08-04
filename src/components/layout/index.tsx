import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

interface IProps {
  children: JSX.Element;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className='grid grid-rows-3 grid-cols-sidebar text-white m-0 p-0 box-border'>
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
