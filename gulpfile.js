var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    merge = require('merge2'),
    watch = require('gulp-watch');

gulp.task('default', function() {
    var tsResult = gulp.src('src/**/*.ts').pipe(ts({
        declarationFiles: true,
        noExternalResolve: true,
        module: 'amd'
    }));

    return merge([
        tsResult.dts.pipe(gulp.dest('dist')),
        tsResult.js.pipe(gulp.dest('dist')),
        gulp.src('src/**/*.html').pipe(gulp.dest('dist'))
    ]);
});

gulp.task('watch', function () {
    gulp.watch('src/**', ['default']);
});