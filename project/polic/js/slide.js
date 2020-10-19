$(function(){
    // //슬라이드 좌우
    // var slideW = $(".slidelist").width();
    // $(".slidelist > li").eq(0).siblings().css({left:+slideW+"px"});
    // var slideIndex = 0;
    // setInterval(function(){
    //     if(slideIndex<3){
    //         slideIndex++;
    //     }else{
    //         slideIndex=0
    //     }
    //     $(".slidelist > li").eq(slideIndex).siblings().animate({left:+slideW+"px"},1000)
    //     $(".slidelist > li").eq(slideIndex).animate({left:"0px"},1000)
    // },4000)

    // 상하
    // var slideW = $(".slidelist").height();
    // $(".slidelist > li").eq(0).siblings().css({top:+slideW+"px"});
    // var slideIndex = 0;
    // setInterval(function(){
    //     if(slideIndex<3){
    //         slideIndex++;
    //     }else{
    //         slideIndex=0
    //     }
    //     $(".slidelist > li").eq(slideIndex).siblings().animate({top:+slideW+"px"},1000)
    //     $(".slidelist > li").eq(slideIndex).animate({top:"0px"},1000)
    // },4000)
    $("#header_ad > .close").click(function(){
        $(this).hide();
        $("#header_ad > .header_ad_img").hide();
        $("#header_ad").css("height","0");
    })
    $(".no").click(function(){
        alert('준비중입니다. 다음에 이용해주세요.');
        return false;
    })

    // 탭메뉴
    $(".tab_menu > ul >li").click(function(){
        var idx = $(this).index()
        $(this).siblings().removeClass("on")
        $(this).addClass("on")

        $(this).parent().parent().siblings(".s2_content").removeClass("on")
        $(this).parent().parent().siblings(".s2_content").eq(idx).addClass("on")
    })
    $(".content_head > .list > li.list_item").click(function(){
        var idx = $(this).index()
        $(this).siblings().removeClass("on")
        $(this).addClass("on")
    })
    // 치료후기 키워드
    $(".content_head > .list > li.all").click(function(){
        $(".content_box").show();
    })
    $(".content_head > .list > li.blue").click(function(){
        $(".content_box").hide();
        $(".content_box.blue").show();
    })
    $(".content_head > .list > li.pink").click(function(){
        $(".content_box").hide();
        $(".content_box.pink").show();
    })
    $(".content_head > .list > li.yellow").click(function(){
        $(".content_box").hide();
        $(".content_box.yellow").show();
    })
    $(".content_head > .list > li.green").click(function(){
        $(".content_box").hide();
        $(".content_box.green").show();
    })
    $(".content_head > .list > li.gray").click(function(){
        $(".content_box").hide();
        $(".content_box.gray").show();
    })
})