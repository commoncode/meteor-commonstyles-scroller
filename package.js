Package.describe({
  summary: "Full page scroll package at commonstyle.io."
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  
  api.add_files('lib/client.js', 'client');
});