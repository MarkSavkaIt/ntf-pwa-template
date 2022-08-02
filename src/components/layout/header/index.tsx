import React from "react";
import logo from "assets/svg/logo.svg";

export interface IProps {}

export const Header: React.FC<IProps> = () => {
  return (
    <header className='bg-gray-mintify-100'>
      <img src={logo} alt='logo' />
    </header>
  );
};
