$(document).ready(function () {
    $(this).scrollTop(0);
});
//$('.img').mousemove(function (e) {
//    var moveX = (e.pageX * -1 / 70);
//    var moveY = (e.pageY * -1 / 70);
//    $(this).css('background-position', moveX + 'px ' + moveY + 'px')
//})
var typed = new Typed(".type", {
    strings: [
"Sai Kumar Dontham.",
"a UI/UX designer.",
"a Front End Developer.",
],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
});
var view = document.getElementById('burger-svg');
// Events
var hoverView = view.addEventListener('mouseover', viewHover);
var hoveroutView = view.addEventListener('mouseout', viewHoverOut);


// hamburger
var box1 = document.getElementsByClassName("burger--svg-1");
var box2 = document.getElementsByClassName("burger--svg-2");
var box3 = document.getElementsByClassName("burger--svg-3");


// View mouseover
function viewHover() {
    TweenMax.to(box1, 0.5, {
        attr: {
            y: 17,
        },
        ease: Power4.easeOut
    }, 'start')
    TweenMax.to(box2, 0.5, {
        attr: {
            x: 17,
            width: 15
        },
        ease: Power4.easeOut

    }, 'start')

    TweenMax.to(box3, 0.5, {
        attr: {
            y: 31,
        },
        ease: Power4.easeOut
    }, 'start')
};

// View mouseout
function viewHoverOut() {
    TweenMax.to(box1, 0.5, {
        attr: {
            y: 18,
        },
        ease: Power4.easeOut
    }, 'start')
    TweenMax.to(box2, 0.5, {
        attr: {
            x: 14,
            width: 22
        },
        ease: Power4.easeOut
    }, 'start')

    TweenMax.to(box3, 0.5, {
        attr: {
            y: 30,
        },
        ease: Power4.easeOut
    }, 'start')
};


var ol = new TimelineMax({
    paused: true,
    reversed: true
});

function haminate() {

}

function haminate() {
    ol.reversed() ? ol.play() : ol.reverse();

}


gsap.to('.overlay .line', 1.5, {
    width: "90%",
    delay: 0.5,
    ease: Expo.easeInOut
});

gsap.to('.one', 1.5, {
    y: "-150%",
    delay: 2,
    ease: Expo.easeInOut
});
gsap.to('.two', 1.5, {
    y: "150%",
    delay: 2,
    ease: Expo.easeInOut
});
gsap.to('.overlay .line', 1, {
    opacity: 0,
    delay: 1.4,
    ease: Expo.easeInOut
});
gsap.to('.overlay', 1.5, {
    display: "none",
    delay: 2.2,
    ease: Expo.easeInOut
});
gsap.from('.sa-img-animations', 1.5, {
    delay: 2,
    opacity: 0,
    scale: 1.1,
    ease: Expo.easeInOut
});
gsap.from('.logo', 1.5, {
    delay: 2.4,
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut
});
gsap.from('.sa-burger', 1.5, {
    delay: 2.6,
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut
});
gsap.from('.landing-page .content h1', 1.5, {
    delay: 2.8,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});
gsap.from('.landing-page .content ul', 1.5, {
    delay: 2.8,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.staggerFrom('.landing-page .content ul li', 1.5, {
    delay: 3.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.08)
gsap.from('.landing-page .content .sa-btn', 1.5, {
    delay: 3.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3500
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: {
                delay: 3500
            },
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 40,
            autoplay: {
                delay: 3500
            },
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        }
    },
     scrollbar: {
    el: '.swiper-scrollbar',
  },
})
