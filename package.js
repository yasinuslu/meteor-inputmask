// Give our package a description
Package.describe({
  summary: 'jQuery inputmask plugin'
});

// Tell Meteor what to do with our package at bundle time
Package.on_use(function(api) {

  // The api.use method allows us to depend on other
  // packages that ship with meteor or are in our project's
  // package directory
  api.use('jquery', 'client');


  // Add templates.html and client.js files ONLY on
  // the client
  api.add_files('inputmask/dist/jquery.inputmask.bundle.js', 'client');
});