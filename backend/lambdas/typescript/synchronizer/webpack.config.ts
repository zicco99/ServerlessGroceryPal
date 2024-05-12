import path from 'path';
import nodeExternals from 'webpack-node-externals';
import CopyPlugin from "copy-webpack-plugin";


module.exports = {
    mode: 'production',
    entry: './src/lambda.ts',
    target: 'node',
    externals: [nodeExternals()],
    plugin : [
        new CopyPlugin({
            patterns: [
                {
                    from: 'prisma/client', 
                    to: 'prisma/client',
                },
            ],
        })
    ],
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
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name]/index.js',
        path: path.resolve(__dirname, 'build'),
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        libraryTarget: 'commonjs2',
    },
    devtool: 'source-map',
};

