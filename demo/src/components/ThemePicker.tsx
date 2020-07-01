import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';
import { lighten } from 'polished';

const bgColor = theme('mode', {
  dark: lighten(0.25, '#282c34'),
});

const Button = styled.button`
  background-color: ${bgColor};
  :focus {
    outline: none;
  }
`;

const ThemePicker = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Button
        type="button"
        onClick={() =>
          theme === 'dark' ? setTheme('light') : setTheme('dark')
        }
      >
        {`${theme.charAt(0).toUpperCase()}${theme.slice(1)}`}
      </Button>
      {children}
    </ThemeProvider>
  );
};
export default ThemePicker;
