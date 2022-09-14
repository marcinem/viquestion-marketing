const gulp = require("gulp");
const plumber = require("gulp-plumber");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");
const path = require("path");
const rename = require("gulp-rename");

const analytics = ["js/plausible-tracking.js"];

const misc = ["js/vi-player.js"];

function plausiblejs() {
  return gulp
    .src(analytics)
    .pipe(concat("plausible-tracking.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/"));
}

function miscjs() {
  return gulp
    .src(misc)
    .pipe(concat("misc.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/"));
}

gulp.task("plausiblejs", plausiblejs);
gulp.task("miscjs", miscjs);
gulp.task("default", gulp.parallel(plausiblejs, miscjs));
