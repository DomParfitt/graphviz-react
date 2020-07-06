import theme from 'styled-theming';
import dark from './dark';
import light from './light';
import { getPropertyForThemes, ThemeElements } from './theme';

export const themes = {
  dark,
  light,
};

export const getThemeProperty = (
  property: keyof ThemeElements,
  paths?: string[]
) => theme('mode', getPropertyForThemes(themes, property, paths));

export const getThemeProperties = (
  paths?: string[]
): { [key in keyof ThemeElements]: theme.ThemeSet } =>
  (['backgroundColor', 'textColor', 'hoverColor', 'hoverTextColor'] as Array<
    keyof ThemeElements
  >)
    .map((property) => ({
      [property]: getThemeProperty(property, paths),
    }))
    .reduce((prev, curr) => ({ ...prev, ...curr }), {});
