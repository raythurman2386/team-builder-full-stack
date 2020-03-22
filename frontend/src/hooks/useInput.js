import { useState } from 'react';

export const useInput = () => {
  const [value, setValue] = useState('');

  const handleChange = newValue => {
    setValue(newValue);
  };

  return [value, handleChange];
};
