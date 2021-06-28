const gulp = require('gulp');

const { src, series, parellel, dest, watch } = require('gulp');

const nunjucksRender = require('gulp-nunjucks-render');

const sass = require('gulp-sass');


const components = [
    'components/global-header/'
]


gulp.task('buildHtml', function () {


    return gulp.src('components/src/**/*.njk')
      .pipe(nunjucksRender({
        path: ['_templates/','components/src/','pages/'] // String or Array
      }))
      .pipe(gulp.dest('components/dist/'));
      
  });

gulp.task('styles', () => {
    return gulp.src('components/src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('components/dist/'));
});

gulp.task('bundleStyle', () => {
    return gulp.src('bundles/src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('bundles/dist/'));
});


gulp.task('watch', () => {
    gulp.watch('components/src/**/*.scss', (done) => {
        gulp.series(['styles','bundleStyle'])(done);
    });

    gulp.watch('components/src/**/*.njk', (done) => {
        gulp.series(['buildHtml'])(done);
    });

    gulp.watch('_templates/*.njk', (done) => {
        gulp.series(['buildHtml'])(done);
    });
});



