var gulp = require('gulp');
var requireDir = require('require-dir');
var dir = requireDir('./');

gulp.task('build', gulp.series(
    ['clean'],
    ['sass-build'],
    gulp.parallel(['vendorStyles','vendorScripts','pug','script','new-sprite','fonts']),
    ['images']
));