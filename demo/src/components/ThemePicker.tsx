import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { getProperty } from '../themes';

const background = getProperty('backgroundColor');
const textColor = getProperty('textColor');

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${background};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Button = styled.button`
  background-color: ${background};
  color: ${textColor};
  position: absolute;
  :focus {
    outline: none;
  }
`;

const ThemePicker = ({
  children,
  themes,
}: {
  children: React.ReactNode;
  themes: [string, ...string[]];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = themes[currentIndex];

  const cycleThemes = () => setCurrentIndex((currentIndex + 1) % themes.length);

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <GlobalStyle />
      <Container>
        <Button type="button" onClick={cycleThemes}>
          {`${theme.charAt(0).toUpperCase()}${theme.slice(1)}`}
        </Button>
      </Container>
      {children}
    </ThemeProvider>
  );
};

export default ThemePicker;
