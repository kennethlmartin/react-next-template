import '@emotion/react';
import { Theme as AppTheme } from 'src/themes';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
