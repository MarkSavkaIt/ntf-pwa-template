import React, { useState } from "react";
import { ArrowDown } from "assets/svg/index";
import { NonEmptyArr } from "types/special";
import classNames from "classnames";

type filterType = "checkbox" | "radio";

type filter = {
  type: filterType;
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
        <p className='text-white mb-2'>{name}</p>
        <ArrowDown
          className={classNames("duration-300 ease-in-out", {
            "rotate-180": isOpen,
          })}
        />
      </span>

      <span
        className={classNames(
          "text-white overflow-hidden ease-linear duration-1000",
          isOpen ? "max-h-56" : "max-h-0"
        )}
      >
        {filters.map((filter: filter) => {
          return (
            <span className='flex'>
              <input type={filter.type} />
              <label className='ml-1'>{filter.title}</label>
            </span>
          );
        })}
      </span>
    </span>
  );
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
