const IgnorePlugin = require('webpack');

// Serverless webpack config that will bundle the Lambda function

export default function (options) {
  const lazyImports = [
    '@nestjs/websockets',
    '@nestjs/microservices',
    '@nestjs/websockets/socket-module',
    '@nestjs/microservices/microservices-module'
  ];

  return {
    ...options,
    entry: ['./main.ts'],
    externals: [],
    output: {
      ...options.output,
      libraryTarget: 'commonjs2',
    },
    plugins: [
      ...options.plugins,
      new IgnorePlugin({
        checkResource(resource) {
          return lazyImports.includes(resource);
        },
      })
    ],
  };
};