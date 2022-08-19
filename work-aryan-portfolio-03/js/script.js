

window.addEventListener("load", ()=>{
    console.log("load")
    document.querySelector(".loader").style.display = "none";
})

const navItems = document.getElementsByClassName("nitem");
console.log(navItems)


for(var i=0; i<navItems.length; i++){
    console.log(navItems[i]);
    navItems[i].addEventListener('click', removeNavigation);
}

function removeNavigation(e){
    document.querySelector('.navigation').classList.remove('active');
    document.querySelector('.material-symbols-outlined').innerHTML = "menu";
}

var lastTop = 0;
window.addEventListener('scroll', navAnimation);
function navAnimation(e){

    var nav = document.querySelector(".navbar-section");
    var currentTop = window.pageYOffset;

    if(currentTop > lastTop){
        nav.style.top = "-100px"
    }
    else{
        nav.style.top = "0px"
    }

    lastTop = currentTop;


    if(document.querySelector('.navigation').classList.contains('active')){
        document.querySelector('.navigation').classList.remove('active');
        document.querySelector('.material-symbols-outlined').innerHTML = "menu";
    }
}



document.querySelector('.hamburger').addEventListener('click', (e)=>{
    // console.log("click")
    const nav = document.querySelector('.navigation');
    const hamburger = document.querySelector('.material-symbols-outlined')

    nav.classList.toggle('active');

    if(nav.classList.contains('active')){
        hamburger.innerHTML = "close";
    }
    else{
        hamburger.innerHTML = "menu";
    }

})



// slider code

const projectSlider = document.querySelector(".projects-slider");
const slides = document.querySelectorAll(".projects-slider .slide")

projectSlider.style.width = `${slides.length * 100}%`;

// btns
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

// counter
let counter = 0;
var size = slides[0].clientWidth;
projectSlider.style.transform = `translateX(${-size * counter}px)`;


function nextSlide(e){
    if(e)
        e.preventDefault();
    
    if(counter >= slides.length-1){
        counter = 0;
    }else{
        counter++;
    }

    projectSlider.style.transition = `transform .5s ease`;
    var size = slides[0].clientWidth;
    projectSlider.style.transform = `translateX(${-size * counter}px)`;

}

function prevSlide(e){
    if(e)
        e.preventDefault();

    if(counter <= 0){
        counter = slides.length - 1;
    }else{
        counter--;
    }

    projectSlider.style.transition = `transform .5s ease`;
    var size = slides[0].clientWidth;
    projectSlider.style.transform = `translateX(${-size * counter}px)`;

}


const id = setInterval(()=>{
    nextSlide();
}, 3000)

nextBtn.addEventListener("click", (e)=>{
    clearInterval(id);
    nextSlide(e);
});
prevBtn.addEventListener("click", (e)=>{
    clearInterval(id);
    prevSlide(e);
});



// projectSlider.addEventListener("transitionend", ()=>{

//     if(slides[counter].id === "lastClone") {

//     }

// })


// CONTACT BTN
const contactForm = document.querySelector(".contact-form");
const subBtn = document.querySelector("#subBtn");
const username = document.querySelector("#username");
const userEmail = document.querySelector("#userEmail");
const msg = document.querySelector("#message");

function sendEmail(){
    // var secure = "33f3881e-eac6-4aea-b59f-21521970a1fe"

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nipaneeducation@gmail.com",
        Password : "BE45A1792BEE9E6ED57B8A68537B3C6E4CBF",
        To : 'nipaneeducation@gmail.com',
        From : "nipaneeducation@gmail.com",
        Subject : `${username.value} has send message`,
        Body : `${userEmail.value}  ${msg.value}`
    }).then(
        msg =>{
            contactForm.reset()
            if(msg === "OK") alert("msg sent successfuly");
            else alert("msg not sent try again later or mail me at nipaneeducation@gmail.com");
        }
    );
}