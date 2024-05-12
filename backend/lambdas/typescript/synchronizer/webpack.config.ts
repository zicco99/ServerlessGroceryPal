import path from 'path';
import nodeExternals from 'webpack-node-externals';
import CopyPlugin from 'copy-webpack-plugin';

module.exports = {
    mode: 'production',
    entry: './lambda.js', // Assuming the TypeScript files are compiled to JavaScript in the `dist` directory
    target: 'node',
    externals: [nodeExternals()],
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: './prisma/client', 
                    to: 'prisma/client',
                },
            ],
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [path.resolve(__dirname, 'node_modules')], // Adjust as needed
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
        filename: 'index.js', // Adjust as needed
        path: path.resolve(__dirname, 'dist', 'build'),
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        libraryTarget: 'commonjs2',
    },
    devtool: 'source-map',
};
