const gulp = require("gulp");
const { src, series, parellel, dest, watch } = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));
const minify = require("gulp-minify");
const cleanCSS = require("gulp-clean-css");
const del = require("del");
var htmlbeautify = require("gulp-html-beautify");
const minimist = require("minimist");
const nunjucksEnv = require("./nunjucks");
const data = require("./data");
const args = require("./env");

const components = ["components/global-header/"];

gulp.task("buildHtml", function () {
  return gulp
    .src("src/**/*.njk")
    .pipe(
      nunjucksRender({
        manageEnv: nunjucksEnv,
        data: {
          ...data,
        },
        path: [
          "_templates/",
          "src/components/",
          "pages/",
          "src/elements/",
          "src/animations/",
          "_template-partials/",
          "src/modules/",
          "src/site/",
        ],
      })
    )
    .pipe(htmlbeautify({ indentSize: 2 }))
    .pipe(gulp.dest(`${args.outputDir}/`));
});

gulp.task("styles", () => {
  return gulp
    .src("src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(`${args.outputDir}/`));
});

gulp.task("bundleStyle", () => {
  return gulp
    .src("src/bundles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie11" }))
    .pipe(gulp.dest(`${args.outputDir}/bundles/`));
});

gulp.task("watch", () => {
  gulp.watch("src/**/*.scss", (done) => {
    gulp.series(["styles", "bundleStyle"])(done);
  });

  gulp.watch(["src/**/*.njk", "_templates/*.njk"], (done) => {
    gulp.series(["buildHtml"])(done);
  });
});

gulp.task("build", (done) => {
  gulp.series(["styles", "bundleStyle", "buildHtml"])(done);
});
