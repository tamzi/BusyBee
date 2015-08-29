        /*Your Custom Javascript file goes here.*/

$(function(){

    var isIe = navigator.userAgent.indexOf('MSIE')>=0 ? true : false;


    function WidthHeightInit() {
        var oWidth = $(window).outerWidth(),oHeight = $(window).outerHeight();
        if(oHeight < 400){
            $('.list_1').css('height',400);
            $('.main').css('height',400);
            $('.list_1,.rotateBox,.transBox').css('height',400);
        }else{
            $('.list_1').css('height',oHeight);
            $('.main').css('height',oHeight);
            $('.list_1,.rotateBox,.transBox').css('height',oHeight);
        };
        if(oWidth < 1200){
            $('.list_1,.rotateBox,.transBox').css('width',150);
            $('.transBox').each(function(){$(this).find('.list_1').eq(1).css('left',150)})
            if(isIe){
                $('.transBox').css('width',300);
            };
            $('main').css('width',1200);
            $('.transBox').css({
                '-webkit-transform-origin':'center center -75px',
                '-moz-transform-origin':'center center -75px',
                '-o-transform-origin':'center center -75px',
                '-ms-transform-origin':'center center -75px'
            });
        }else{
            $('.list_1,.rotateBox,.transBox').css('width',oWidth / 8);
            $('.transBox').each(function(){$(this).find('.list_1').eq(1).css('left',oWidth/8)});
            if(isIe){
                $('.transBox').css('width',oWidth/4);
            };
            $('.main').css('width',oWidth);
            $('.transBox').css({
                '-webkit-transform-origin':'center center -'+oWidth/16+'px',
                '-moz-transform-origin':'center center -'+oWidth/16+'px',
                '-o-transform-origin':'center center -'+oWidth/16+'px',
                '-ms-transform-origin':'center center -'+oWidth/16+'px'
            });
        }
    }
    WidthHeightInit();


    $(window).resize(function(){
        WidthHeightInit();
    });


    var oTimer = null, i=0;
    if(oTimer){return};
    oTimer = setInterval(function(){
        $('.ico').eq(i).addClass('icon_entrance');
        i++;
        if(i == $('.icon').length){
            clearInterval(oTimer);
            oTimer = null;
        }
    },1);


    if(isIe){
        if(navigator.userAgent.match(/MSIE 6./i) || navigator.userAgent.match(/MSIE 7./i) || navigator.userAgent.match(/MSIE 8./i) || navigator.userAgent.match(/MSIE 9./i)){
            $('.ico').css({top:'50%',opacity:'1'})
        }

        $('.back').removeClass('back');
        $('.rotateBox').hover(function(){
            console.log(1)
            var oBox = $(this).find('.transBox');
            var oW = parseInt(oBox.css('width'));
            oBox.stop().animate({
                left: -oW/2
            });
        },function(){
            console.log(2)
            var oBox = $(this).find('.transBox');
            oBox.stop().animate({
                left: 0
            });
        });
    };

});
