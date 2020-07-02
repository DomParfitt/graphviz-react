import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';
import { lighten } from 'polished';

const buttonBgColor = theme('mode', {
  dark: lighten(0.25, '#282c34'),
});

const Button = styled.button`
  background-color: ${buttonBgColor};
  position: absolute;
  :focus {
    outline: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const bgColor = theme('mode', {
  dark: '#282c34',
});

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${bgColor};
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
