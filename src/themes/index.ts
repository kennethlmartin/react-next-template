export type ThemeMode = 'light' | 'dark';

export interface Theme {
  colors: {
    [key: number]: string;
  };
}

export interface ThemeProps {
  theme: Theme;
}

export { dark } from './dark';
export { light } from './light';
