const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const _ = require('lodash');
const slsw = require('serverless-webpack');
require('source-map-support').install();

const rootDir = path.join(__dirname, '../');

const defaults = {
    entry: slsw.lib.entries,
    target: 'node',
    mode: 'none',
    externals: nodeExternals({
        whitelist: ['winston-cloudwatch']
    }),
    plugins: [],
    optimization: {
        nodeEnv: false,
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {},
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(rootDir, '.webpack'),
        filename: '[name].js',
    },
    module: {
        rules: [{
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {},
            },
        ],
    },
};


module.exports.defaults = defaults;

module.exports.merge = function merge(config) {
    return _.merge({}, defaults, config);
};