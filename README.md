## Links

* [Gulp 官网](http://gulpjs.com/)
* [Gulp 中文网](http://www.gulpjs.com.cn/)
* [Gulp 4 入门指南](https://github.com/cssmagic/blog/issues/62)

## 通配符

```js
gulp.src('./js/*.js') // * 匹配js文件夹下所有.js格式的文件
gulp.src('./js/**/*.js') // ** 匹配js文件夹的0个或多个子文件夹
gulp.src(['./js/*.js', '!./js/index.js']) // ! 匹配除了index.js之外的所有js文件
gulp.src('./js/**/{omui,common}.js') // {} 匹配{}里的文件名
```

## Package

* 全局

  * [YRM](https://www.npmjs.com/package/yrm) 线路切换-兼顾 npm&yarn
  * [N](https://www.npmjs.com/package/n) Node 版本控制或 nvm/nvm-windows
  * [browser-sync](https://www.npmjs.com/package/browser-sync) 静态文件服务器+浏览器自动刷新（[中文网](http://www.browsersync.cn/)）
  * [merge-stream](https://www.npmjs.com/package/merge-stream) 合并流

* 通用

  * [del](https://www.npmjs.com/package/del) 删除文件
  * [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins) 加载管理
  * [gulp-nodemon](https://www.npmjs.com/package/gulp-nodemon) 自动启动/重启 node 程序
  * [gulp-concat](https://www.npmjs.com/package/gulp-concat) 合并文件
  * [gulp-rename](https://www.npmjs.com/package/gulp-rename) 重命名文件
  * [gulp-filter](https://www.npmjs.com/package/gulp-filter) 过滤文件
  * [gulp-changed](https://www.npmjs.com/package/gulp-changed) 只处理有更新的文件
  * [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) 错误进程不中断
  * [gulp-rev](https://www.npmjs.com/package/gulp-rev) 给文件名加 hash 值
  * [gulp-rev-replace](https://www.npmjs.com/package/gulp-rev-replace) 重写被 gulp-rev 重命名的文件名

* CSS

  * [gulp-sass](https://www.npmjs.com/package/gulp-sass) 编译 sass
  * [gulp-less](https://www.npmjs.com/package/gulp-less) 编译 less
  * [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) 自动加前缀
  * [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) 压缩 css

* JS

  * [gulp-babel](https://www.npmjs.com/package/gulp-babel) ES6 编译
  * [gulp-eshint](https://www.npmjs.com/package/gulp-eslint) 校验 js 代码质量
  * [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) 压缩
  * [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) 生成 sourcemap 文件，便于调试源码

* HTML

  * [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) 压缩
  * [gulp-html-replace](https://www.npmjs.com/package/gulp-html-replace) 标记转化 html 文件中的 css 和 js
  * [gulp-html-extend](https://www.npmjs.com/package/gulp-html-extend) 替换标记中的内容或块等（extend 功能）
  * [gulp-usemin](https://www.npmjs.com/package/gulp-usemin) 将 HTML 文件中 CSS 和 JS 文件的路径替换为对应的 min 版本（已经合并、压缩过的版本）
  * [gulp-useref](https://www.npmjs.com/package/gulp-useref) 将 html 文件中的标记替换为对应的文件

* IMG

  * [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) 压缩
  * [gulp-base64](https://www.npmjs.com/package/gulp-base64) 转为 data URI
