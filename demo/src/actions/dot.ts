import { SET_DOT } from './types';

const setDot = (dot: string): { type: string; dot: string } => ({
  type: SET_DOT,
  dot,
});

export default setDot;
