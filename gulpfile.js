const gulp = require('gulp');
const { src, series, parellel, dest, watch } = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');

const components = [
    'components/global-header/'
]


gulp.task('buildHtml', function () {

    return gulp.src('src/**/**/*.njk')
      .pipe(nunjucksRender({
        path: ['_templates/','src/components/','pages/', 'src/elements/','_template-partials/','src/modules/'] // String or Array
      }))
      .pipe(gulp.dest('dist/'));
      
  });

gulp.task('styles', () => {
    return gulp.src('components/src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('components/dist/'));
});

gulp.task('bundleStyle', () => {
    return gulp.src('src/bundles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie11'}))
        .pipe(gulp.dest('dist/bundles/'));
});


gulp.task('watch', () => {
    gulp.watch('src/components/**/*.scss', (done) => {
        gulp.series(['styles','bundleStyle'])(done);
    });

    gulp.watch('src/elements/**/*.scss', (done) => {
        gulp.series(['styles','bundleStyle'])(done);
    });

    gulp.watch('src/modules/**/*.scss', (done) => {
        gulp.series(['styles','bundleStyle'])(done);
    });

    gulp.watch('src/components/**/*.njk', (done) => {
        gulp.series(['buildHtml'])(done);
    });

    gulp.watch('_templates/*.njk', (done) => {
        gulp.series(['buildHtml'])(done);
    });

    gulp.watch('src/elements/**/*.njk', (done) => {
        gulp.series(['buildHtml'])(done);
    });

    gulp.watch('src/pages/*.njk', (done) => {
        gulp.series(['buildHtml'])(done);
    });

    gulp.watch('src/modules/**/*.njk', (done) => {
        gulp.series(['buildHtml'])(done);
    });
});



