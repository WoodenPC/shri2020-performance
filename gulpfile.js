const gulp = require('gulp');
const purgecss = require('gulp-purgecss');
const cleanCss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const imgCompress  = require('imagemin-jpeg-recompress');

gulp.task('purgecss', () => {
  return gulp.src('css/**/*.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('build/css'))
});

gulp.task('compressImages', () => {
  return gulp.src('img/**/*')
    .pipe(imagemin([
      imgCompress({
        loops: 4,
        min: 70,
        max: 80,
        quality: 'high'
      }),
      imagemin.gifsicle(),
      imagemin.optipng({
        optimizationLevel: 5,
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('compressedImages'));
})