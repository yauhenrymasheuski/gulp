
//loader gif
$(window).on('load', function() {
    $(".loader").delay(500).fadeOut();
    $("#overlay").delay(1000).fadeOut("slow");
});



$(document).ready(function () {

    //scroll to top button
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(window).scroll(function() {
        if($(this).scrollTop() >= 500) {
            $('.scroll-up').fadeIn();
        }
        else{
            $('.scroll-up').fadeOut();
        }
    });


    //close bootstrap menu on click on element
    if ($(window).width() < 768) {
        $('.main-menu .nav a').on('click', function(){
            $('.navbar-toggle').click();
        });
    }

    $(this).scrollTop(0);

    //sticky header
    $(window).scroll(function() {
        if($(this).scrollTop() >= 150) {
            $('.header').addClass('stickytop');
        }
        else{
            $('.header').removeClass('stickytop');
        }
    });

    //datepicker
    $("#date").flatpickr({});

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

    //scroll to menu item
    $('.main-menu a[href^="#"]').click(function(){
        var target = $(this).attr('href');

        if ($(window).width() < 768) {
            $('html, body').animate({scrollTop: $(target).offset().top - 50}, 800);
        }
        else {
            $('html, body').animate({scrollTop: $(target).offset().top - 90}, 800);
        }
        return false;
    });

    //slick slider
    $('.welcome-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        }
    );

    $('.about-slider').slick({
            dots: true,
            arrows: false
        }
    );

    $('.action-slider').slick({
            dots: true,
            arrows: false
        }
    );

    $('.crew-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});

//jquery validation
$(document).ready(function () {
    $('#reservation-form').validate({
        //form sent
        submitHandler: function (form) {
            $('.success-block').fadeIn();
            $(function() {
                setTimeout(function() {
                    $('.success-block').fadeOut();
                }, 3000);
            });
            $('#reservation-form .row input').val('');
            return false;
        }
    });
});

//google maps
function initMap() {
    var uluru = {lat: 52.4998044, lng: 13.4055521};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
        scrollwheel: false,
        styles:
            [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#444444"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#46bcec"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                }
            ]
    });

    var iconBase = 'img/';
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: iconBase + 'marker.png'
    });
}

