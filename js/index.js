window.onload = function() {
    //点击大放大镜
    $('.zpg-big-magnifier').click(function () {
        $('.zpg-big-magnifier-container').hide();
        $('.small-magnifier-icon').show();
    });
   //点击小放大镜
    $('.small-magnifier-icon').click(function () {
        $('.small-magnifier-icon').hide();
        $('.zpg-big-magnifier-container').show();
    });


    var dataSize = $('#full-view-mask').width();
    //var magnifierSize = $('.small-full-pic').height();
    //console.log(magnifierSize);
    //$('#full-view-mask').css({width:magnifierSize,height:magnifierSize});


    $('.scroll-img').addClass("magnifierRentgen");
    $('.scroll-img').resize(function () {
        $('.scroll-img').find(".small-full-pic, .arge-full-pic").css({
            "width": $('.scroll-img').width()
        })
    })
    $('.scroll-img').hover(function () {
        $('.scroll-img').find(".big-full-view-box").stop().fadeIn()
    }, function () {
        $('.scroll-img').find(".big-full-view-box").stop().fadeOut()
    })

   /* $('.scroll-img').mousemove(function (e) {
        var elemPos = {},
            offset = $('.scroll-img').offset();
        elemPos = {
            left: e.pageX - offset.left - dataSize / 2,
            //top: e.pageY - offset.top - dataSize / 2
            top:  $('#scroll-full-view-small').height() /2  - dataSize / 2
        }
        //console.log(elemPos);
        $('.scroll-img')
            .find(".big-full-view-box").css({
                "top": elemPos["top"],
                "left": elemPos["left"]
            })
            .find("img").css({
                "top": -elemPos["top"],
                "left": -elemPos["left"],
                "width": $('.scroll-img').width()
            })
    });*/


    var timer = null;
    var iSpeed = 0;

    $('.now-paly-icon').click(function(){
        clearInterval(timer);
        console.log('haha')
        timer = setInterval(function(){
            console.log('meme2222')
            var elemPos = {};
            elemPos = {
                left: $('#scroll-full-view-small').width()  - dataSize / 2
            }
            if($('#full-view-mask').offset().left <  elemPos["left"]){
                iSpeed += 5;
            }else{
                iSpeed -= 5;
            }

            $('.scroll-img')
                .find(".big-full-view-box").css({
                    "left": 0 + iSpeed
                })
                .find("img").css({
                    "left": 0 - iSpeed,
                    "width": $('.scroll-img').width()
                })
        },30);
      /*  $('.scroll-img').find(".big-full-view-box").stop().fadeIn('slow',function(){
            console.log('meme')
            timer = setTimeout(function(){
                console.log('meme2222')
                var elemPos = {},
                    offset = $('.scroll-img').offset();
                elemPos = {
                    left: $('#scroll-full-view-small').width()  - dataSize / 2
                }
                $('.scroll-img')
                    .find(".big-full-view-box").css({
                        "left": 0 + 100
                    })
                    .find("img").css({
                        "left": 0 - 100,
                        "width": $('.scroll-img').width()
                    })
            },30);
        });*/

    });

}

