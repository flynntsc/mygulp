'use strict';
//获取gulp
import gulp from 'gulp';
import del from 'del';
import bs from 'browser-sync';
import glp from 'gulp-load-plugins';

const browserSync = bs.create(),
    plugins = glp({
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
        ImgTo: 'dist/images',
    },
    Config = {
        isDelFirst: 1
    };

// Fn
function delFiles(dir) {
    if (Config.isDelFirst) {
        del([dir + '/**/*']).then(files => {
            for (let v of files) {
                console.log(`Delete ${v}`);
            }
        });
    }
}

// sass编译css
gulp.task('fnSass', () => {
    // 清空
    delFiles(Path.CssTo);
    return gulp.src(Path.Sass)
        // .pipe(plugins.plumber())
        // 编译scss
        // outputStyle:nested/expanded/compact/compressed
        .pipe(plugins.sass({
            outputStyle: 'expanded'
        }).on('error', plugins.sass.logError))
        // 加前缀
        .pipe(plugins.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
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
gulp.task('fnJs', () => {
    // 清空
    delFiles(Path.JsTo);
    gulp.src(Path.Js)
        .pipe(plugins.plumber())
        .pipe(plugins.babel({
            presets: ['es2015', 'stage-0'],
            plugins: ['transform-es2015-modules-umd', 'add-module-exports']
        }))
    // 输出
    .pipe(gulp.dest(Path.JsTo))
    // 压缩
    .pipe(plugins.uglify())
    // 重命名
    .pipe(plugins.rename(function(path) {
        path.basename += '.min';
        // path.extname = '.css';
    }))
    // 输出
    .pipe(gulp.dest(Path.JsTo));
});

//处理图片
gulp.task('fnImg', () => {
    gulp.src(Path.Img)
        .pipe(plugins.imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(Path.ImgTo));
});

//监视变化
gulp.task('fnAuto', () => {
    browserSync.init({
        server: './'
    });

    // 打印更改路径与事件
    // gulp.watch([Path.Html,Path.Js,Path.Sass,Path.Img], function(event) {
    // 	console.info(event.Path);

    // 	// changed、added、deleted、renamed
    // 	console.info(event.type);
    // });

    gulp.watch(Path.Sass, ['fnSass']);
    gulp.watch(Path.Js, ['fnJs']);
    // gulp.watch(Path.Img,['fnImg']);
    gulp.watch([Path.Html, Path.Js]).on('change', browserSync.reload);
});
// 默认运行任务
gulp.task('default', ['fnAuto']);