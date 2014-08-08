module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'source/css/style.css': 'source/css/style.scss'
    }
  }    
}