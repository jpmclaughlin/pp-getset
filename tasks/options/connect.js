module.exports = {
  server: {
    options: {
      port: 9001,
      protocol: 'http',
      hostname: 'localhost',
      base: './public/',  // '.' operates from the root of your Gruntfile, otherwise -> 'Users/user-name/www-directory/website-directory'
      keepalive: false, // set to false to work side by side w/watch task.
      livereload: true,
      open: true
    }
  }
}