import { lighten } from 'polished';
import { Theme } from './theme';

const colors = {
  black: '#000000',
  darkGrey: '#282c34',
  lightGrey: '#4b5263',
  white: '#abb2bf',
  blue: '#61afef',
  red: '#be5046',
  green: '#98c379',
};

const base = {
  backgroundColor: colors.darkGrey,
  textColor: colors.white,
  hoverColor: colors.blue,
};

const graphArea: Theme = {
  backgroundColor: colors.lightGrey,
};

const graphInput: Theme = {
  // hoverColor: '#61afef',
};

const optionsSelector: Theme = {
  input: {
    backgroundColor: lighten(0.25, base.backgroundColor),
    textColor: 'black',
  },
};

const tabContainer: Theme = {
  backgroundColor: colors.lightGrey,
  textColor: colors.white,
  inactiveTabs: {
    backgroundColor: lighten(0.4, base.backgroundColor),
    textColor: colors.black,
  },
};

const dark: Theme = {
  ...base,
  graphArea,
  graphInput,
  optionsSelector,
  tabContainer,
};

export default dark;
