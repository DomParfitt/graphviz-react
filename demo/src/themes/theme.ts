export interface ThemeElements {
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
}

interface NestedThemeElements {
  [key: string]: ThemeElements | NestedThemeElements;
}

export type Theme = ThemeElements | NestedThemeElements;

interface ThemeMap {
  [key: string]: Theme;
}

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
