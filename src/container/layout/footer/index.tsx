import React from "react";

export interface IProps {}

export const Footer: React.FC<IProps> = () => {
  return (
    <footer className='bg-mintify-gray-300 col-span-2'>
      <p>Footer</p>
    </footer>
  );
};
