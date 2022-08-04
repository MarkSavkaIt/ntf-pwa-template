import React, { useState } from "react";

export interface IProps {}

export const Search: React.FC<IProps> = () => {
  const [value, setValue] = useState<string>("");
  const onChange = (value: string): void => {};
  return (
    <input
      className='bg-mintify-gray-300 focus:outline-none bg-16 bg-no-repeat bg-search bg-search-position py-2.5 pl-11 min-w-[320px] rounded-lg text-white'
      placeholder='Search artwork'
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      type='text'
    />
  );
};
