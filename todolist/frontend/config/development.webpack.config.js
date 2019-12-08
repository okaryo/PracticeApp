const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, '/../../frontend'),
  entry: {
    index: './src/javascript/*'
  },
  output: {
    path: path.join(__dirname, '../public/dist'),
    filename: 'index.js',
    publicPath: 'http://localhost:8080/assets/'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {loader: 'postcss-loader', options: { autoprefixer: true } },
          'import-glob-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass']
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
};