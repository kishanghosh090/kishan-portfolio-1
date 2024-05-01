let fabars = document.querySelector(".fa-bars")
let faxmark = document.querySelector(".fa-xmark")

fabars.style.display = "inline"
faxmark.style.display = "none"
fabars.addEventListener("click" , () =>{
    fabars.style.display = "none";
    faxmark.style.display = "inline"
})
faxmark.addEventListener("click", () => {
    faxmark.style.display = "none"
    fabars.style.display = "inline"
    
})


const text = document.querySelector(".first-text")
const textLoad = () =>{
    setTimeout(() =>{
        text.textContent = "Freelancer";
    }, 0)
    setTimeout(() =>{
        text.textContent = "Devloper";
    }, 4000)
    setTimeout(() =>{
        text.textContent = "Enterpreneur";
    }, 8000)
    setTimeout(() =>{
        text.textContent = "Youtuber";
    }, 12000)
    
}
textLoad();
setInterval(textLoad, 16000);

let boxex = document.querySelector(".mode-box-ex");
let body = document.querySelector("body")
let firstsection = document.querySelector(".firstsection")

// boxex.addEventListener("click", () =>{
//     boxex.classList.toggle('mode-box-ex');
// })
body. style. backgroundColor = "white"
// firstsection.style.backgroundColor = "rgb(17 24 39)"
boxex.addEventListener("click", () =>{
    if(body. style. backgroundColor === "white"){
        body. style. backgroundColor = "rgb(17 24 39)";
        boxex.classList.toggle('mode-box-ex');
        body. style. backgroundColor = "rgb(17 24 39)";
        
    }else{
        body. style. backgroundColor = "rgb(17 24 39)";
        boxex.classList.toggle('mode-box-ex');
        body. style. backgroundColor = "white";
       
    }
})



let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let rightNav = document.querySelector('.rightNav')
let navlist = document.querySelector('.nav-list')

burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav');
    navlist.classList.toggle('v-class');
})


