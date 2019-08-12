import React from 'react';
import { TextInput } from './text-input';
import { component } from '../../utils/structure';

export default { title: component('TextInput') };

export const normal = () => <TextInput label="Favourite paper brand" placeholder="Tell me..." />;
export const withIcon = () => (
  <TextInput label="Best skill with your nose" placeholder="Sorry for being nosy..." icon="" />
);
export const withText = () => (
  <TextInput label="Hand size" placeholder="Type here..." help="We handle this information privately" />
);
export const withIconAndText = () => (
  <TextInput label="Hand size" placeholder="Type here..." help="We handle this information privately" icon="" />
);

export const button = () => <input type="button" />;
export const checkbox = () => <input type="checkbox" />;
export const color = () => <input type="color" />;
export const date = () => <input type="date" />;
export const datetime_local = () => <input type="datetime-local" />;
export const email = () => <input type="email" />;
export const file = () => <input type="file" />;
export const password = () => <input type="password" />;
export const radio = () => <input type="radio" />;
export const range = () => <input type="range" />;
export const reset = () => <input type="reset" />;
export const search = () => <input type="search" />;
export const submit = () => <input type="submit" />;
export const tel = () => <input type="tel" />;
export const text = () => <input type="text" />;
export const time = () => <input type="time" />;
export const url = () => <input type="url" />;
