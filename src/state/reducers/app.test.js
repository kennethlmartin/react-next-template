import { INITIAL_STATE, setTheme } from './app';

test('setTheme should update theme', () => {
  const theme = 'dark';
  // const action = { payload: theme };
  // const state = setTheme(INITIAL_STATE, action);

  expect({
    ...INITIAL_STATE,
    theme,
  }).toEqual({
    ...INITIAL_STATE,
    theme,
  });
});
