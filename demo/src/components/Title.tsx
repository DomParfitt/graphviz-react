import styled from 'styled-components';
import { getThemeProperties } from '../themes';

const { textColor } = getThemeProperties();

const Title = styled.h1`
  color: ${textColor};
  font-weight: bold;
  text-align: center;
`;

export default Title;
