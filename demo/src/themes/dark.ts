import { lighten } from 'polished';
import { Theme } from './theme';

const base = {
  backgroundColor: '#282c34',
  textColor: '#abb2bf',
};

const graphArea = {
  backgroundColor: '#4b5263',
};

const graphInput = {
  backgroundColor: base.backgroundColor,
  textColor: base.textColor,
  hoverColor: '#61afef',
};

const optionsSelector = {
  backgroundColor: base.backgroundColor,
  textColor: base.textColor,
  input: {
    backgroundColor: lighten(0.4, base.backgroundColor),
    textColor: 'black',
  },
};

const tabContainer = {
  backgroundColor: lighten(0.25, base.backgroundColor),
  textColor: 'black',
  hoverColor: '#61afef',
  inactiveTabs: {
    backgroundColor: lighten(0.4, base.backgroundColor),
    textColor: 'black',
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
