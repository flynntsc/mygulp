'use strict';

// Import
import gulp from 'gulp'
import del from 'del'
import Bs from 'browser-sync'
import Glp from 'gulp-load-plugins'

// Config
const browserSync = Bs.create()
const reload = browserSync.reload
const Pi = Glp({
    rename: {
        // 'gulp-html-replace': 'htmlReplace',
        'gulp-clean-css': 'cleanCss',
    }
})
const Paths = {
    dest: 'dist',
    jsTest: ['src/**/*.js', 'gulpfile.babel.js'],
    views: {
        src: 'src/views/**/*.html',
        dest: 'dist/views/',
    },
    styles: {
        css: 'src/styles/*.css',
        less: 'src/styles/*.less',
        sass: 'src/styles/*.scss',
        dest: 'dist/styles/',
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'dist/scripts/',
    },
    images: {
        src: 'src/images/**/*.{jpg,jpeg,png,svg}',
        dest: 'dist/images/',
    },
}

// Fn
const clean = () => del(Paths.dest).then(files => console.log(`Delete ${files}`))
export { clean }


// Views
export function views() {
    return gulp.src(Paths.views.src)
        // .pipe(Pi.htmlReplace({
        //     'css': '../../styles/all.min.css',
        //     'js': '../../scripts/all.min.js',
        // }))
        .pipe(gulp.dest(Paths.views.dest))
}

// Less
export function less() {
    return gulp.src(Paths.styles.less)
        .pipe(Pi.less())
        .pipe(Pi.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
        }))
        .pipe(Pi.changed(Paths.dest))
        .pipe(gulp.dest(Paths.styles.dest))
        .pipe(Pi.cleanCss())
        // .pipe(Pi.concat('all.min.css'))
        .pipe(Pi.rename(path => path.basename += '.min'))
        .pipe(gulp.dest(Paths.styles.dest))
        .pipe(reload({ stream: true }))
}
// Sass
export function sass() {
    return gulp.src(Paths.styles.sass)
        .pipe(Pi.sass({
            outputStyle: 'expanded',
            // onerror?
        }).on('error', Pi.sass.logError))
        .pipe(Pi.changed(Paths.dest))
        .pipe(Pi.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
        }))
        .pipe(Pi.changed(Paths.dest))
        .pipe(gulp.dest(Paths.styles.dest))
        .pipe(Pi.cleanCss())
        // .pipe(Pi.concat('all.min.css'))
        .pipe(Pi.rename(path => path.basename += '.min'))
        .pipe(gulp.dest(Paths.styles.dest))
        .pipe(reload({ stream: true }))
}

// Js
export function scripts() {
    return gulp.src(Paths.scripts.src, { sourcemaps: true })
        .pipe(Pi.plumber())
        .pipe(Pi.sourcemaps.init())
        .pipe(Pi.babel())
        // .pipe(gulp.dest(Paths.scripts.dest))
        // .pipe(Pi.uglify())
        // .pipe(Pi.rename(path => path.basename += '.min'))
        // .pipe(Pi.concat('all.min.js'))
        .pipe(Pi.sourcemaps.write())
        .pipe(gulp.dest(Paths.scripts.dest))
}
// Eslint
export function eslint() {
    return gulp.src(Paths.jsTest)
        .pipe(Pi.changed(Paths.dest))
        .pipe(Pi.eslint({
            envs: ['browser', 'ES6', 'node'],
            // rules: {
            //     curly: [2, 'multi-line'],
            //     indent: [2,2],
            // },
        }))
        .pipe(Pi.eslint.format())
}

// Img
export function images() {
    return gulp.src(Paths.images.src, { since: gulp.lastRun('images') })
        .pipe(Pi.imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest(Paths.images.dest));
}

// Server
export function server(cb) {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    cb();
}
//
export function bsReload(cb) {
    reload();
    cb();
}

// Watch
export function watch() {
    gulp.watch(Paths.views.src, gulp.series(views, bsReload))
    gulp.watch(Paths.styles.css, sass)
    gulp.watch(Paths.styles.less, less)
    gulp.watch(Paths.styles.sass, sass)
    gulp.watch(Paths.scripts.src, gulp.series(scripts, bsReload))
    gulp.watch(Paths.images.src, gulp.series(images, bsReload))
}

// Tasks
const build = gulp.series(clean, gulp.parallel(views, sass, scripts, images))
export { build }

const dev = gulp.parallel(build, server, watch)
export { dev }

// Default
export default dev
