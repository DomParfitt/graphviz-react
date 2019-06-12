import styled from 'styled-components';

export const TextArea = styled.textarea.attrs({
    rows: 10
})`
    background: ${(props) => props.theme.bg || "papayawhip"}
`;