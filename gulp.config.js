/*global module*/
module.exports = function(){
	var assets = 'assets/';
	var jsOutputDir= assets +'js';
	var cssOutput = assets +'css';

	var config = {
		root: './',
		assets: assets,

		allLess: ['style/*.less'],
		lessToCompile: 'style/style.less',
		cssOutput: cssOutput,
		css: cssOutput +'/style.css',
		allJs: ['js/*.js', './*.js'],
		jsToConcat: ['js/*.js'],
		jsOutputDir: jsOutputDir,
		js: [jsOutputDir +'/*.js'],
		tmpJsFile: 'script.js',
		htmlResources: ['**/*.html'],
		index: './index.html',
		images: 'img/*.*',
		imgOutput: assets + 'img',

		/**
		* bower and npm locations
		*/
		bower:{
			directory: './bower_components',
			json: require('./bower.json')
		}
	};

	config.getWiredepDefaultOptions = function(){
		var options = {
			directory: config.bower.directory, 
  			bowerJson: config.bower.json,
		};
		return options;
	};
	return config;
};
