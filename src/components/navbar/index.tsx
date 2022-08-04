import React, { useState } from "react";
import classNames from "classnames";

export interface IProps {
  titles: string[];
  onChange: (title: string) => void;
}

export const NavBar: React.FC<IProps> = ({ titles = [], onChange }) => {
  const [active, setActive] = useState<string>(titles[0] || "");

  const onClick = (title: string): void => {
    if (title !== active) {
      setActive(title);
      onChange(title);
    }
  };

  return titles.length === 0 ? (
    <p>titles is empty</p>
  ) : (
    <div className='flex flex-row list-none'>
      {titles.map((title) => (
        <div
          className={classNames(
            "cursor-pointer py-5 mx-5 border-b-2 hover:text-mintify-active duration-300",
            {
              "border-b-2 border-mintify-active text-mintify-active":
                title === active,
            },
            { "border-mintify-gray-100": title !== active }
          )}
          onClick={() => onClick(title)}
        >
          {title}
        </div>
      ))}
    </div>
  );
};
