import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

interface IProps {
  children: JSX.Element;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
