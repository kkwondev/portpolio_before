$(function(){
    $(".hambuger_btn").click(function(){
        $(".gnb").css("right","0");
    })
    $(".close").click(function(){
        $(".gnb").css("right","-100%");
    })
    $(window).scroll(function(){ 
        if($("html").scrollTop() > 70){ 
          $(".header").removeClass("on"); 
          }else{ 
          $(".header").addClass("on"); 
       } 
    }) 
    $(".content_wrap").click(function(){
        $(this).next(".content2").css("display","block")
        $(this).parent(".c_wrap").siblings().children(".content2").css("display","none")
    })
    $(".floor_menu li").click(function(){
        var idx = $(this).index();
        $(this).siblings().removeClass("on")
        $(this).addClass("on")
        $(this).parent().siblings().removeClass("on");
        $(this).parent().addClass("on")
        $(this).parent().siblings(".floor_content").removeClass("on")
        $(this).parent().siblings(".floor_content").eq(idx).addClass("on")
    })
    $(".menu_bar li").click(function(){
        var idx = $(this).index();
        console.log(idx)
        $(this).siblings().removeClass("on")
        $(this).addClass("on")
        $(this).parent().siblings(".contents").removeClass("on")
        $(this).parent().siblings(".contents").eq(idx).addClass("on")
    })
    $(".yumul1").click(function(){
        $(".content > form").css("display","none")
        $(".content > .body_content").css("display","none")
        $(".yumul1_content").css("display","block")
    })
    $(".prev").click(function(){
        $(".content > form").css("display","block")
        $(".content > .body_content").css("display","block")
        $(".yumul1_content").css("display","none")
    })
    $(".yumul2").click(function(){
        $(".content > form").css("display","none")
        $(".content > .body_content").css("display","none")
        $(".yumul2_content").css("display","block")
    })
    $(".prev").click(function(){
        $(".content > form").css("display","block")
        $(".content > .body_content").css("display","block")
        $(".yumul2_content").css("display","none")
    })
    $(".circle").click(function(){
        var idx = $(this).index();
        console.log(idx);
        $(this).siblings().removeClass("on")
        $(this).addClass("on")
        $(this).parent().siblings(".body").removeClass("on")
        $(this).parent().siblings(".body").eq(idx).addClass("on")
    })
    $(".next").click(function(){
        $(this).parent().removeClass("on")
        var idx = $(this).parent().prev().index()
        console.log(idx)
        $(this).parent().next().addClass("on")
        $(this).parent().siblings(".tab_bar").children(".circle").removeClass("on")
        $(this).parent().siblings(".tab_bar").children(".circle").eq(idx).addClass("on")
    })
})