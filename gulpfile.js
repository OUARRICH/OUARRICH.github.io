var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less');
var uglifycss = require('gulp-uglifycss');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var eslint = require('gulp-eslint');
var rename = require("gulp-rename");

var lessResources = ['style/*.less'];
var jsResources = ['js/*.js'];
var htmlResources = ['**/*.html'];
var cssOutput = 'assets/css';
var jsOutput = 'assets/js';

gulp.task('connect', function(){
	connect.server({
		root: '.',
		livereload: true
	});
});

gulp.task('less', function(){
	gulp.src('style/style.less')
		.pipe(less())
		.on('error', gutil.log)
		.pipe(gulp.dest(cssOutput))
		.pipe(uglifycss({
			'maxLineLen': 80,
	      	'uglyComments': true
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(cssOutput))
		.pipe(connect.reload());
});

gulp.task('js', function(){
	gulp.src(jsResources)
		.pipe(uglify())
		.pipe(concat('script.js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(jsOutput))
		.pipe(connect.reload());
});

gulp.task('lint', function(){
    gulp.src(jsResources)
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('watch', function(){
	gulp.watch(jsResources, ['js']);
	gulp.watch(lessResources, ['less']);
	gulp.watch(htmlResources, ['html']);
});

gulp.task('html', function(){
	gulp.src(htmlResources)
		.pipe(connect.reload());
});

gulp.task('default', ['html', 'js', 'less', 'connect','watch']);