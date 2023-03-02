{
  const { setLoaders } = require('../../node_modules/.pnpm/vite-plugin-ssr@0.4.89_vite@3.2.5/node_modules/vite-plugin-ssr/dist/cjs/node/plugin/plugins/importBuild/loadBuild.js');
  setLoaders({
    pageFiles: () => import('./pageFiles.js'),
    clientManifest: () => require('../client/manifest.json'),
    pluginManifest: () => require('../client/vite-plugin-ssr.json'),
  });
}
