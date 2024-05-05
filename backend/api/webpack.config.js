const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = function (options) {
  const lazyImports = [
    '@nestjs/websockets',
    '@nestjs/microservices',
    '@nestjs/websockets/socket-module',
    '@nestjs/microservices/microservices-module',
  ];

  return {
    ...options,
    entry: ['./lambda.ts'],
    externals: [],
    output: {
      ...options.output,
      libraryTarget: 'commonjs2',
    },
    plugins: [
      ...options.plugins,
      new webpack.IgnorePlugin({
        checkResource(resource) {
          return lazyImports.includes(resource);
        },
      }),
      new CopyPlugin({
        patterns: [
          {
            from: 'prisma/client', 
            to: 'prisma/client',
          },
        ],
      }),
    ],
  };
};

