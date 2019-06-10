module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false,
    open: false,
    proxy: 'http://localhost:3000'
  }
}
