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
            "title": "材料的电学性能实验",
            "subtitle": "材料科学实验课程",
            "view": 88
        }, {
            "url": "../plays/mooc-3.html",
            "img": "../images/course-3.jpg",
            "title": "材料的拉伸强度实验",
            "subtitle": "材料科学实验课程",
            "view": 84
        }, {
            "url": "../plays/mooc-4.html",
            "img": "../images/course-4.jpg",
            "title": "材料的热分析实验",
            "subtitle": "材料科学实验课程",
            "view": 82
        }, {
            "url": "../plays/mooc-5.html",
            "img": "../images/course-5.jpg",
            "title": "材料的微观形态分析",
            "subtitle": "材料科学实验课程",
            "view": 104
        }, {
            "url": "../plays/mooc-6.html",
            "img": "../images/course-6.jpg",
            "title": "材料的硬度测试实验",
            "subtitle": "材料科学实验课程",
            "view": 106
        }, {
            "url": "../plays/mooc-7.html",
            "img": "../images/course-7.jpg",
            "title": "材料的粘度测试实验",
            "subtitle": "材料科学实验课程",
            "view": 95
        }, {
            "url": "../plays/mooc-8.html",
            "img": "../images/course-8.jpg",
            "title": "材料的光学性能测试实验",
            "subtitle": "材料科学实验课程",
            "view": 98
        }, {
            "url": "../plays/mooc-9.html",
            "img": "../images/course-9.jpg",
            "title": "材料的粒径测试实验",
            "subtitle": "材料科学实验课程",
            "view": 120
        }, {
            "url": "../plays/mooc-10.html",
            "img": "../images/course-10.jpg",
            "title": "固体材料表面的接触角测试实验",
            "subtitle": "材料科学实验课程",
            "view": 100
        }, {
            "url": "../plays/mooc-11.html",
            "img": "../images/course-11.jpg",
            "title": "材料的密度测试实验（测试部分）",
            "subtitle": "材料科学实验课程",
            "view": 101
        }, {
            "url": "../plays/mooc-12.html",
            "img": "../images/course-12.jpg",
            "title": "材料的密度测试实验（原理部分）",
            "subtitle": "材料科学实验课程",
            "view": 110
        }]
    }

    //首页列表遍历显示
    var list = data.data;
    $.each(list, function(key, val) {
        $('.course-list').append('<div class="col-sm-3 col-xs-6"><a href="' + val.url + '" target="_blank"><div class="course-card"><img alt="' + val.title + '" src="' + val.img + '"><div class="course-info"><p>' + val.title + '</p><span>' + val.subtitle + '</span></div><div class="course-state"><i class="fa fa-eye"> ' + val.view + '</i></div></div></a></div>')
    })
});
