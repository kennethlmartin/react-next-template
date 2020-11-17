module.exports = {
  extends: [
    'archetype/configurations/react',
    'archetype/rules/plugin-jsdoc',
    'archetype/rules/plugin-prettier',
  ],
  root: true,
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
};
