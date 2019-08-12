import React from 'react';

interface Props {
  label: string;
  placeholder: string;
  help?: string;
  icon?: string;
}

export const TextInput = (props: Props) => {
  console.log(props);
  return <input />;
};
