module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'public/css/style.css': 'source/css/style.scss'
    }
  }    
}