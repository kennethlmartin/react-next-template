import '@emotion/react';
import type { Theme as AppTheme } from 'src/themes';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
