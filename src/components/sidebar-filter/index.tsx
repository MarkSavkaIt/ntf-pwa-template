import React, { useState } from "react";
import { ArrowDown } from "assets/svg/index";
import { NonEmptyArr } from "types/special";
import classNames from "classnames";

type filter = {
  type: string;
  title: string;
  status: boolean;
};

type category = {
  name: string;
  filters: NonEmptyArr<filter>;
};

export interface IProps {
  categories: category[];
}

const Filter: React.FC<category> = ({ name, filters }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <span className='flex flex-col my-3 mx-2'>
      <span
        className='flex flex-row justify-between items-center cursor-pointer'
        onClick={() => setOpen((a) => !a)}
      >
        <p className='text-white'>{name}</p>
        {/* <img src={ArrowDown} alt='arrow down' /> */}
        <ArrowDown className={classNames({ "rotate-180": isOpen })} />
      </span>

      <span
        className={classNames(
          "text-white overflow-hidden duration-1000",
          // "truncate",
          isOpen ? "max-h-48" : "max-h-0"
        )}
      >
        Open Open Open Open
        <br />
        Open Open Open Open
        <br />
        Open Open Open Open
      </span>
    </span>
  );
  // <Filter name={category.name} filters={category.filters} />
};

export const SidebarFilter: React.FC<IProps> = ({ categories }) => {
  return (
    <div>
      {categories.map((category: category) => {
        return <Filter name={category.name} filters={category.filters} />;
      })}
    </div>
  );
};
