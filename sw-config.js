var packageJson = require('./package.json')
module.exports = {
  importWorkboxFrom: 'cdn',
  cacheId: packageJson.name,
  clientsClaim: true,
  runtimeCaching: [
    {
      urlPattern: new RegExp('choutserver-live.herokuapp.com'),
      handler: 'networkFirst',
    },
  ],
  navigateFallback: 'build/index.html',
  navigateFallbackBlacklist: [
    // Exclude URLs starting with /_, as they're likely an API call
    new RegExp('^/_'),
    // Exclude URLs containing a dot, as they're likely a resource in
    // public/ and not a SPA route
    new RegExp('/[^/]+\\.[^/]+$'),
  ],
  swDest: 'build/service-worker.js',
  globDirectory: 'build/',
  globPatterns: ['**/*.{js,css,html}'],
  globStrict: false,
}
