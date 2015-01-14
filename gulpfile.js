//import gulp node package
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    jade = require('gulp-jade'),
    sass = require('gulp-ruby-sass'),
    coffee = require('gulp-coffee'),
    serve = require('gulp-serve');


//Sass task
gulp.task('styles', function(){
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'));
});

// Copy vendor css
gulp.task('copy-vendor', function() {
    gulp.src('src/vendor/*')
        .pipe(gulp.dest('build/vendor'));
});

//Jade task
gulp.task('jade', function(){
    gulp.src('src/jade/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('build'));
});

//Image Task Compress
gulp.task('images', function(){
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'));
});

//Coffee Task
gulp.task('scripts', function(){
    gulp.src('src/coffeescript/*.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('build/js'));
});

// Serve dev
gulp.task('serve', serve('build'));

// Build task
gulp.task('build', ['styles', 'images', 'jade', 'scripts', 'copy-vendor']);

//Watch Task
gulp.task('watch', function() {
    gulp.watch('src/**', ['build']);
});

gulp.task('default', ['build', 'watch', 'serve']);
