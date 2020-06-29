$(function () {
    var index = 0;
    $(".img-list img").hide();
    $(".img-list img").eq(index).show();
    $("#obj li").eq(index).css("background-color","azure");

    timer = setInterval(function () {
        var obj = $(".img-list img");
        index++;
            if (index > 3){
                index = 0;
            }
    $("#obj li").css("background-color","antiquewhite");
    $("#obj li").eq(index).css("background-color","azure");
        obj.fadeOut(1000);
        obj.eq(index).fadeIn(1000);
    },5000);
    $(".img-list img").mouseenter(function () {
        clearInterval(timer);
    })
    $(".img-list img").mouseleave(function () {
        timer = setInterval(function () {
            var obj = $(".img-list img");
            index++;
            if (index > 3){
                index = 0;
            }
        obj.fadeOut(1000);
        obj.eq(index).fadeIn(1000);
        $("#obj li").css("background-color","antiquewhite");
        $("#obj li").eq(index).css("background-color","azure");
        },5000);
    })

    $("#right").click(function () {
        index += 1;
        if (index > 3){
            index = 0;
        }
        $(".img-list img").fadeOut(1000);
        $(".img-list img").eq(index).fadeIn(1000);
        $("#obj li").css("background-color","antiquewhite");
        $("#obj li").eq(index).css("background-color","azure");
    });

    $("#left").click(function () {
        index -= 1;
        if (index < 0){
            index = 3;
        }
        $(".img-list img").fadeOut(1000);
        $(".img-list img").eq(index).fadeIn(1000);
        $("#obj li").css("background-color","antiquewhite");
        $("#obj li").eq(index).css("background-color","azure");
    });

    $("#obj li").click(function () {
        index = $("#obj li").index(this);
        $("#obj li").css("background-color","antiquewhite");
        $("#obj li").eq(index).css("background-color","azure");
        $(".img-list img").fadeOut(1000);
        $(".img-list img").eq(index).fadeIn(1000);
    })
})