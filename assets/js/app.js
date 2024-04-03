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
    ]
});
$('.slick_slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

document.querySelector(".time_svg").style.display = "flex";
let paragraph = document.querySelector(".blur_sec_txt").style.display = "block"
let card = document.querySelectorAll(".blue_card");

card.forEach(blueSec => {
    let heading = blueSec.querySelector(".blur_sec_heading");
    let paragraph = blueSec.querySelector(".blur_sec_txt");
    let img = blueSec.querySelector(".time_svg");

    let para_display = window.getComputedStyle(paragraph).display
    card.addEventListener("click", () => {
        if (para_display = "none") {
            heading.style.color = "rgba(3, 137, 255, 1)";
            paragraph.style.display = "block";
            img.style.display = "flex";
        } else {
            heading.style.color = "white";
            paragraph.style.display = "none";
            img.style.display = "none";
        }
    })
})