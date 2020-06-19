// eslint-disable-next-line import/no-extraneous-dependencies
import { GraphvizOptions } from 'd3-graphviz';
import { TOGGLE_BOOLEAN_OPTION } from '../actions';
import { initialState } from '../state';

function options(
  state: GraphvizOptions = initialState.graphOptions,
  action: { type: string; option: keyof GraphvizOptions }
): GraphvizOptions {
  switch (action.type) {
    case TOGGLE_BOOLEAN_OPTION:
      return {
        ...state,
        [action.option]: !state[action.option],
      };
    default:
      return state;
  }
}

export default options;
