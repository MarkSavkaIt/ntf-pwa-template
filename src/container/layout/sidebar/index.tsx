import React from "react";

export interface IProps {}

export const Sidebar: React.FC<IProps> = () => {
  return (
    <div className='bg-mintify-gray-100'>
      <p>Sidebar</p>
    </div>
  );
};
