"use strict";
//获取gulp
var gulp = require('gulp'),
// CSS
	sass = require('gulp-sass'),
	minCss = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
// JS
	minJs = require('gulp-uglify'),
// IMG
	// minImg = require('gulp-imagemin'),

// 通用
	browserSync = require('browser-sync').create(),
	rename = require('gulp-rename'),
	// sourcemaps = require('gulp-sourcemaps'),
	// concat = require('gulp-concat'),
	path = {
		HTML: 'html/**/*.html',
		SASS: 'src/sass/*.scss',
		CSS: 'src/css/**/*.css',
		IMG: 'src/images/**/*',
		JS: 'src/js/**/*.js'
	};

// sass编译css
gulp.task('fnSass', function () {
 	gulp.src(path.SASS)
 		// 编译scss
		// outputStyle:nested/expanded/compact/compressed
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		// 加前缀
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // 输出
		.pipe(gulp.dest('dist/css'))
		// 压缩
		.pipe(minCss())
		// 重命名
		.pipe(rename(function(path) {
			path.basename += '.min';
			// path.extname = '.css';
		}))
		// 再输出
		.pipe(gulp.dest('dist/css'))
		// 刷新
        .pipe(browserSync.stream());
});

//Js检验&合并&压缩
gulp.task('fnJs',function() {
	gulp.src(path.JS)
		// .pipe(jshint())
		// .pipe(jshint.reporter('default'))
        // 输出
		.pipe(gulp.dest('dist/js'))
		// 压缩
		.pipe(minJs())
		// 重命名
		.pipe(rename(function(path) {
			path.basename += '.min';
			// path.extname = '.css';
		}))
		.pipe(gulp.dest('dist/js'))
});

//处理图片
gulp.task('fnImg',function() {
	gulp.src(path.IMG)
		.pipe(minImg({
			progressive: true
		}))
		.pipe(gulp.dest('dist/images'))
});

//监视变化
gulp.task('fnAuto',function() {
	browserSync.init({server: './'});

    // 打印更改路径与事件
    // gulp.watch([path.HTML,path.JS,path.SASS,path.CSS,path.IMG], function(event) {
    // 	console.info(event.path);

    // 	// changed、added、deleted、renamed
    // 	console.info(event.type);
    // });

    gulp.watch(path.SASS,['fnSass']);
    // gulp.watch(path.CSS,['fnCss']);
    gulp.watch(path.JS,['fnJs']);
    // gulp.watch(path.IMG,['fnImg']);
    // gulp.watch('dist/css/*.css',['fnDst']);
    gulp.watch(path.JS).on('change',browserSync.reload);
    gulp.watch(path.HTML).on('change',browserSync.reload);
});
gulp.task('default',['fnAuto']);
