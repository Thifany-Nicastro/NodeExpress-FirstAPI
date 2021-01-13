const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    target: 'node',
    plugins: [
        new NodemonPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
        publicPath: '/'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
    resolve: {
        fallback: {
            stream: false,
            util: false,
            path: false,
            url: false,
            querystring: false,
            fs: false,
            http: false,
            net: false,
            crypto: false,
            zlib: false
        }
    },
};