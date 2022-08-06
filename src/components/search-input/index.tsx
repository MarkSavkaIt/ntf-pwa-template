import React, { useCallback } from "react";
import { onChangeInputType } from "types/onChanges";
import { debounce } from "throttle-debounce";

export interface IProps {
  onChange: onChangeInputType;
}

export const Search: React.FC<IProps> = ({ onChange }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceChange = useCallback(
    debounce(800, (value: string) => onChange(value)),
    []
  );

  return (
    <input
      className='bg-mintify-gray-300 focus:outline-none bg-16 bg-no-repeat bg-search bg-search-position py-2.5 pl-11 min-w-[320px] rounded-lg text-white'
      placeholder='Search artwork'
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        debounceChange(e.target.value)
      }
      type='text'
    />
  );
};
