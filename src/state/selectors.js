import * as R from 'ramda';

export const selectApp = R.prop('app');
export const selectTheme = R.compose(R.prop('theme'), selectApp);
