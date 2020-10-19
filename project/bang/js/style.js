// 페이드인 아웃
$(function(){
    $(".event li:gt(0)").hide();
    // setInterval(실행함수,밀리초);
    setInterval(function() {
        $(".event ul>li:first").fadeOut(2000).next().fadeIn(2000).end();
        $(".event ul>li:first").appendTo(".event ul")
},4000);

// 모달테스트
    $(".content").click(function(){
        $(".modal").show();
})
    $(".btn, .modal").click(function(){
        $(".modal").hide();
})
// 메뉴 슬라이드 다운 업
    var subMenu = 0;
    $("#menu_btn").click(function(){
        if(subMenu == 0) {
            $(".sub_menu").stop().slideDown()
            subMenu=1;
        }else{
            $(".sub_menu").stop().slideUp()
            subMenu=0;
        }
    })

// 메뉴 > 로그인 버튼 클릭시 로그인 모달 노출 후 메뉴 슬라이드 업
    $("#sm_login").click(function(){
        $(".login").show()
        $(".modal_login").show()
        $(".login_modal").show()
        $(".sub_menu").hide()
    })
    $(".modal_login").click(function(){
        $(".modal_login").hide()
        $(".login_modal").hide()
        $(".login").hide()
    })

// 메뉴> 회원가입 버튼 클릭시 회원가입 모달 노출후 메뉴 슬라이드업
    $("#sm_join").click(function(){
        $(".join").show()
        $(".modal_join").show()
        $(".join_modal").show()
        $(".sub_menu").hide()
    })
    $(".modal_join").click(function(){
        $(".modal_join").hide()
        $(".join_modal").hide()
        $(".join").hide()
    })
    // 닫기 버튼
    // $(".close").click(function(){
    //     $(".modal_login").hide()
    //     $(".modal_join").hide()
    // })

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
});