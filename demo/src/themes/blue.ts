import { lighten } from 'polished';
import GraphvizTheme from './graphviz';

const colors = {
  black: '#000000',
  white: '#ffffff',
  darkBlue: '#1D3557',
  blue: '#457B9D',
  red: '#E63946',
  green: '#2F7275',
};

const light: GraphvizTheme = {
  backgroundColor: colors.white,
  textColor: colors.black,
  hoverColor: lighten(0.1, colors.blue),
  hoverTextColor: colors.black,
  graphArea: {
    // backgroundColor: colors.primary,
  },
  graphInput: {
    // backgroundColor: colors.primary,
    autoUpdate: {
      backgroundColor: colors.green,
      inactive: {
        backgroundColor: colors.red,
      },
    },
    updateButton: {
      backgroundColor: colors.blue,
      hoverColor: colors.darkBlue,
      hoverTextColor: colors.white,
    },
  },
  optionsSelector: {
    backgroundColor: colors.blue,
    textColor: colors.white,
    input: {
      backgroundColor: colors.darkBlue,
      textColor: colors.white,
    },
  },
  tabContainer: {
    backgroundColor: colors.darkBlue,
    textColor: colors.white,
    inactiveTabs: {
      backgroundColor: colors.blue,
      textColor: colors.white,
    },
  },
};

export default light;
