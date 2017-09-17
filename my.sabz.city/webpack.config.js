module.exports = {
    entry: {
        polyfills: 'polyfills.js',
        index: 'index.js'
    },
    output: {
        path: __dirname,
        filename: '[name].bundle.js'
    },
    resolve: {
        modules: [__dirname, "node_modules"],
    },
    module: {
        rules: [
            {
                test: /\.(js|css|html)$/,
                use: "remove-comments-loader"
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        removeComments: true,
                        collapseWhitespace: true,
                        minifyCSS: true
                    }
                }]
            }
        ]
    }
}