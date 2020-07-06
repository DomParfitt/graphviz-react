import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { getThemeProperties } from '../themes';

const { backgroundColor, textColor } = getThemeProperties();

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${backgroundColor};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Button = styled.button`
  background-color: ${backgroundColor};
  color: ${textColor};
  position: absolute;
  border: 1px solid ${textColor};
  :focus {
    outline: none;
  }
`;

const ThemePicker = ({
  children,
  themes,
}: {
  children: React.ReactNode;
  themes: string[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = themes[currentIndex];

  const cycleThemes = () => setCurrentIndex((currentIndex + 1) % themes.length);

  return themes.length === 0 ? (
    <>{children}</>
  ) : (
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
