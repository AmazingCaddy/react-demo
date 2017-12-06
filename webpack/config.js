var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractSass = new ExtractTextPlugin({
  filename: "bundle.css",
  disable: process.env.NODE_ENV === "development"
});

var rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader'
    }]
  },
  {
    test: /\.css$/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" }
    ]
  },
  {
    test: /\.scss$/,
    use: extractSass.extract({
      use: [
        {
          loader: "css-loader",
          options: {
            alias: {
              "../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
            }
          }
        },
        {
          loader: "sass-loader",
          options: {
            includePaths: [
              path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")
            ]
          }
        }
      ],
      // use style-loader in development
      fallback: "style-loader"
    })
  },
  {
    test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
    use: [{
      loader: "file-loader"
    }]
  }
];

module.exports = {
  rules: rules,
  extractSass: extractSass
}