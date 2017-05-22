var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'source-map'; //enables source map
    }
    
    return false; 
}

module.exports = {
    entry: {
        main: './src/App.js'
    },
    output: {
        filename: './public/main.js'
    },
    devtool: getDevTool(),
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
};