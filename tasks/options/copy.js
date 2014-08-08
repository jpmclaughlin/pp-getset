module.exports = {
  css: {
    files: [
      { expand: true, cwd: 'source/css', src: ['./**/*.css'], dest: 'public/css' }
    ]
  },
  js: {
    files: [
      { expand: true, cwd: 'source/js', src: ['./**/*.*'], dest: 'public/js' }
    ]
  },
  images: {
    files: [
      { expand: true, cwd: 'source/images', src: ['./**/*.*'], dest: 'public/images' }
    ]
  }
};