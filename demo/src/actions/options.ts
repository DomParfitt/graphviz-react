import { TOGGLE_BOOLEAN_OPTION } from './types';

const toggleBooleanOption = (
  option: string
): { type: string; option: string } => ({
  type: TOGGLE_BOOLEAN_OPTION,
  option,
});

export default toggleBooleanOption;
