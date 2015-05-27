var gulp = require('gulp'), tslint = require('gulp-tslint');

module.exports = function (config) {
	/**
	 * Lint all custom TypeScript files.
	 */
	gulp.task('ts-lint', function () {
	    return gulp.src(config.allTypeScript).pipe(tslint()).pipe(tslint.report('prose'));
	});
};
