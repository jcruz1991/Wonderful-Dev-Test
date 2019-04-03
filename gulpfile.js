const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');


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
        gulp.src("./public/images/*")
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