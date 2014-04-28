Package.describe({
  summary: "Behavior Driven Development for Meteor"
});

Package.on_use(function (api, where) {
  api.add_files('trajectory.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('trajectory');

  api.add_files('trajectory_tests.js', ['client', 'server']);
});
