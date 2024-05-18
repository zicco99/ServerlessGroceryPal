const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    target: 'node',
    mode: 'production',
    context: __dirname,
    entry: './lambda.ts',
    stats: 'minimal',
    externals: [nodeExternals({
        allowlist: ['cheerio', 'axios']
    })],
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: './tsconfig.json'
            })
        ],
        modules: ['node_modules']
    },
    devtool: false,
    output: {
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, 'dist'), // Using path.resolve for clarity
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                keep_fnames: true // Necessary to keep function names for AWS Lambda
            }
        })],
        usedExports: true // Enable tree shaking
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: './src/**/*.{ts,tsx,js,jsx}'
            }
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: 'prisma',
                    to: 'prisma'
                }
            ]
        }),
    ]
};
