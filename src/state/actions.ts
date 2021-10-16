import type { ThemeMode } from 'src/themes';

import { createAction } from '@reduxjs/toolkit';

export const themeSelected = createAction<ThemeMode>('theme/selected');
