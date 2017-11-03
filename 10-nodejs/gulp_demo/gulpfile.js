var gulp = require('gulp')
var uglify = require('gulp-uglify')

gulp.task('spin', function() {
  console.log('spinning like a cat')
})

gulp.task('minify', function() {
  gulp.src('app.js')
    .pipe( uglify() )
    .pipe( gulp.dest('out') )
})