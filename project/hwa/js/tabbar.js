$(function(){
    $(".sub_menu>ul>li>a").click(function(){
        var idx =$(this).parent().index();
        console.log(idx)
        $(this).parent().siblings().children().removeClass("on")
        $(this).addClass("on")
        $(this).parent().parent().parent().siblings(".section_content").removeClass("on")
        $(this).parent().parent().parent().siblings(".section_content").eq(idx).addClass("on");
        return false;
    })
})