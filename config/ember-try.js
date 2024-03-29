'use strict';

// eslint-disable-next-line node/no-unsupported-features/es-syntax
module.exports = async function () {
  return {
    useYarn: true,
    scenarios: [
      {
        name: 'ember-1.13',
        bower: {
          dependencies: {
            ember: '1.13.13',
          },
        },
        npm: {
          devDependencies: {
            'ember-source': null,
          },
        },
      },
      {
        name: 'ember-lts-2.4',
        bower: {
          dependencies: {
            ember: 'components/ember#lts-2-4',
          },
          resolutions: {
            ember: 'lts-2-4',
          },
        },
        npm: {
          devDependencies: {
            'ember-source': null,
          },
        },
      },
      {
        name: 'ember-lts-2.8',
        bower: {
          dependencies: {
            ember: 'components/ember#lts-2-8',
          },
          resolutions: {
            ember: 'lts-2-8',
          },
        },
        npm: {
          devDependencies: {
            'ember-source': null,
          },
        },
      },
      {
        name: 'ember-lts-2.12',
        npm: {
          devDependencies: {
            'ember-source': '~2.12.0',
          },
        },
      },
      {
        name: 'ember-lts-2.16',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'jquery-integration': true,
          }),
        },
        npm: {
          devDependencies: {
            '@ember/jquery': '^0.5.1',
            'ember-source': '~2.16.0',
          },
        },
      },
      {
        name: 'ember-lts-2.18',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'jquery-integration': true,
          }),
        },
        npm: {
          devDependencies: {
            '@ember/jquery': '^0.5.1',
            'ember-source': '~2.18.0',
          },
        },
      },
      {
        name: 'ember-lts-3.4',
        npm: {
          devDependencies: {
            'ember-source': '~3.4.0',
          },
        },
      },
      {
        name: 'ember-lts-3.12',
        npm: {
          devDependencies: {
            'ember-source': '~3.12.0',
          },
        },
      },
      {
        name: 'ember-lts-3.16',
        npm: {
          devDependencies: {
            'ember-source': '~3.16.0',
          },
        },
      },
      // The default `.travis.yml` runs this scenario via `yarn test`,
      // not via `ember try`. It's still included here so that running
      // `ember try:each` manually or from a customized CI config will run it
      // along with all the other scenarios.
      {
        name: 'ember-default',
        npm: {
          devDependencies: {},
        },
      },
      {
        name: 'ember-default-with-jquery',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'jquery-integration': true,
          }),
        },
        npm: {
          devDependencies: {
            '@ember/jquery': '^0.5.1',
          },
        },
      },
      {
        name: 'ember-classic',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'application-template-wrapper': true,
            'default-async-observers': false,
            'template-only-glimmer-components': false,
          }),
        },
        npm: {
          ember: {
            edition: 'classic',
          },
        },
      },
    ],
  };
};
