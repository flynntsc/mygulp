# NPM


- npm cmd [option]
- npm -h
 - npm help cmd 查看某个命令详细介绍，如npm help install/update...
 - npm cmd -h 快速查看可搭配属性
- npm init
 - npm init -y 直接新建默认package.json文件
- npm install/uninstall [-global/-g/--save/-S/-dev/-D]
 - npm i/un []
 - npm i name@1.8.2
- npm update
 - npm info/view/v react 超多版本详细信息
 - npm dist-tags ls react 版本更新简洁近况
 - npm outdated 检测当前安装npm包是否有更新
- npm publish 发布
 - x.y.z 版本号
 - npm version <update_type> 更新版本号

```
npm version patch => z+1
npm version minor => y+1 && z=0
npm version major => x+1 && y=0 && z=0
```

- npm list -g --depth=0

 - --depth=0 控制路径深度

- **npm dedupe** 整理包依赖
- ls ~/.npm 查看缓存区
 - npm cache clean 删除

# 资料
- [NPM](https://www.npmjs.com/)
- [Gulp官网](http://gulpjs.com/)
- [Gulp中文网](http://www.gulpjs.com.cn/)
- [Gulp 4 入门指南](https://github.com/cssmagic/blog/issues/62)
- [豪情gulp整理](https://github.com/jsfront/use-gulp)

# 插件
- 全局
  - [NRM](https://www.npmjs.com/package/nrm) 线路切换
  - [N](https://www.npmjs.com/package/n) Node版本控制或nvm/nvm-windows
  - [browser-sync](https://www.npmjs.com/package/browser-sync) 静态文件服务器+浏览器自动刷新

- 通用
 - [del](https://www.npmjs.com/package/del) 删除文件
  - [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins) 加载管理
  - [gulp-nodemon](https://www.npmjs.com/package/gulp-nodemon) 自动启动/重启node程序
  - [gulp-concat](https://github.com/wearefractal/gulp-concat) 合并文件
  - [gulp-rename](https://github.com/hparra/gulp-rename) 重命名文件
  - [gulp-filter](https://github.com/sindresorhus/gulp-filter) 过滤文件
  - [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) 错误进程不中断

- CSS
  - [gulp-sass](https://www.npmjs.com/package/gulp-sass) 编译sass
  - [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) 自动加前缀
  - [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css) 压缩

- JS 
  - [gulp-babel](https://www.npmjs.com/package/gulp-babel) ES6编译
  - [gulp-eshint](https://www.npmjs.com/package/gulp-eslint) 语法检测
  - [gulp-uglify](https://github.com/terinjokes/gulp-uglify) 压缩


