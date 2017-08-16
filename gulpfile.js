/*global require*/

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var del = require('del');
var config = require('./gulp.config')();

gulp.task('connect', function(){
	$.connect.server({
		root: '.',
		livereload: true
	});
});

gulp.task('clean-style', function(){
	log('Cleaning Styles...');
	del(config.cssOutput);
});

gulp.task('style', ['clean-style'], function(){
	log('Compilying and concatinating less files to css...');
	gulp.src(config.lessToCompile)
		.pipe($.less())
		.on('error', $.util.log)
		.pipe(gulp.dest(config.cssOutput))
		.pipe($.uglifycss({
			'maxLineLen': 80,
			'uglyComments': true
		}))
		.pipe($.rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(config.cssOutput))
		.pipe($.connect.reload());
});

gulp.task('js', function(){
	log('Minifying and concatinating js files...');
	gulp.src(config.jsToConcat)
		.pipe($.uglify())
		.pipe($.concat(config.tmpJsFile))
		.pipe($.rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(config.jsOutputDir))
		.pipe($.connect.reload());
});

gulp.task('lint', function(){
    gulp.src(config.allJs)
        .pipe($.eslint())
        .pipe($.eslint.format());
});

gulp.task('watch', function(){
	gulp.watch(config.jsToConcat, ['js']);
	gulp.watch(config.allLess, ['style']);
	gulp.watch(config.htmlResources, ['html']);
});

gulp.task('html', function(){
	gulp.src(config.htmlResources)
		.pipe($.connect.reload());
});

gulp.task('clean-images', function(){
	log('Cleaning images...');
	del(config.imgOutput);
});

/**
*Compress and copy images
*/
gulp.task('images', ['clean-images'], function(){
	log('Minifying and copying images...');
	gulp.src(config.images)
		.pipe($.imagemin({
			optimizationLevel: 4
		}))
		.pipe(gulp.dest(config.imgOutput))
});

gulp.task('help', $.taskListing);
/**
*inject bower css and js dependencies and custom js
*/
gulp.task('wiredep', function () {
	var wiredep = require('wiredep').stream;
	var options = config.getWiredepDefaultOptions();

	gulp.src(config.index)
		.pipe(wiredep(options))
		.pipe($.inject(gulp.src(config.js)))
		.pipe(gulp.dest(config.root));
});

/**
*All what wiredep do and also inject custom css 
*/
gulp.task('inject',/*['wiredep', 'less'],*/ function(){ //TO do fix dependicies
	gulp.src(config.index)
		.pipe($.inject(gulp.src(config.css)))
		.pipe(gulp.dest(config.root));
});

/**
*@description: log messages into the console
*/
function log(msg){
	//Fix color issue when it is disabled
	if(!$.util.colors.enabled){
		$.util.colors.enabled = true;
	}
	if(typeof(msg) === 'object'){
		for(var prop in msg){
			if(msg.hasOwnProperty(prop)){
				$.util.log($.util.colors.cyan(msg[prop]));
			}
		}
	}else{
		$.util.log($.util.colors.cyan(msg));
	}
}

gulp.task('default', ['html', 'js', 'style', 'images', 'connect', 'watch']);
