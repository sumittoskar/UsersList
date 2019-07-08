const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "#cheap-module-source-map",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options : {
                            importLoaders: 1,
                            modules: true,
                            localsConvention: "asIs",
                            import: true/*,
                            localIdentName : "[name]__[local]__[hash:base64:5]"*/
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: __dirname + '/src/index.html',
          filename: "index.html",
          inject: "body"
        })
    ]
};