var gulp = require ('gulp');

var paths = {
  'npm'     : './node_modules/',
  'js'      : './public/assets/js/lib/',
  'css'     : './public/assets/css/'
};

gulp.task('styles', function()
  {
    return gulp.src([
      paths.npm+'bootstrap/dist/css/bootstrap.min.css'
    ])
    .pipe(gulp.dest(paths.css));
  }
);

gulp.task('scripts', function(){
  return gulp.src([
    paths.npm+'bootstrap/dist/js/bootstrap.min.js',
    paths.npm+'angular/angular.min.js',
    paths.npm+'angular-route/angular-route.min.js',
    ])
    .pipe(gulp.dest(paths.js));
});

gulp.task('watch', function(){
  gulp.watch(paths.resources+'sass/*.scss',['styles']);
  gulp.watch(paths.resources+'js/*.js',['scripts']);
});

gulp.task('default', ['styles', 'scripts']);