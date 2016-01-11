'use strict';
//获取gulp
var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	plugins = require('gulp-load-plugins')({
		rename: {
			'gulp-minify-css': 'mincss'
		}
	}),
	Path = {
		Html: 'html/**/*.html',
		Sass: 'src/sass/*.scss',
		CssTo: 'dist/css',
		Js: 'src/js/**/*.js',
		JsTo: 'dist/js',
		Img: 'src/images/**/*',
		ImgTo: 'dist/images'
	};

// sass编译css
gulp.task('fnSass', function() {
	return gulp.src(Path.Sass)
		// 编译scss
		// outputStyle:nested/expanded/compact/compressed
		.pipe(plugins.sass({outputStyle: 'expanded'}).on('error', plugins.sass.logError))
		// 加前缀
        .pipe(plugins.autoprefixer({browsers: ['last 2 versions'],cascade: false}))
        // 输出
		.pipe(gulp.dest(Path.CssTo))
		// 压缩
		.pipe(plugins.mincss())
		// 重命名
		.pipe(plugins.rename(function(path) {
			path.basename += '.min';
			// path.extname = '.css';
		}))
		// 再输出
		.pipe(gulp.dest(Path.CssTo))
		// 刷新
        .pipe(browserSync.stream());
});

//Js编译
gulp.task('fnJs',function() {
	gulp.src(Path.Js)
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
        // 输出
		// .pipe(gulp.dest(Path.JsTo)
		// 压缩
		// .pipe(plugins.uglify())
		// 重命名
		.pipe(plugins.rename(function(path) {
			path.basename += '.min';
			// path.extname = '.css';
		}))
        // 输出
		.pipe(gulp.dest(Path.JsTo));
});

//处理图片
gulp.task('fnImg',function() {
	gulp.src(Path.Img)
		.pipe(plugins.imagemin({
			progressive: true
		}))
		.pipe(gulp.dest(Path.ImgTo));
});

//监视变化
gulp.task('fnAuto',function() {
	browserSync.init({
		server: './'
	});

    // 打印更改路径与事件
    // gulp.watch([Path.Html,Path.Js,Path.Sass,Path.Img], function(event) {
    // 	console.info(event.Path);

    // 	// changed、added、deleted、renamed
    // 	console.info(event.type);
    // });

	gulp.watch(Path.Sass,['fnSass']);
	gulp.watch(Path.Js,['fnJs']);
    // gulp.watch(Path.Img,['fnImg']);
	gulp.watch([Path.Html,Path.Js]).on('change',browserSync.reload);
});
// 默认运行任务
gulp.task('default',['fnAuto']);
