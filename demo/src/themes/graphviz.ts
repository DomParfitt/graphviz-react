import { ThemeElements } from './theme';

type GraphvizTheme = ThemeElements & {
  graphArea?: ThemeElements;
  graphInput?: ThemeElements & {
    autoUpdate?: ThemeElements & { inactive?: ThemeElements };
    inputArea?: ThemeElements;
    exampleSelector?: ThemeElements;
    updateButton?: ThemeElements;
  };
  optionsSelector?: ThemeElements & { input?: ThemeElements };
  tabContainer?: ThemeElements & { inactiveTabs?: ThemeElements };
};

export default GraphvizTheme;
