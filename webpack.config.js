module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query:
        {
            presets: ['es2015', 'react']
        }
      }
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // },
      // {
      //   test: /\.svg$|\.ttf?|\.woff$|\.woff2|\.eof|\.eot/,
      //   loader: 'file-loader'
      // },
      // {
      //   test: /\.json$/,
      //   loader: 'json-loader'
      // }
    ]
  }
}