module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false,
    open: false,
    proxy: 'http://172.16.71.149:8080/familyTree'
  }
}
