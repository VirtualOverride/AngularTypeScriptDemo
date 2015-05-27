var gulp = require('gulp');

module.exports = function(config){
	gulp.task('watch', function(e) {
	    gulp.watch([config.allTypeScript], ['ts-lint', 'compile-ts', 'gen-ts-refs', 'inject-js']);
	});
};