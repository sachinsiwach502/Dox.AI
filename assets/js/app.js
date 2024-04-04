let menuIcon = document.querySelector(".menuIcon");
let menuList = document.querySelector(".menubar");
let body = document.body;
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    if (menuList.classList.contains("show")) {
        body.style.overflow = "hidden"
    } else {
        body.style.overflow = "auto";
    }
});



$('.slick-slider').slick({
    dots: false,
    infinite: true,
    speed: 2000,

    slidesToShow: 5,
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


const all_select = document.querySelector(".all_select");
let child = document.querySelectorAll(".child");

all_select.addEventListener("change", () => {
    child.forEach(other => {
        other.checked = all_select.checked;
    });
});

let accord_item = document.querySelectorAll(".blur_card");
let click_btn = document.querySelector(".click_btn");
let svg_box = document.querySelector(".timer-img");
let disp_text = document.querySelector(".disp_text");
disp_text.style.display = "block";
svg_box.style.display = "flex";
click_btn.style.color = "#0389FF";

accord_item.forEach(other => {
    let click_btn = other.querySelector(".click_btn");
    let svg_box = other.querySelector(".timer-img");
    let disp_text = other.querySelector(".disp_text");
    click_btn.addEventListener("click", () => {
        accord_item.forEach(otherItm => {
            let click_btn = otherItm.querySelector(".click_btn");
            let svg_box = otherItm.querySelector(".timer-img");
            let disp_text = otherItm.querySelector(".disp_text");
            if (otherItm !== other) {
                svg_box.style.display = "none";
                disp_text.style.display = "none";
                click_btn.style.color = "#ffffff"
            }
        })
        let text = window.getComputedStyle(disp_text).display;
        if (text === "none") {
            disp_text.style.display = "block";
            svg_box.style.display = "flex";
            click_btn.style.color = "#0389FF";
        } else {
            disp_text.style.display = "none";
            svg_box.style.display = "none";
            click_btn.style.color = "#FFFFFF";
        }
    });
});