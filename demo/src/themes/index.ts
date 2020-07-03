import theme from 'styled-theming';
import dark from './dark';
import { getPropertyForThemes, ThemeElements } from './theme';

export const themes = {
  dark,
};

export const getProperty = (property: keyof ThemeElements, paths?: string[]) =>
  theme('mode', getPropertyForThemes(themes, property, paths));
