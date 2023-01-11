//Title changes
let title = document.querySelector("title").innerHTML
window.onfocus = () => { document.title = title }
window.onblur = () => { document.title = "Dijital Çözüm Fırsatlarını Kaçırma" }
//Title changes

//progress
let progress = document.querySelector(".progress")
let pageHeight = document.body.scrollHeight - window.innerHeight;
window.addEventListener("scroll", function () {
    vertical = window.scrollY;
    let progressRate = (vertical / pageHeight) * 100;
    progress.style.width = progressRate + "%";
});

//progress

//sliding effect with scrollreveal
ScrollReveal().reveal('.slideBottom', {
    duration: 1000,
    origin: 'bottom',
    distance: '100px',
    interval: 200,
    reset: true
});

ScrollReveal().reveal('.slideBottomForm', {
    duration: 1000,
    origin: 'bottom',
    distance: '100px',
    interval: 200,
    reset: false
});

ScrollReveal().reveal('.slideLeft', {
    duration: 1000,
    origin: 'left',
    distance: '100px',
    interval: 200,
    reset: true
});
//sliding effect with scrollreveal

//Login - sign up form
let login = document.querySelector(".login")
let signup = document.querySelector(".signup")
let loginMobile = document.querySelector(".login-mobile")
let signupMobile = document.querySelector(".signup-mobile")

login.addEventListener("click", () => {
    Swal.fire({
        template: '#loginForm'
    })
})
signup.addEventListener("click", () => {
    Swal.fire({
        template: '#signupForm'
    })
})
loginMobile.addEventListener("click", () => {
    Swal.fire({
        template: '#loginForm'
    })
})
signupMobile.addEventListener("click", () => {
    Swal.fire({
        template: '#signupForm'
    })
})
//Login - sign up form


//go up
let scrollUp = document.querySelector(".scrollUp")
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
//go up