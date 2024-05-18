const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    target: 'node',
    mode: 'production',
    context: __dirname,
    entry: './lambda.ts',
    stats: 'minimal',
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: './tsconfig.json'
            })
        ],
        modules: ['node_modules'],
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "diagnostics_channel": require.resolve("diagnostics_channel"),
            "process": require.resolve("process/browser"),
            "path": require.resolve("path-browserify")
        }
    },
    externals: [nodeExternals({
        allowlist: [
            'cheerio',
            'axios'
        ]
    })],
    devtool: false,
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', { targets: { node: 'current' } }],
                                '@babel/preset-typescript'
                            ],
                            plugins: [
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-proposal-object-rest-spread'
                            ]
                        }
                    }
                ],
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
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ]
};
