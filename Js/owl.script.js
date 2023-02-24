// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    center: false,
    navText: [
	    "<i class='fa fa-angle-left'></i>",
	    "<i class='fa fa-angle-right'></i>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1.7
        },
        768:{
            items:2.2
        },
        1000:{
            items:2.5
        },
        1200:{
            items:3.5
        }
    }
  });
});