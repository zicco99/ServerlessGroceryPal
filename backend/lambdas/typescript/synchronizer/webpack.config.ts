import path from 'path';
import { sync } from 'glob';
import nodeExternals from 'webpack-node-externals';

const entryArray = sync('./src/**/index.ts');

module.exports = {
    entry: entryArray.reduce((acc, item) => {
        const name = path.dirname(item.replace('./src/', '')).replace('/index', '');
        return { ...acc, [name]: item };
    }, {}),
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
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

