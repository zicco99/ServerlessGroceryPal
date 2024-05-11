import * as webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';

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
            })
        ],
        optimization: {
            runtimeChunk: true,
            splitChunks: {
                chunks: 'all'
            }
        },
        resolve: {
            // Add '.ts' as a resolvable extension.
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                // TypeScript files
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                // CSS files
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        }
    };
};
