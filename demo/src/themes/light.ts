import GraphvizTheme from './graphviz';

const colors = {
  black: '#000000',
  white: '#ffffff',
  green: 'green',
  red: 'red',
  darkestGrey: 'grey',
  darkGrey: 'darkgrey',
  lightGrey: 'lightgrey',
};

const light: GraphvizTheme = {
  backgroundColor: colors.white,
  textColor: colors.black,
  hoverColor: colors.darkestGrey,
  graphInput: {
    autoUpdate: {
      backgroundColor: colors.green,
      inactive: {
        backgroundColor: colors.red,
      },
    },
    updateButton: {
      backgroundColor: colors.lightGrey,
    },
  },
  optionsSelector: {
    input: {
      backgroundColor: colors.lightGrey,
    },
  },
  tabContainer: {
    backgroundColor: colors.darkGrey,
    inactiveTabs: {
      backgroundColor: colors.lightGrey,
    },
  },
};

export default light;
