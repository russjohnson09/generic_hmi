var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/js/entry.js',
    output: {
        path: './',
        publicPath: './',
        filename: 'build/bundle.js'
    },
    devtool: 'eval',
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'source-map'
            }
        ],
        loaders: [
            {
                test: /\.scss$/,
                include: /src/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded'
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'img'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [
                    'react-hot',
                    'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loaders: ['file?name=fonts/[hash].[ext]']
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline'
            }
        ]
    },
    plugins: [
        getEnvironmentVariablesPlugin(),
        new webpack.DefinePlugin({
            'process.env.BROKER_PORT': JSON.stringify(process.env.NODE_ENV || '9001')
        }),
    ],
    "devServer": {
        "historyApiFallback": true,
        "watchOptions": { "aggregateTimeout": 300, "poll": 1000 },
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
};

function getEnvironmentVariablesPlugin () {
    var value = process.env.NODE_ENV !== 'production' ? true : false
    const env = {__dev__: JSON.stringify(value)}
    return new webpack.DefinePlugin(env)
}
function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}
