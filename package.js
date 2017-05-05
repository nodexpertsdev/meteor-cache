Package.describe({
  name: 'nodexpert:meteor-cache',
  version: '0.0.1',
  summary: 'Meteor cache pacakge',
  git: 'https://github.com/nodexpertsdev/meteor-cache',
  documentation: 'README.md'
});

Npm.depends({
  'node-cache': '4.1.1'
});

Package.onUse((api) => {
  api.versionsFrom('METEOR@1.4.2');

  const packages = [
    'ecmascript',
    'es5-shim',
    'npm-bcrypt'
  ];

  api.use(packages);
  api.imply(packages);

  api.mainModule('server/index.js', 'server');
});
