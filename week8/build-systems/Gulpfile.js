var gulp = require('gulp'),
    kathmandu = require('gulp-concat'),
    betty = require('gulp-uglify'),
    captainUnderpants = require('gulp-clean-css'),
    scubaSteve = require('gulp-imagemin');

// We have to register 'tasks' for gulp

gulp.task('css-mini', ()=>{
  // We want to take all of our CSS files, concat them together, and then minify them
  
  gulp.src('./public/css/src/**/*')
    .pipe( kathmandu('build.min.css') )
    .pipe( captainUnderpants() )
    .pipe( gulp.dest('./public/css/dist') )
  
});


gulp.task('js-mini', ()=>{
  // We want to take all of our JS files, concat them together, and then minify them
  
  gulp.src('./public/js/src/**/*')
    .pipe( kathmandu('build.min.js') )
    .pipe( betty() )
    .pipe( gulp.dest('./public/js/dist') )
  
});

// run an array of tasks as part of another task
gulp.task('build', ['css-mini', 'js-mini'], ()=>{
  console.log('Built complete!');
})

gulp.task('default', ()=>{
  // can be run just by typing 'gulp' in the command line
  console.log('DEFAULT');
})


