var gulp = require('gulp'), 
	inject = require('gulp-inject');

module.exports = function(config) {
	/**
	 * Generates the app.d.ts references file dynamically from all application *.ts files.
	 */
	gulp.task('gen-ts-refs', function () {
	    var target = gulp.src(config.appTypeScriptReferences);
	    var sources = gulp.src([config.allTypeScript], {read: false});
	    return target.pipe(inject(sources, {
			        starttag: '//{',
			        endtag: '//}',
			        transform: function (filepath) {
			            return '/// <reference path="../..' + filepath + '" />';
			        }
			    })).pipe(gulp.dest(config.typings));
	});
};

