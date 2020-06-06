const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, {
    scrollOffset: 80
});

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider);

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// parallax
$(window).on('load', function () {
    $('.muka').addClass('mukamuncul');
    $('.nama').addClass('namamuncul');
    $('.kerja').addClass('kerjamuncul');
    $('.aboutme').addClass('aboutmemuncul');
    $('.p1').addClass('p1muncul')
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });
});