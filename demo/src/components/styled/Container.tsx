import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const StyledContainer = styled(Container)`
    background: ${(props) => props.theme.bg || "papayawhip"}
`;