$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
  
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [' ', ' '],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
//
// $('.owl-carousel-2').owlCarousel({
//     loop: false,
//     margin: 0,
//     nav: false,
//     navText: ['', ' '],
//     responsive: {
//         0: {
//             items: 3
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 3
//         }
//     }
// });
