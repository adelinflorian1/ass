
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            $('.site-header').hide();
        }
        else if(st == lastScrollTop)
        {
        }
        else {
            $('.site-header').show();
            $('.site-header').css("background-color","rgb(250,250,250)");
            $('.site-header').css("z-index","2");
            $('.sixth').css("visibility","hidden");
        }

        if($(window).scrollTop()<20){
            $('.sixth').css("visibility","visible");
            $('.site-header').css("background-color","transparent");
        }
        lastScrollTop = st;
    });
