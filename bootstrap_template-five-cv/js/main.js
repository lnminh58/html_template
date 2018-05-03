/// <reference path="../typings/globals/jquery/index.d.ts" />



$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$('.b-title').addClass('wow flipInX');

$('.b-content').children().addClass('wow fadeInUp');

$('.d-title ').addClass('wow fadeInRight');

$('.d-content').children().addClass('wow fadeInLeft');
$('.p-text').addClass('wow fadeInLeft');
$('#project .btn').addClass('wow fadeInUp');
$('.wow').attr({
    'data-wow-delay': "0.3s",
    'data-wow-duration':"0.5s"
});

var wow = new WOW({
    // boxClass: 'wow', // animated element css class (default is wow)
    // animateClass: 'animated', // animation css class (default is animated)
    offset:20, // distance to the element when triggering the animation (default is 0)
    // mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();
 
