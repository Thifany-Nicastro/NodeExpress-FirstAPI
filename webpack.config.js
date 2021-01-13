const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
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