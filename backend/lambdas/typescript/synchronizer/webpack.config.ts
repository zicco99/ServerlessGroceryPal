import { Configuration } from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';

const webpackConfig: Configuration = {
    entry: './src/lambda.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'commonjs2',
    },
    target: 'node',
    devtool: 'source-map',
    externals: [],
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/prisma/client',
                    to: 'prisma/client',
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};

export default webpackConfig;
