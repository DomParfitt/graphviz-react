import styled from 'styled-components';
import { getProperty } from '../themes';

const textColor = getProperty('textColor');

const Title = styled.h1`
  color: ${textColor};
  font-weight: bold;
  text-align: center;
`;

export default Title;
