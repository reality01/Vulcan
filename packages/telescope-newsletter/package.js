Package.describe({
  name: "telescope:newsletter",
  summary: "Telescope email newsletter package",
  version: "0.1.1",
  git: "https://github.com/TelescopeJS/telescope-newsletter.git"
});

Npm.depends({
  "html-to-text": "0.1.0"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'telescope:lib@0.3.0',
    'telescope:posts@0.1.2',
    'telescope:users@0.1.0',
    'telescope:settings@0.1.0',
    'aldeed:simple-schema@1.3.2',
    'iron:router@1.0.5',
    'miro:mailchimp@1.0.4',
    'tap:i18n@1.4.1',
    'fourseven:scss@2.1.1'
  ], ['client', 'server']);

  api.use([
    'jquery',
    'underscore',
    'templating',
    'telescope:messages@0.1.0',
    'mrt:cookies@0.3.0'
  ], 'client');

  api.use([
    'percolatestudio:synced-cron@1.1.0',
    'cmather:handlebars-server@0.2.0'
  ], ['server']);

  api.add_files([
    'package-tap.i18n',
    'lib/newsletter.js'
  ], ['client', 'server']);

  api.add_files([
    'lib/client/templates/newsletter_banner.html',
    'lib/client/templates/newsletter_banner.js',
    'lib/client/stylesheets/newsletter_banner.scss'
  ], ['client']);

  api.add_files([
    'lib/server/campaign.js',
    'lib/server/cron.js',
    'lib/server/mailchimp.js',
    'lib/server/routes.js',
    'lib/server/templates/emailDigest.handlebars',
    'lib/server/templates/emailDigestConfirmation.handlebars',
    'lib/server/templates/emailPostItem.handlebars'
  ], ['server']);

  api.add_files([
    "i18n/de.i18n.json",
    "i18n/en.i18n.json",
    "i18n/es.i18n.json",
    "i18n/fr.i18n.json",
    "i18n/it.i18n.json",
    "i18n/zh-CN.i18n.json",
  ], ["client", "server"]);

  api.export([
    'resetNewsletterSchedule'
  ]);
});