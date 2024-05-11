import * as webpack from 'webpack';
import * as CopyPlugin from 'copy-webpack-plugin';

module.exports = function (options: webpack.Configuration): webpack.Configuration {
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
                options: {},
            })
        ],
        optimization: {
            runtimeChunk: true,
            splitChunks: {
                chunks: 'all'
            }
        }
    };
};