


    // <!-------------Slider Section------------------------------------------------------------------------------------------------------------- -->


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});

function thumbChange(num) {
    var thumb = "images/sport" + num + ".jpg";
    document.getElementById("mainImg").src = thumb;

}
document.getElementsByClassName("thumbs"). thumbs({
    loop: true,
    nav: true,
});


