/**
 * Created by eli on 3/23/15.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var fs = require('fs-extra');
var path = require('path');


gulp.task('js', function () {
    fs.ensureDirSync(path.resolve(__dirname, '../logs'));
    gulp.src(['ng/module.js', 'ng/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets'))
});

gulp.task('watch:js', ['js'], function () {
    gulp.watch('ng/**/*.js', ['js'])
});
