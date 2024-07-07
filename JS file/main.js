
// Show searchbar-menu 
let searchButton = document.querySelector("#search-button");
let searchSection = document.querySelector(".searchbar-section");
let serchClose = document.querySelector("#close-button");



if(searchButton) {
    searchButton.addEventListener('click', () => {

        searchSection.classList.add("show-search");
    })
}

if(serchClose){
    serchClose.addEventListener('click' , () => {
        searchSection.classList.remove("show-search")
    })
}

// show login-section
let loginSection = document.querySelector(".login-section");
let loginButton = document.querySelector(".login-button")
let loginClose = document.querySelector("#login-close")

if(loginButton) {
    loginButton.addEventListener('click', () => {

        loginSection.classList.add("show-login");
    })
}

if(loginClose){
    loginClose.addEventListener('click' , () => {
        loginSection.classList.remove("show-login")
    })
}

// show header 

let showHeader = function () {

    let header = document.querySelector(".header-section");

    this.scrollY > 40 ? header.classList.add("show-header")
                      : header.classList.remove("show-header");

}

window.addEventListener('scroll' , showHeader);

// home swiper JS

const homeSwiper = new Swiper('.home-swiper', {
    loop:true ,
    grabCursor:true ,
    spaceBetween: -24,
    slidesPerView:"auto",
    centeredSlides: "auto", 

    autoplay: {
        delay: 3000 ,
        disableOnInteraction: false ,
    } ,

    breakPoints: {
        1220: {
            spaceBetween: -32 ,
        } ,
    },
});


// feature swiper JS

const featuredSwiper = new Swiper('.featured-swiper', {
    loop:true ,
    grabCursor:true ,
    spaceBetween: 16,
    slidesPerView: "auto",
    centeredSlides: "auto", 
    
    breakPoints: {

        1220: {
            slidesPerView: 4 ,
            centeredSlides:false ,
        }
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

});

// new book section swiper 

const newBookSwiper = new Swiper('.newbook-swiper', {
    loop:true ,
    grabCursor:true ,
    spaceBetween: 16,
    slidesPerView: "auto",
    centeredSlides: "auto", 
    
    breakPoints: {
      
        1150: {
            slidesPerView: 3 ,
            centeredSlides:false ,
            
        } ,

        1220: {
            slidesPerView: 5 ,
            centeredSlides:"auto" ,
            spaceBetween: 32 ,
            
        } ,
    },
});

// testimonial swiper 

const testimonialSwiper = new Swiper('.testimonial-swiper', {
    loop:true ,
    grabCursor:true ,
    spaceBetween: 16,
    slidesPerView: "auto",
    centeredSlides: "auto", 

    breakPoints: {
        1150: {
            slidesPerView: 4 ,
            centeredSlides:false ,
        } ,
    },
});

// scrollup

let scrollUpFunc = function () {

    let scrollUp = document.getElementById("scroll-up");

    this.scrollY > 350 ? scrollUp.classList.add("scrollup-active")
                       : scrollUp.classList.remove("scrollup-active");
}

window.addEventListener('scroll' , scrollUpFunc);


// scroll-active 

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {

    const scrollDown = window.scrollY ;

    sections.forEach( current => {

        const sectionHeight = current.offsetHeight ,
              sectionTop = current.offsetTop - 58 , 
              sectionId = current.getAttribute('id') ,
              sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

              if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add("scroll-active");
              }else {
                sectionsClass.classList.remove("scroll-active");
              }
    })
}

window.addEventListener('scroll' , scrollActive);

// **************** Dark Theme Toggle ****************************88 

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme' ;
const iconTheme = 'ri-sun-line';

// previously selected topic(if user selected)

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// we obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'; 
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'; 

// we validate if the user previously chose a topic 
if(selectedTheme) {
    // If the validation is fullfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove' ](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove' ](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click' , () => {

    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // we save the theme and the current icon that the user chose 
    localStorage.setItem('selected-theme',getCurrentTheme());
    localStorage.setItem('selected-icon' ,getCurrentIcon());
})


// scroll reveal 

const sr = ScrollReveal({
    origin: "top" ,
    distance: "60px" , 
    duration: 2500 ,
    delay: 300 ,
    reset:true ,
    afterReveal: (el) => {
        el.style.transform = 'none'; // Reset transform after reveal
    },
});

sr.reveal('.home-data , .featured-container , .newbook-container , .testimonial-container , .footer-container , .subscribe-data');
sr.reveal('.home-image-section',{delay:600});
sr.reveal('.service-container');
sr.reveal('.discount-images' , {origin:"right"})
sr.reveal('.discount-data' , {origin:"left" })