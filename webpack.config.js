var webpack = require('webpack');
var path = require('path');
module.exports = {
    context:__dirname+'/src',
    entry:[
      'webpack-dev-server/client?http://localhost:8080',
      './js/index.js'
    ],
    module:{
        loaders:[
            {
                test:/\.js?$/,
                exclude:/(node_modules)/,
                loader:'babel-loader',
                query:{
                    presets:['react','es2015']
                }
            },
            {
              test: /\.css$/,
              loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            },
        ]
    },
    output:{
        path:__dirname+'/src/',
        filename:'bundle.js',
        publicPath: "http://localhost:8080/src/"
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
};
