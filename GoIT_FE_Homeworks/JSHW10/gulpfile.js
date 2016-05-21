var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("babel", function () {
  return gulp.src("src/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("build"));
});

gulp.task("babel:watch", function () {
  gulp.watch('src/**/*.js', ['babel']);
})
