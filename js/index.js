$(document).ready(function(){

    $(window).scroll(function() {

        let scrollEvent = $("header");
        if ($(this).scrollTop() > 1) {
            $(scrollEvent).addClass("on");
        }else{
            $(scrollEvent).removeClass("on");
        }
    });



    $(".gallery-menu li").click(function(e){
        e.preventDefault();
        i = $(this).index();
        console.log(i);
        $(".gallery-menu li").eq(i).addClass("on").siblings().removeClass("on");
        $(".gallery-img li").eq(i).addClass("on").siblings().removeClass("on");
    })
})