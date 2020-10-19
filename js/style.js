$(function(){
    
    var menu = $(".header_wrap > ul li");
    var menu1 = $(".arrow-down");
    var menu2 = $(".mobile_menu > ul li")
    var header = $(".header_wrap > h1")
    var contents = $(".wrap > section");
    
    
    menu.click(function(event){
        event.preventDefault(); // 기본 이벤트 초기화

        var tg = $(this);
        var i = tg.index();

        var section = contents.eq(i);
        var tt = section.offset().top;
        // offect() => 선택한 요소의 좌표를 설정
        $("html,body").stop().animate({scrollTop:tt});
        
        
        // tg.siblings().children().removeClass("on");
        // tg.children().addClass("on");
    });
    menu1.click(function(event){
        event.preventDefault(); // 기본 이벤트 초기화
        var tg = $(this);
        var section = contents.eq(1);
        var tt = section.offset().top;
        // offect() => 선택한 요소의 좌표를 설정
        $("html,body").stop().animate({scrollTop:tt});
    });
    header.click(function(event){
        event.preventDefault(); // 기본 이벤트 초기화
        var tg = $(this);
        var section = contents.eq(0);
        var tt = section.offset().top;
        // offect() => 선택한 요소의 좌표를 설정
        $("html,body").stop().animate({scrollTop:tt});
    });

    $(window).scroll(function(){
       var sct = $(window).scrollTop();
    
    });
    // 시작 커튼 액티브
    $(document).ready(function() {
        $('.start-curtain').addClass('active');
    });

    // 팝업창 종료
    $(".close").click(function(){
        $(".popup").removeClass("on")
    })
    $(".popup").click(function(){
        $(this).removeClass("on")
    })
      // 헤더 스크롤시 고정
      $(window).scroll(function(){
        var h1 = $(".section1").height();
		if( $(window).scrollTop()>=Number(h1) ){
            $('.header').addClass('fixed');
            $('.mobile_menu').addClass('fixed');
		}
		else{
            $('.header').removeClass('fixed');	
            $('.mobile_menu').removeClass('fixed');			
		}
    })

    // 기획서 버튼 -> 팝업
    $(".project").click(function(){
        var idx = $(this).parent().parent(".portpolio").index()
        console.log(idx)
        $(".popup").removeClass("on")
        $(".popup").eq(idx-1).addClass("on")
    })
    // 햄버거 버튼 메뉴 슬라이드 
    var menu1 = 0;
    $(".hambuger").click(function(){
        if(menu1 == 0) {
        $(".mobile_menu").slideDown();
        menu1 = 1;
        }else if(menu1 == 1){
            $(".mobile_menu").slideUp();
            menu1 = 0;
        }
    })

    // 모바일 메뉴 클릭시 슬라이드 업
    $(".mobile_menu > ul >li >a ").click(function(){
        $(".mobile_menu").slideUp();
        menu1 = 0;
    })
    // 말풍선 팝업 
    var bu = 0;
    $(".skills").click(function(){
        if (bu ==0){
        $(this).siblings().children().removeClass("on");
        $(this).children().addClass("on");
        bu = 1;
    } else if(bu ==1) {
            $(this).children().removeClass("on");
            bu = 0;
        }
    })
})