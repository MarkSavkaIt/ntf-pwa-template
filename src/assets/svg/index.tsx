import React from "react";

interface IClass {
  className?: string;
}

export const ArrowDown: React.FC<IClass> = ({ className = "" }) => (
  <svg
    className={className}
    width='12'
    height='8'
    viewBox='0 0 12 8'
    fill='none'
  >
    <path
      d='M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z'
      fill='white'
    />
  </svg>
);
