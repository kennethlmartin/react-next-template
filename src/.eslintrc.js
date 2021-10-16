module.exports = {
  extends: [
    'archetype/configurations/react',
    'archetype/rules/plugin-jsdoc',
    'archetype/rules/plugin-prettier',
  ],
  overrides: [
    {
      extends: ['archetype/rules/plugin-typescript'],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  root: true,
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
};
