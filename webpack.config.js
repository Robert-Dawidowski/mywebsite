const path = require('path');
const entry = [
    path.join(__dirname, 'src/canvas.js'),
    path.join(__dirname, 'src/index.js'),
];


module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/, //wyklucza ten folder
                loader: 'babel-loader', //co pomaga czytac
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(jpg|jpeg|png|woff|woff2|eot|otf|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: 8080
    },
};
