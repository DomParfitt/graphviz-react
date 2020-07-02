import { createContext } from 'react';
import dark from './dark';

export const themes = {
  dark,
};

export const ThemeContext = createContext(themes.dark);
