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
  hoverTextColor: colors.black,
};

const graphArea: Theme = {
  backgroundColor: colors.lightGrey,
};

const graphInput: Theme = {};

const optionsSelector: Theme = {
  input: {
    backgroundColor: colors.lightGrey,
    textColor: colors.white,
  },
};

const tabContainer: Theme = {
  backgroundColor: lighten(0.3, base.backgroundColor),
  textColor: colors.black,
  inactiveTabs: {
    backgroundColor: colors.lightGrey,
    textColor: colors.white,
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
