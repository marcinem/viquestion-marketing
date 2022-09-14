const gulp = require("gulp");
const plumber = require("gulp-plumber");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");
const path = require("path");
const rename = require("gulp-rename");

const jsfiles = ["js/plausible-tracking.js", "js/vi-player.js"];

function js() {
  return gulp
    .src(jsfiles)
    .pipe(concat("plausible-tracking.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/"));
}

gulp.task("js", js);
gulp.task("default", gulp.parallel(js));
