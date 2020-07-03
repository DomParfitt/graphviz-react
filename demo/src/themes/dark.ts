import { lighten } from 'polished';
import GraphvizTheme from './graphviz';

const colors = {
  black: '#000000',
  darkGrey: '#282c34',
  lightGrey: '#4b5263',
  white: '#abb2bf',
  blue: '#61afef',
  red: '#be5046',
  green: '#98c379',
};

const dark: GraphvizTheme = {
  backgroundColor: colors.darkGrey,
  textColor: colors.white,
  hoverColor: colors.blue,
  hoverTextColor: colors.black,
  graphArea: {
    backgroundColor: colors.lightGrey,
  },
  graphInput: {
    autoUpdate: {
      backgroundColor: colors.green,
      inactive: {
        backgroundColor: colors.red,
      },
    },
  },
  optionsSelector: {
    input: {
      backgroundColor: colors.lightGrey,
      textColor: colors.white,
    },
  },
  tabContainer: {
    backgroundColor: lighten(0.3, colors.darkGrey),
    textColor: colors.black,
    inactiveTabs: {
      backgroundColor: colors.lightGrey,
      textColor: colors.white,
    },
  },
};

export default dark;
