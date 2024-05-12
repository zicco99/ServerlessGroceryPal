import path from 'path';
import nodeExternals from 'webpack-node-externals';
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'production',
    entry: './src/lambda.ts',
    target: 'node',
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: ['node_modules', 'prisma', 'src'],
      },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: path.resolve(__dirname, 'tsconfig.json'),
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        ],
    },
    output: {
        filename: '[name]/index.js',
        path: path.resolve(__dirname, 'build'),
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        libraryTarget: 'commonjs2',
    },
    devtool: 'source-map',
};

