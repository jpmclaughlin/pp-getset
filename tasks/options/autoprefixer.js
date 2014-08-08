// https://github.com/nDmitry/grunt-autoprefixer
module.exports = {
  build: {
    options: {
      browsers: ['last 2 versions', '> 1%']
    },
    files: [
      {
        src : ['source/**/*.css'],
        cwd : 'css',
        dest : 'source/css',
        expand : true
      }
    ]
  }
}