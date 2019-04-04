const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const minify = require('gulp-minify');


// minify js file
function js() {
    return (gulp.src('./public/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/public/js/'))
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
    );
}
// Task to run scss files to css
function style() {
    return (
        gulp
        .src("./public/scss/**/*.scss")
        // Use sass with the files found, and log any errors
        .pipe(sass())
        .on("error", sass.logError)

        // What is the destination for the compiled file?
        .pipe(gulp.dest("./dist/public/css/"))
    );
}

// Task to run image minify
function images() {
    return (
        gulp.src("./public/images/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/public/images/"))
    )
}

// watch scss files for any changes and will update
function watchScss() {
    gulp.watch('./public/scss/**/*.scss', style);
}

function watchImages() {
    gulp.watch('./public/images/*"', images);
}

exports.style = style;
exports.images = images;
exports.watchScss = watchScss;
exports.watchImages = watchImages;
exports.js = js;