import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';

module.exports = {
    target: "node",
    mode: 'development',
    context: __dirname,
    entry: './lambda.ts',
    externals: ['_http_common', 'encoding'],
    devtool: 'inline-source-map',
    resolve: {
        modules: ['node_modules'],
        extensions: [ '.tsx', '.ts', '.js', '.json' ],
    },
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, '.webpack'),
        filename: 'main.js',
    },
    module: {
        noParse: /node_modules/,
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
            },
                
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: 'prisma',
                    to: 'prisma',
                }
            ],
        }),
    ],
};
