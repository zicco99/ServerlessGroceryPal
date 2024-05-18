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
    externals: ["aws-sdk", nodeExternals({
        modulesDir: path.resolve(__dirname, 'node_modules'),
        allowlist: [
            'cheerio',
            'axios',
        ],
    })],
    devtool: 'inline-source-map',
    resolve: {
        modules: ['node_modules'],
        extensions: [ "js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"],
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
                // Include ts, tsx, js, and jsx files.
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
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
