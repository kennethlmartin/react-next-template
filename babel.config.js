module.exports = function (api) {
  api.cache(true);

  return {
    babelrcRoots: ['.'],
    plugins: ['@emotion'],
    presets: [
      'next/babel',
      [
        '@babel/preset-react',
        { importSource: '@emotion/react', runtime: 'automatic' },
      ],
    ],
  };
};
