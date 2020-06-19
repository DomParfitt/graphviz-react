import { combineReducers } from 'redux';
import dot from './dot';
import options from './options';

const graphvizApp = combineReducers({
  dot,
  options,
});

export default graphvizApp;
