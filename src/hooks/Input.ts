import { ChangeEvent, useState } from 'react';

type IchangeHandler = (e: ChangeEvent<HTMLInputElement>) => void;

export const useInput = (initialValie = '') => {
  const [value, setValue] = useState<string>(initialValie);
  const changeHandler: IchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: changeHandler,
  };
};
