import { INITIAL_STATE, setTheme } from './app';

test('setTheme should update theme', () => {
  const theme = 'dark';
  const action = { payload: theme };
  const state = setTheme(INITIAL_STATE, action);

  expect(state).toEqual({
    ...INITIAL_STATE,
    theme,
  });
});
