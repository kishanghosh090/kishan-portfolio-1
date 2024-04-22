
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

// boxex.addEventListener("click", () =>{
//     boxex.classList.toggle('mode-box-ex');
// })
body. style. backgroundColor = "white"

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


