const path = require('path');

const config = {
    entry: {
        polyfills: '/polyfills.js',
        index: '/index.js',
        // add app here
        sabzcity: '/app-sabz-city/app-sabz-city.js',
        mysabzcity: '/app-my-sabz-city/app-my-sabz-city.js',
        shopsabzcity: '/app-shop-sabz-city/app-shop-sabz-city.js'
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "es6-template-string"
            }
        ]
    }
}