const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/lambda.ts', // Update entry point to lambda.ts
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'commonjs2',
    },
    target: 'node',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    // Work around "Error: Can't resolve 'pg-native'"
    plugins: [
        new webpack.IgnorePlugin(/^pg-native$/)
    ],
};
