const prettierConfigArchetype = require('prettier-config-archetype');

module.exports = {
  ...prettierConfigArchetype,
  parser: 'babel-ts',
};
