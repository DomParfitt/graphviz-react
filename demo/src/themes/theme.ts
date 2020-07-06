export interface ThemeElements {
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  hoverTextColor?: string;
}

export interface NestedThemeElements {
  [key: string]: ThemeElements | NestedThemeElements;
}

export type Theme = ThemeElements | NestedThemeElements;

export interface ThemeMap {
  [key: string]: Theme;
}

/**
 * Gets the value for a particular theme property from a given theme.
 * Searches down the given `paths` in the `theme` object and returns the deepest
 * instance of the given `property`.
 * Returns an empty string if no value can be found.
 * @param theme the theme to get the property for
 * @param property the property to get, e.g. `backgroundColor`
 * @param paths the paths to search down
 */
function getPropertyForTheme(
  theme: Theme,
  property: keyof ThemeElements,
  paths: string[] = []
): string {
  const currentValue = (theme[property] as string) || '';

  if (paths.length === 0) {
    return currentValue;
  }

  const path = paths[0];
  const nextTheme = theme[path as keyof Theme];
  if (!nextTheme) {
    return currentValue;
  }

  return (
    getPropertyForTheme(nextTheme as Theme, property, paths.slice(1)) ||
    currentValue
  );
}

/**
 * Gets the value for a particular theme property for all given themes.
 * Searches down the given `paths` in the `theme` objects and returns the deepest
 * instance of the given `property`.
 * @param theme the theme to get the property for
 * @param property the property to get, e.g. `backgroundColor`
 * @param paths the paths to search down
 */
export const getPropertyForThemes = (
  themes: ThemeMap,
  property: keyof ThemeElements,
  paths?: string[]
) =>
  Object.entries(themes)
    .map(([key, value]) => ({
      [key]: getPropertyForTheme(value, property, paths),
    }))
    .reduce((prev, curr) => ({ ...prev, ...curr }), {});
