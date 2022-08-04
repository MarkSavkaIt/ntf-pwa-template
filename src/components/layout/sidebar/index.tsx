import React from "react";

export interface IProps {}

export const Sidebar: React.FC<IProps> = () => {
  return (
    <div className='bg-gray-mintify-100'>
      <p>Sidebar</p>
    </div>
  );
};
