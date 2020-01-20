const path = require("path");
module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist/static"),
    },
    module: {
        rules: [
            {
                test:/\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                      presets: ["@babel/preset-env"],
                      plugins: ["@babel/plugin-transform-runtime"]
                    },
                }
            }
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        open: true,
        openPage: "tt.html",
        compress: true,
        port: 80,
        publicPath: "/static/",
        host: "www.ldoll.com",
        historyApiFallback: true,
        proxy: {
            "/api": {
              target: "http://www.ldoll.com:3000",
              pathRewrite: {"^/api" : ""}
            }
          }
    }
};