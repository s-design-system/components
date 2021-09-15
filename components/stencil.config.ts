import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'sdds-components',
  globalScript: 'src/global.ts',
  globalStyle: 'src/global/global-sdds.css',
  enableCache: false,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: '../.build/theming.js', dest: './theming.js' },
        { src: 'helpers/core.js', dest: '../core.js' }
      ]
    },
    {
      type: 'dist-custom-elements-bundle'
    },
    {
      type: 'www',
      dir: '.www',
      serviceWorker: null // disable service workers
    },
    {
      type: 'docs-json',
      file: 'dist/collection/custom-elements.json'
    },
    { type: 'docs-readme' }
  ],
  testing: {
    testPathIgnorePatterns: ['/node_modules/', 'global.spec']
  },
  plugins: [
    sass({
      includePaths: ['node_modules']
    })
  ]
};
