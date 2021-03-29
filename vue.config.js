module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/oui-front/'
    : '/',
  outputDir: 'oui-front',
  devServer: {
    port: 3000
  },

  pwa: {
    name: 'OUI groups finder',
    manifestPath: 'manifest.json'
  }
}
