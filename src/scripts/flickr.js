requirejs.config({
    paths: {
        ramda: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.13.0/ramda.min',
        jquery: '//cdn.bootcss.com/jquery/2.2.1/jquery.min'
    }
});

require(['ramda', 'jquery'], function (_, $) {
    // 1.根据特定搜索关键字构造 url
    // 2.向 flickr 发送 api 请求
    // 3.把返回的 json 转为 html 图片
    // 4.把图片放到屏幕上
    // Utils

    var Impure = {
        getJSON: _.curry(function (callback, url) {
            $.getJSON(url, callback);
        }),

        setHtml: _.curry(function (sel, html) {
            $(sel).html(html);
        })
    };

    // url转图片DOM
    var img = function (url) {
        return $('<img />', { src: url });
    };

    var trace = _.curry(function (tag, x) {
        console.log(tag, x);
        return x;
    });

    ////////////////////////////////////////////

    var url = function (t) {
        return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + t + '&format=json&jsoncallback=?';
    };

    // src 变为真正的图片
    var mediaUrl = _.compose(_.prop('m'), _.prop('media'));
    var srcs = _.compose(_.map(mediaUrl), _.prop('items'));

    // jQuery 的 html() 方法接受标签数组为参数，
    // 所以我们只须把 src 转换为 img 标签然后传给 setHtml 即可。
    var images = _.compose(_.map(img), srcs);
    var renderImages = _.compose(Impure.setHtml("body"), images);
    var app = _.compose(Impure.getJSON(renderImages), url);

    app("cats");
});
