module.exports = {
  options: {
    // assets: 'assets',
    // plugins: ['permalinks'],
    partials: ['source/partials/**/*.hbs', 'source/partials/**/*.md']
    //layout: ['source/layouts/layout.hbs'],
    // data: ['data/*.{json,yml}']
  },
  site: {
    src: ['source/pages/*.hbs'],
    dest: 'public/'
  }
}