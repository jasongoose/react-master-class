import type { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  main: '#111',
  contrast: 'whiteSmoke',
  mainBlur: 'rgba(17,17,17,0.8)',
  contrastBlur: 'rgba(245,245,245,0.8)'
};

export const lightTheme: DefaultTheme = {
  main: 'whiteSmoke',
  contrast: '#111',
  mainBlur: 'rgba(245,245,245,0.8)',
  contrastBlur: 'rgba(17,17,17,0.8)'
};
