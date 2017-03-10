
//wowjs init
$(document).ready(function() {
    new WOW().init();
});


//scroll to

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


$('body').scrollspy({ target: '#menu' })
