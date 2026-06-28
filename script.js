// ==========================
// MOBILE MENU
// ==========================

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");


hamburger.addEventListener("click",()=>{

nav.classList.toggle("show");

});


// ==========================
// CLOSE MOBILE MENU ON BODY CLICK
// ==========================

document.body.addEventListener("click",(e)=>{


if(
!nav.contains(e.target) &&
!hamburger.contains(e.target)
){

nav.classList.remove("show");

}


});



// close mobile menu when clicking link

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("show");

});

});









// ==========================
// STICKY HEADER EFFECT
// ==========================


const header = document.getElementById("header");


window.addEventListener("scroll",()=>{


if(window.scrollY > 50){

header.style.boxShadow =
"0 10px 30px rgba(0,0,0,.15)";

}

else{

header.style.boxShadow =
"0 5px 20px rgba(0,0,0,.08)";

}


});









// ==========================
// SCROLL REVEAL
// ==========================


const reveals =
document.querySelectorAll(".reveal");


function reveal(){


reveals.forEach(item=>{


const position =
item.getBoundingClientRect().top;


if(position < window.innerHeight - 100){

item.classList.add("active");

}


});


}


window.addEventListener("scroll",reveal);

reveal();









// ==========================
// COUNTER ANIMATION
// ==========================


const counters =
document.querySelectorAll("[data-count]");


let counterStarted=false;


function startCounter(){


if(counterStarted) return;


const section =
document.querySelector(".stats");


const top =
section.getBoundingClientRect().top;


if(top < window.innerHeight){


counterStarted=true;



counters.forEach(counter=>{


let target =
Number(counter.dataset.count);


let current=0;


let speed =
target / 100;



let update = setInterval(()=>{


current += speed;


if(current >= target){

counter.innerText =
target.toLocaleString();

clearInterval(update);

}

else{

counter.innerText =
Math.floor(current).toLocaleString();

}


},20);



});

}



}



window.addEventListener(
"scroll",
startCounter
);













// ==========================
// CONTACT FORM VALIDATION
// ==========================








// ==========================
// BACK TO TOP BUTTON
// ==========================


const topBtn =
document.getElementById("top");



window.addEventListener("scroll",()=>{


if(window.scrollY > 400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}


});




topBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});











// ==========================
// LAZY IMAGE FALLBACK
// ==========================


document
.querySelectorAll("img")
.forEach(img=>{


img.addEventListener("error",()=>{


img.src =
"https://via.placeholder.com/600x400";


});


});

