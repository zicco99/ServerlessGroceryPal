const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    target: "node",
    mode: 'production',
    context: __dirname,
    entry: './lambda.ts',
    externals: ['aws-sdk', nodeExternals()],
    devtool: 'inline-source-map',
    resolve: {
        modules: ['node_modules'],
        extensions: [ '.tsx', '.ts', '.js', '.json' ],
    },
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        noParse: /node_modules/,
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, '.webpack.config.js'),
                ]
                
            }   
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
