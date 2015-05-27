var gulp = require('gulp'), 
	inject = require('gulp-inject');

module.exports = function(config){
	gulp.task('inject-js', function () {
		var target = gulp.src('./src/index.html');
		var sources = gulp.src(['./src/js/**/*.js'], {read: false});

		return target.pipe(inject(sources, { relative: true })).pipe(gulp.dest('./src'));
	});
};