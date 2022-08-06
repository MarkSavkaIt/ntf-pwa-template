import React, { useState } from "react";
import classNames from "classnames";
import { NonEmptyArr } from "types/special";

export interface IProps {
  titles: NonEmptyArr<string>;
  onChange: (title: string) => void;
}

export const NavBar: React.FC<IProps> = ({ titles, onChange }) => {
  const [active, setActive] = useState<string>(titles[0] || "");

  const onHandleClick = (title: string): void => {
    if (title !== active) {
      setActive(title);
      onChange(title);
    }
  };

  return titles.length === 0 ? (
    <p>titles is empty</p>
  ) : (
    <div className='flex flex-row list-none'>
      {titles.map((title: string) => (
        <div
          key={title}
          className={classNames(
            "cursor-pointer py-5 mx-5 border-b-2 hover:text-mintify-active duration-300",
            {
              "border-b-2 border-mintify-active text-mintify-active":
                title === active,
            },
            { "border-mintify-gray-100": title !== active }
          )}
          onClick={() => onHandleClick(title)}
        >
          {title}
        </div>
      ))}
    </div>
  );
};
