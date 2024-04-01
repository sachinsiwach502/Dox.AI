let menuIcon = document.querySelector(".menuIcon");
let menuList = document.querySelector(".menubar");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show")
});

$('.slick-slider').slick({
    dots: false,
    infinite: true,
    speed: 2000,

    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    focusOnSelect: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});