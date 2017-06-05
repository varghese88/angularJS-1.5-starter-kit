var webpack = require('webpack');
var path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        './src/app.js'
    ],
    // target:'node',
    // externals: [nodeExternals({
    //     // this WILL include `jquery` and `webpack/hot/dev-server` in the bundle, as well as `lodash/*` 
    //     whitelist: ['require']
    // })],
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
        hotUpdateMainFilename: 'hot/[hash].hot-update.json'
    },
    resolve: {
        extensions: ['.js','.scss']
    },
    watch:true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ['node_modules'],
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    }, 
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, 
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
 