$(function(){

    // 메뉴 토글
    var subMenu = 0;
    $(".hbtn").click(function(){
        if(subMenu == 0) {
            $(".menu-b").stop().slideDown()
            subMenu=1;
        }else{
            $(".menu-b").stop().slideUp()
            subMenu=0;
        }
    })

    // 메뉴 > 로그인 버튼 클릭시 로그인 모달 노출 후 메뉴 슬라이드 업
    $("#btn_login").click(function(){
        $(".login").show()
        $(".modal_login").show()
        $(".login_modal").show()
        $(".menu-b").hide()
    })
    $(".modal_login").click(function(){
        $(".modal_login").hide()
        $(".login_modal").hide()
        $(".login").hide()
    })
    $(".modal_join").click(function(){
        $(".modal_join").hide()
        $(".join_modal").hide()
        $(".join").hide()
    })
    // 모달창에서 이동버튼
    $(".tit1").click(function(){
        $(".login").show()
        $(".login_modal").show()
        $(".join_modal").hide()
        $(".join").hide()
    })
    $(".tit2").click(function(){
        $(".login").hide()
        $(".login_modal").hide()
        $(".join_modal").show()
        $(".modal_join").show()
        $(".join").show()
    })
    $(".tit3").click(function(){
        $(".login").show()
        $(".modal_login").show()
        $(".login_modal").show()
        $(".join_modal").hide()
        $(".join").hide()
    })
    $(".tit4").click(function(){
        $(".login").hide()
        $(".login_modal").hide()
        $(".join_modal").show()
        $(".modal_join").show()
        $(".join").show()
    })
    // vticker

        $(".vtiker_wrap").vTicker({
        speed: 600,
      pause: 3000,
      animation: 'fade',
      mousePause: false,
      showItems: 5,
      height: 0,
      direction: 'up'
        
    })
    setInterval(function(){
        $('.hugi:eq(0)').css('background-color','#f5f5f5')
        $('.hugi:eq(0) > .content').css({'color':'#A72C3A','font-weight':'bold'})
        $('.hugi:last()').css('background-color','#ffffff')
        $('.hugi:last() > .content').css({'color':'#000','font-weight':'normal'})
    },300)
    
   

    // 마이페이지 경고창
    $(".mypage").click(function(){
        alert("현재 준비중입니다. 불편을 드려 죄송합니다.")
    })
    // 구매창 탭버튼
    $(".tab li").click(function(){
        var idx = $(this).index();
        $(this).siblings().removeClass("on")
        $(this).addClass("on")
        $(this).parent().parent().siblings(".content").removeClass("on")
        $(this).parent().parent().siblings(".content").eq(idx).addClass("on")
    })
    // 상세보기 닫기버튼
    $(".close1 button").click(function(){
        $(this).hide()
        $(".buy").hide()
        $(".mobile").hide()
    })
    //패키지용 상세보기
    $(".study_code2 .code_box button").click(function(){
        var idx = $(this).parent().parent().index()
        $(this).parent().parent().siblings(".buy").eq(idx-1).show()
        $(".close1 button").show()
        $('.mobile').show()
    })

    // 태블릿 pc용 코드 상세보기
    $(".study_code .code_box button").click(function(){
        var idx = $(this).parent().index();
        console.log(idx)
        $(this).parent().siblings(".buy").eq(idx-1).show()
        $(".close1 button").show()
        $(".mobile").show()
    })
    // 모바일용 코드 상세보기
    $(".mobile_code button").click(function(){
        var idx = $(this).parent().index();
        console.log(idx)
        $(this).parent().parent().parent().siblings('.mobile').children().eq(idx).show()
        $('.mobile').show()
    })

    // 상세보기 구매버튼 후
    $('.buy button').click(function(){
        alert("준비중입니다. 다음에 이용해주세요.")
    })

    // ad_close
    var s1 = 0;
    $('.ad_close').click(function(){
      if (s1 == 0) {
          $(this).css('transform','scaleY(-1)');
          $(".header_ad").css('height','0px');
          s1 = 1;
      } else if (s1 == 1) {
        $(this).css('transform','scaleY(1)');
        $(".header_ad").css('height','66px');
        s1 = 0;
      }
    })
})