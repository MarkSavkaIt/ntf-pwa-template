import React from "react";
import logo from "assets/svg/logo.svg";
import { NavBar } from "components/navbar";
import { Search } from "components/search-input";

export interface IProps {}

export const Header: React.FC<IProps> = () => {
  return (
    <header className='bg-mintify-gray-100 px-7 flex justify-between col-span-2'>
      <div className='items-center flex flex-row gap-28'>
        <img src={logo} alt='logo' />
        <div className='flex flex-row'>
          <NavBar
            titles={["Dashboard", "About Us", "FAQ"]}
            onChange={() => console.log()}
          />
        </div>
      </div>
      <div className='flex items-center'>
        <Search onChange={console.log} />
      </div>
    </header>
  );
};
