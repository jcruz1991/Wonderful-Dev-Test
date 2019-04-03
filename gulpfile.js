const gulp = require('gulp');
const sass = require('gulp-sass');


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

// watch scss files for any changes and will update
function watch(){
    gulp.watch('./public/scss/**/*.scss', style);
}
    
exports.style = style;
exports.watch = watch