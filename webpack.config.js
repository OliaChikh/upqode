const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {

  entry: './scripts/index.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "postcss-loader"
                },
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass")
                    }
                }
            ]
        }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }) 
  ],
  mode: 'development'
};