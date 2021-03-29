module.exports = {
  publicPath: './',
  outputDir: 'oui-front',
  devServer: {
    port: 3000
  },

  pwa: {
    name: 'OUI groups finder',
    msTileColor: '#3f51b5',
    themeColor: '#3f51b5',
    appleMobileWebCache: 'Yes',
    manifestOptions: {
      name: 'OUI groups finder',
      shortName: 'OUIGroups',
      display: 'standalone',
      backgroundColor: '#fff',
      orientation: 'portrait',
      dir: 'ltr',
      lang: 'en-US',
      description: 'Open University of Israel students community'
    }
  }
}
