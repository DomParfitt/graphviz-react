type ThemeValue = string;

export interface Theme {
  backgroundColor: ThemeValue;
  textColor: ThemeValue;
  graphArea: {
    backgroundColor: ThemeValue;
  };
  graphInput: {
    backgroundColor: ThemeValue;
    textColor: ThemeValue;
    hoverColor: ThemeValue;
  };
  optionsSelector: {
    backgroundColor: ThemeValue;
    textColor: ThemeValue;
    input: {
      backgroundColor: ThemeValue;
      textColor: ThemeValue;
    };
  };
  tabContainer: {
    backgroundColor: ThemeValue;
    textColor: ThemeValue;
    hoverColor: ThemeValue;
    inactiveTabs: {
      backgroundColor: ThemeValue;
      textColor: ThemeValue;
    };
  };
}

interface ThemeMap {
  [key: string]: Theme;
}

export const getElement = (themes: ThemeMap, path: keyof Theme) =>
  Object.entries(themes)
    .map(([key, value]) => ({ [key]: value[path] }))
    .reduce((prev, curr) => ({ ...prev, ...curr }), {});
