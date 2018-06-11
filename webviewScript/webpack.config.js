module.exports = {
  entry: [
    __dirname + '/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'webviewScript.bundle.js',
    library: 'webviewScript'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['airbnb']
          }
        }
      }
    ]
  },
  node: {
    fs: 'empty',
  },
};