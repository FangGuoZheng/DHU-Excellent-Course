$(function() {
    //自适应高度
    function courseHeight() {
        var height = $(window).height() - 180;
        $('.course-main').css('min-height', height + 'px');
        $('.tab-content').css('min-height', height - 150 + 'px');
    }
    courseHeight()
    $(window).resize(function() {
        courseHeight()
    });

    var data = {
        "result": 0,
        "message": "success",
        "data": [{
            "url": "../plays/mooc-1.html",
            "img": "../images/course-1.jpg",
            "title": "材料科学实验介绍",
            "subtitle": "材料科学实验课程",
            "view": 112
        }, {
            "url": "../plays/mooc-2.html",
            "img": "../images/course-2.jpg",
            "title": "材料的电学性能",
            "subtitle": "材料科学实验课程",
            "view": 88
        }, {
            "url": "./details/detail01.html",
            "img": "../images/course-3.jpg",
            "title": "材料的拉伸强度测试~1",
            "subtitle": "材料科学实验课程",
            "view": 84
        }, {
            "url": "./details/detail01.html",
            "img": "../images/course-4.jpg",
            "title": "材料的热分析-完整实验",
            "subtitle": "材料科学实验课程",
            "view": 82
        }, {
            "url": "./details/detail01.html",
            "img": "../images/course-5.jpg",
            "title": "材料的显微结构20160601",
            "subtitle": "材料科学实验课程",
            "view": 104
        }, {
            "url": "./details/detail01.html",
            "img": "../images/course-6.jpg",
            "title": "材料的硬度测试-1",
            "subtitle": "材料科学实验课程",
            "view": 106
        }, {
            "url": "./details/detail01.html",
            "img": "../images/course-7.jpg",
            "title": "材料的粘度测定20131231",
            "subtitle": "材料科学实验课程",
            "view": 95
        }, {
            "url": "./details/detail01.html",
            "img": "../images/course-8.jpg",
            "title": "材料光学性能测试",
            "subtitle": "材料科学实验课程",
            "view": 98
        }, {
            "url": "./details/detail01.html",
            "img": "../images/course-9.jpg",
            "title": "材料粒径测试",
            "subtitle": "材料科学实验课程",
            "view": 120
        }, {
            "url": "./details/detail01.html",
            "img": "../images/course-10.jpg",
            "title": "固体表面的接触角测试",
            "subtitle": "材料科学实验课程",
            "view": 100
        }, {
            "url": "./details/detail01.html",
            "img": "../images/course-11.jpg",
            "title": "测试~1",
            "subtitle": "材料科学实验课程",
            "view": 101
        }, {
            "url": "./details/detail01.html",
            "img": "../images/course-12.jpg",
            "title": "原理~1",
            "subtitle": "材料科学实验课程",
            "view": 110
        }]
    }

    //首页列表遍历显示
    var list = data.data;
    $.each(list, function(key, val) {
        $('.course-list').append('<div class="col-sm-3 col-xs-6"><a href="' + val.url + '" target="_blank"><div class="course-card"><img alt="' + val.title + '" src="' + val.img + '"><div class="course-info"><p>' + val.title + '</p><span>' + val.subtitle + '</span></div><div class="course-state"><i class="fa fa-eye"> ' + val.view + '</i></div></div></a></div>')
    })

})
