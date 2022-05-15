'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'scss',
    },
  });

  app.import('node_modules/bootstrap-icons/font/bootstrap-icons.css');

  return app.toTree();
};
