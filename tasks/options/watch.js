module.exports = {
//  options: {
//    livereload: true,
//  },
//  scripts: {
//    files: ['js/*.js'],
//    tasks: ['jshint', 'concat', 'uglify'],
//    options: {
//      spawn: false,
//    }
//  },
//  css: {
//    files: ['css/*.scss'],
//    tasks: ['sass', 'autoprefixer', 'cssmin'],
//    options: {
//      spawn: false,
//    }
//  },
//  images: {
//    files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
//    tasks: ['imagemin'],
//    options: {
//      spawn: false,
//    }
//  },
//  html:{
//    files: ['./**/*.html'],
//    tasks: [],
//    options: {
//      spawn: false
//    }
//  }
  scss: {
    files: ['source/**/*.scss'],
    tasks: 'scss'
  },
  html: {
   files: ['source/**/*.hbs'],
   tasks: ['assemble'],
   options: {
     spawn: false
   }
  },
//      js: {
//        files: ['source/**/*.js'],
//        tasks: 'js'
//      },
  livereload: {
    options: {
      livereload: true
    },
    files: [
      'public/**/*.html',
      'public/css/{,*/}*.css',
      'public/js/{,*/}*.js'
    ]
  }
}