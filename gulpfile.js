const path = require("path");
const less = require("gulp-less");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const jsfiles = ["js/plausible-tracking.js"];

function js() {
  return gulp
    .src(jsfiles)
    .pipe(concat("plausible-tracking.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/"));
}

gulp.task("js", js);
gulp.task("default", gulp.parallel(js));
