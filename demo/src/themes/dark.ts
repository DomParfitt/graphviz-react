import { lighten } from 'polished';
import { Theme } from './theme';

const colors = {
  black: '#000000',
  grey: '#282c34',
  white: '#abb2bf',
  blue: '#61afef',
  red: '#be5046',
  green: '#98c379',
};

const base = {
  backgroundColor: '#282c34',
  textColor: '#abb2bf',
  hoverColor: '#61afef',
};

const graphArea = {
  backgroundColor: '#4b5263',
};

// const graphInput = {
//   hoverColor: '#61afef',
// };

const optionsSelector = {
  input: {
    backgroundColor: lighten(0.4, base.backgroundColor),
    // textColor: 'black',
  },
};

const tabContainer = {
  backgroundColor: lighten(0.25, base.backgroundColor),
  inactiveTabs: {
    backgroundColor: lighten(0.4, base.backgroundColor),
  },
};

const dark: Theme = {
  ...base,
  graphArea,
  // graphInput,
  optionsSelector,
  tabContainer,
};

export default dark;
