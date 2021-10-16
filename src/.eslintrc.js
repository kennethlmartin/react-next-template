module.exports = {
  extends: [
    'archetype/configurations/react',
    'archetype/rules/plugin-jsdoc',
    'archetype/rules/plugin-prettier',
  ],
  parser: '@typescript-eslint/parser',
  root: true,
  rules: {
    // TODO: Move to eslint-config-archetype
    'import/order': [
      'error',
      {
        'groups': [
          'type',
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    // TODO: Move to eslint-config-archetype
    'react/jsx-fragments': ['error', 'syntax'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
};
