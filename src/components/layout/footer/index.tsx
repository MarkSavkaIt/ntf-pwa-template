import React from "react";

export interface IProps {}

export const Footer: React.FC<IProps> = () => {
  return (
    <footer className='bg-gray-mintify-300 col-span-2'>
      <p>Footer</p>
    </footer>
  );
};
