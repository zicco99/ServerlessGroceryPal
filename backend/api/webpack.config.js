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

  lazyImports.push('prisma/client');

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
          // Ignoring non-essential modules for Lambda deployment
          return lazyImports.includes(resource);
        },
      }),
      // Copy Prisma client folder to output directory
      new CopyPlugin({
        patterns: [
          {
            from: 'node_modules/prisma/client', // Adjust the path as needed
            to: 'prisma/client', // Adjust the destination path as needed
          },
        ],
      }),
    ],
  };
};

