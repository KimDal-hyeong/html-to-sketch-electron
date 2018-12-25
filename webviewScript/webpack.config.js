module.exports = {
  mode: 'production',
  entry: [
    __dirname + '/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'webviewScript.bundle.js',
    library: 'webviewScript'
  },
  node: {
    fs: 'empty',
  },
};
