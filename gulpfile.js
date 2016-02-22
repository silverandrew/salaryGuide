/**
 * Created by eli on 3/23/15.
 */
var gulp = require('gulp');
var fs = require('fs-extra');

fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
    require('./gulp/' + task)
});

gulp.task('dev', ['watch:js', 'dev:server']);
