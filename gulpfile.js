'use strict';
//获取gulp
var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	plugins = require('gulp-load-plugins')({
		rename: {
			'gulp-minify-css': 'mincss'
		}
	}),
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
		.pipe(plugins.sass({outputStyle: 'expanded'}).on('error', plugins.sass.logError))
		// 加前缀
        .pipe(plugins.autoprefixer({browsers: ['last 2 versions'],cascade: false}))
        // 输出
		.pipe(gulp.dest('dist/css'))
		// 压缩
		.pipe(plugins.mincss())
		// 重命名
		.pipe(plugins.rename(function(path) {
			path.basename += '.min';
			// path.extname = '.css';
		}))
		// 再输出
		.pipe(gulp.dest('dist/css'))
		// 刷新
        .pipe(browserSync.stream());
});

//Js编译
gulp.task('fnJs',function() {
	gulp.src(path.JS)
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
        // 输出
		// .pipe(gulp.dest('dist/js'))
		// 压缩
		// .pipe(plugins.uglify())
		// 重命名
		.pipe(plugins.rename(function(path) {
			path.basename += '.min';
			// path.extname = '.css';
		}))
        // 输出
		.pipe(gulp.dest('dist/js'));
});

//处理图片
gulp.task('fnImg',function() {
	gulp.src(path.IMG)
		.pipe(plugins.imagemin({
			progressive: true
		}))
		.pipe(gulp.dest('dist/images'));
});

//监视变化
gulp.task('fnAuto',function() {
	browserSync.init({
		server: './'
	});

    // 打印更改路径与事件
    // gulp.watch([path.HTML,path.JS,path.SASS,path.CSS,path.IMG], function(event) {
    // 	console.info(event.path);

    // 	// changed、added、deleted、renamed
    // 	console.info(event.type);
    // });

	gulp.watch(path.SASS,['fnSass']);
	gulp.watch(path.JS,['fnJs']);
    // gulp.watch(path.IMG,['fnImg']);
	gulp.watch([path.HTML,path.JS]).on('change',browserSync.reload);
});
// 默认运行任务
gulp.task('default',['fnAuto']);
