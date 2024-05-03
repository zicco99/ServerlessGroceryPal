const { execSync } = require('child_process');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = function (options, webpack) {
  const lazyImports = [
    'aws-sdk',
    'aws-lambda',
    '@nestjs/websockets',
    '@nestjs/microservices',
    '@nestjs/websockets/socket-module',
    '@nestjs/microservices/microservices-module',
  ];

  execSync('npx prisma generate', { stdio: 'inherit' });

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

