module.exports = (options, webpack) => {
    const lazyImports = [
      '@nestjs/microservices/microservices-module',
      '@nestjs/websockets/socket-module',
      '@nestjs/microservices',
      '@nestjs/platform-express',
      '@nestjs/platform-socket.io',
      '@nestjs/websockets',
      '@nestjs/typeorm',
    ];
  
    return {
      ...options,
      externals: [],
      output: {
        ...options.output,
        libraryTarget: 'commonjs2',
      },
      plugins: [
        ...options.plugins,
        new webpack.IgnorePlugin({
          checkResource(resource) {
            if (lazyImports.includes(resource)) {
              try {
                require.resolve(resource);
              } catch (err) {
                return true;
              }
            }
            return false;
          },
        }),
      ],
    };
  };