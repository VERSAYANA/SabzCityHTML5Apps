const path = require('path');

const config = {
    entry: {
        index: './index.js',
        SabzCity: '/components/app-sabz-city/app-sabz-city.js',
        MySabzCity: '/components/app-my-sabz-city/app-my-sabz-city.js',
        ShopSabzCity: '/components/app-shop-sabz-city/app-shop-sabz-city.js'
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