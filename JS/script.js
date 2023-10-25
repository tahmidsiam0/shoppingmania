$(document).ready(function () {
    $('.products').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '.right-first',
        prevArrow: '.left-first',
    });
    $('.f-p-item').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
    });
    $('.hot-deals').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '.right-second',
        prevArrow: '.left-second',
    });
    $('.testimonial').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '.right-third',
        prevArrow: '.left-third',
    });
    $('.remove-product1').click(function () {
        $('.cart-products1').slideUp(500);
    });
    $('.cart-a').click(function () {
        $('.cart-details').slideToggle(500);
        $('.cart-details::before').slideToggle(100);
    });
    // timer starts
    function makeTimer() {

        //first timer	
        var endTime = new Date("31 October 2023 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");

        //second timer
        var endTime = new Date("30 October 2023 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        $(".days-2").html(days + "<span>Days</span>");
        $(".hours-2").html(hours + "<span>Hours</span>");
        $(".minutes-2").html(minutes + "<span>Minutes</span>");
        $(".seconds-2").html(seconds + "<span>Seconds</span>");


        //third timer
        var endTime = new Date("29 October 2023 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        $(".days-3").html(days + "<span>Days</span>");
        $(".hours-3").html(hours + "<span>Hours</span>");
        $(".minutes-3").html(minutes + "<span>Minutes</span>");
        $(".seconds-3").html(seconds + "<span>Seconds</span>");


        //fourth timer
        var endTime = new Date("28 October 2023 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        $(".days-4").html(days + "<span>Days</span>");
        $(".hours-4").html(hours + "<span>Hours</span>");
        $(".minutes-4").html(minutes + "<span>Minutes</span>");
        $(".seconds-4").html(seconds + "<span>Seconds</span>");


        //fifth timer
        var endTime = new Date("27 October 2023 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        $(".days-5").html(days + "<span>Days</span>");
        $(".hours-5").html(hours + "<span>Hours</span>");
        $(".minutes-5").html(minutes + "<span>Minutes</span>");
        $(".seconds-5").html(seconds + "<span>Seconds</span>");


        //sixth timer
        var endTime = new Date("26 October 2023 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        $(".days-6").html(days + "<span>Days</span>");
        $(".hours-6").html(hours + "<span>Hours</span>");
        $(".minutes-6").html(minutes + "<span>Minutes</span>");
        $(".seconds-6").html(seconds + "<span>Seconds</span>");


        //seventh timer
        var endTime = new Date("25 October 2023 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        $(".days-7").html(days + "<span>Days</span>");
        $(".hours-7").html(hours + "<span>Hours</span>");
        $(".minutes-7").html(minutes + "<span>Minutes</span>");
        $(".seconds-7").html(seconds + "<span>Seconds</span>");


        //eighth timer
        var endTime = new Date("24 October 2023 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        $(".days-8").html(days + "<span>Days</span>");
        $(".hours-8").html(hours + "<span>Hours</span>");
        $(".minutes-8").html(minutes + "<span>Minutes</span>");
        $(".seconds-8").html(seconds + "<span>Seconds</span>");


        //ninth timer
        var endTime = new Date("23 October 2023 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        $(".days-9").html(days + "<span>Days</span>");
        $(".hours-9").html(hours + "<span>Hours</span>");
        $(".minutes-9").html(minutes + "<span>Minutes</span>");
        $(".seconds-9").html(seconds + "<span>Seconds</span>");

    }

    setInterval(function () { makeTimer(); }, 1000);



// ===========mixitup starts
var mixer = mixitup('.mixitup-body');


$('.mixitup-body').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: '.right-fourth',
    prevArrow: '.left-fourth',
});
// new products
$('.nproducts-body').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: '.right-fifth',
    prevArrow: '.left-fifth',
});
// top rated
$('.trated-body').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: '.right-sixth',
    prevArrow: '.left-sixth',
});
$('.sponsor').slick({
    infinite: true,
    autoplay:true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: '.right-seventh',
    prevArrow: '.left-seventh',
    centerMode: true,
    centerPadding: '600px',
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});
// back to the top
$(window).scroll(function(){
    let scrll = $(window).scrollTop();
    console.log(scrll)
    if (scrll>50){
        $('.navbar').addClass('sticky-nav');
        $('.cat-prod').addClass('pddng');
    }
    else{            
        $('.navbar').removeClass('sticky-nav');
        $('.cat-prod').removeClass('pddng');
    }
    let scrll2 = $(window).scrollTop();
    if (scrll2>600){
        $('.w-btt').addClass('w-btt-show');
    }
    else{            
        $('.w-btt').removeClass('w-btt-show');
    }
});
$('.w-btt').click(function(){
    $('html,body').animate({scrollTop:0});
});

// end
});