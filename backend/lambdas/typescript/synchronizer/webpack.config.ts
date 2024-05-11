const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = function (options) {
  const lazyImports = [
    'aws-lambda',
    'aws-sdk',
    'axios',
    'cheerio',
    'prisma',
  ];

  return {
    ...options,
    entry: ['./src/lambda.ts'],
    externals: [],
    output: {
      ...options.output,
      libraryTarget: 'commonjs2',
    },
    plugins: [
      ...(options.plugins || []), 
      new webpack.IgnorePlugin({
        checkResource(resource: string) {
          return lazyImports.includes(resource);
        },
      }),
      new CopyPlugin({
        patterns: [
          {
            from: 'src/prisma/client', 
            to: 'prisma/client',
          },
        ],
      })
    ],
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        defaultRules: [
            '...',
        ],
    }
  };
};

