// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="ri-close-line"></i>';

    } else {

        menuBtn.innerHTML = '<i class="ri-menu-line"></i>';

    }

});

// Close menu when link is clicked

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.innerHTML = '<i class="ri-menu-line"></i>';

    });

});


// ===============================
// Sticky Navbar Shadow
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Typing Effect
// ===============================

const roles = [

    "Python Full Stack Developer",

    "Frontend Developer",

    "Web Developer",

    "Software Developer"

];

const typingElement = document.querySelector(".hero h3");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent = currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typingElement.textContent = currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length)

                roleIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(

".hero,.about,.skills,.projects,.contact,.project-card,.skill-card,.card"

);

const reveal = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


// ===============================
// Mouse Glow Effect
// ===============================

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});


//======================
// Skills Carousel
//======================

const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".skill-slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");

let index = 0;

function updateSlider() {

    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));

    dots[index].classList.add("active");

}

next.onclick = () => {

    index++;

    if(index >= slides.length)
        index = 0;

    updateSlider();

}

prev.onclick = () => {

    index--;

    if(index < 0)
        index = slides.length - 1;

    updateSlider();

}

dots.forEach((dot,i)=>{

    dot.onclick=()=>{

        index=i;

        updateSlider();

    }

});

// Auto Slide

setInterval(()=>{

    index++;

    if(index>=slides.length)
        index=0;

    updateSlider();

},4000);

/*==================================
VIDEO POPUP
==================================*/

const videoModal = document.getElementById("videoModal");

const projectVideo = document.getElementById("projectVideo");

const watchDemoButtons = document.querySelectorAll(".watch-demo");

const closeVideo = document.querySelector(".close-video");

watchDemoButtons.forEach(button=>{

button.addEventListener("click",function(e){

e.preventDefault();

const videoPath=this.getAttribute("data-video");

projectVideo.src=videoPath;

videoModal.classList.add("show");

projectVideo.play();

});

});

closeVideo.addEventListener("click",()=>{

videoModal.classList.remove("show");

projectVideo.pause();

projectVideo.currentTime=0;

projectVideo.src="";

});

videoModal.addEventListener("click",(e)=>{

if(e.target===videoModal){

videoModal.classList.remove("show");

projectVideo.pause();

projectVideo.currentTime=0;

projectVideo.src="";

}

});