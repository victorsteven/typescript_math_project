module.exports = {
  entry: './js/app.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
  // Compile the typescript code before it is bundled and sent to the browser by webpack
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline: false
  }
};
