const path = require('path');

const config = {
    entry: {
        polyfills: '/components/SabzCityElements/index.html-suggestion/polyfills.js',
        index: '/components/SabzCityElements/index.html-suggestion/index.js',
        sabzcity: '/components/app-sabz-city/app-sabz-city.js',
        mysabzcity: '/components/app-my-sabz-city/app-my-sabz-city.js',
        shopsabzcity: '/components/app-shop-sabz-city/app-shop-sabz-city.js'
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