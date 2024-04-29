module.exports = function (options, webpack) {
    return {
      ...options,
      entry: ['./src/lambda.ts'],
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
      ],
    };
  };