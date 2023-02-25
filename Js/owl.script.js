// Owlcarousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        center: false,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3.5
            },
            1400: {
                items: 4
            },
            1600: {
                items: 4.1
            }
        }
    });
});