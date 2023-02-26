                   /*SCROLL*/
document.addEventListener("DOMContentLoaded", function (){
    'use strict';
    Splitting();
    gsap.registerPlugin(ScrollTrigger);
                    //HEADER INIT
    const gTl = gsap.timeline();
    gTl.from(".title .char", 1, { opacity: 0, yPercent:130, stagger: 0.06, ease: "back.out" });
    gTl.to(".header__img", 2, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%", scale: 1, ease: "expo.out"}, "-=1");
                    //MARQ
    gTl.from(".header__marq", 2, {opacity:0, yPercent: 100,ease:"expo.out"}, "-=1.5");
                    //CUADRADO SQUARE
    const gsapSq = gsap.utils.toArray('.section-title__square');
    gsapSq.forEach((gSq, i) => {
        const rotat = gsap.from(gSq, 3, { rotation: 720});
        ScrollTrigger.create({
            trigger: gSq,
            animation: rotat,
            start: 'top bottom',
            scrub: 1.9
        });
    });
                    //header parallax FX
    function header () {
        gsap.to('.title_paralax', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            yPercent: -150
        })
        gsap.to('.header .stroke', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            xPercent: 50
        });
        gsap.to('.header__img', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            xPercent: -70
        })
        gsap.to('.header__img img', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            scale: 1.6
        })
        gsap.to('.header__marq-wrapp', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            }, 
            xPercent: -50
        })
        gsap.to('.header__marq-star img', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            }, 
            rotate: -720
        })       
    }
    header()
                    //IMG PARALLAX
    const gsapItem = gsap.utils.toArray('.textanim__item');
    gsapItem.forEach((gsIt) => {
   
        const taxtChar = gsIt.querySelectorAll('.char');
        const textImg = gsIt.querySelector('.textanim__item-img');
   
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: gsIt,
                start: "top 80%",
                end: "70% 80%",
                toggleActions: "play none none none",
                scrub: 1
            }
        });
   
        tl.from(taxtChar, 1, { opacity: 0, yPercent: 130, stagger: 0.02, ease: "back.out"})
        tl.to(textImg, 2, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "expo.out" }, "-=1")
    });
                    /*BENEFITS*/
    function benefits (){
        gsap.from('.benefits__num', {
            x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
            scrollTrigger: {
                trigger: '.benefits__list',
                start: 'top bottom',
                scrub: 1.9
            }
        })
    }
    benefits ();
                    /*PORTAFOLIO*/
    function portafolio() {
        gsap.to('.work img', {
            scrollTrigger: {
                trigger: '.work',
                start: 'top top',
                scrub: 1.9
            },
            scale: 1.5
        })
    }
    portafolio ()
                    //FOOTER
    function footer(){
        gsap.from('.footer__div span', {
            y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
            opacity: 0,
            scrollTrigger: {
                trigger: '.footer',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: 1.9
            }
        })
    }
    footer ();
}); 
                    /*ACCORDION*/
$(function () {
    "use strict";
    
            /*ACCORDION ONE ITEM*/
    function oneItemAckordion() {
        $(".accordion_one_item .accordion__item").on("click", function () {
        const timeAnim = 250;
        $(".accordion_one_item .accordion__item")
            .removeClass("active")
            .css({ "pointer-events": "auto" });
        $(this).addClass("active").css({ "pointer-events": "none" });
        $(".accordion_one_item .accordion__header").next().slideUp(timeAnim);
        $(this).find(".accordion__header").next().slideDown(timeAnim);
        });
    }
    oneItemAckordion();
});
                   /*SHOW IMG ACCRDION*/
function showDiv1(){
    document.getElementById('div1').style.display= '';
    document.getElementById('div2').style.display= 'none';
    document.getElementById('div3').style.display= 'none';
    document.getElementById('div4').style.display= 'none'; 
    document.getElementById("div1").classList.add("active2");
    document.getElementById("div2").classList.remove("active2");
    document.getElementById("div3").classList.remove("active2");
    document.getElementById("div4").classList.remove("active2");
   
      
}
function showDiv2(){
    document.getElementById('div1').style.display= 'none';
    document.getElementById('div2').style.display= '';
    document.getElementById('div3').style.display= 'none';
    document.getElementById('div4').style.display= 'none';

    document.getElementById("div1").classList.remove("active2");
    document.getElementById("div2").classList.add("active2");
    document.getElementById("div3").classList.remove("active2");
    document.getElementById("div4").classList.remove("active2");
}
function showDiv3(){
    document.getElementById('div1').style.display= 'none';
    document.getElementById('div2').style.display= 'none';
    document.getElementById('div3').style.display= '';
    document.getElementById('div4').style.display= 'none';

    document.getElementById("div1").classList.remove("active2");
  document.getElementById("div2").classList.remove("active2");
  document.getElementById("div3").classList.add("active2");
  document.getElementById("div4").classList.remove("active2");
    
}
function showDiv4(){
    document.getElementById('div1').style.display= 'none';
    document.getElementById('div2').style.display= 'none';
    document.getElementById('div3').style.display= 'none';
    document.getElementById('div4').style.display= '';

    document.getElementById("div1").classList.remove("active2");
    document.getElementById("div2").classList.remove("active2");
    document.getElementById("div3").classList.remove("active2");
    document.getElementById("div4").classList.add("active2");
}
            

