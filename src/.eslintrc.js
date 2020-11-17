module.exports = {
  extends: ['archetype/configurations/react', 'archetype/rules/plugin-jsdoc'],
  root: true,
  rules: {
    'react/jsx-no-literals': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
};
