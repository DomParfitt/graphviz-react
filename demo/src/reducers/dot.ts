import { SET_DOT } from '../actions';
import { initialState } from '../state';

function dot(
  state: string = initialState.dot,
  action: { type: string; dot: string }
): string {
  switch (action.type) {
    case SET_DOT:
      return action.dot;
    default:
      return state;
  }
}

export default dot;
