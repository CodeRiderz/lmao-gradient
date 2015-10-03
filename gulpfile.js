var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var build_name = 'lmao-gradient';

gulp.task('source', function () {
    return gulp.src("src/app.js")
        .pipe(babel())
        .pipe(rename({
            basename : build_name,
            extname: '.js'
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task('min', function () {
    return gulp.src("src/app.js")
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename({
            basename : build_name,
            extname: '.min.js'
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task('default', ['source','min']);