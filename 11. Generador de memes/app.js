
const $ = (selector) => document.querySelector(selector);

///boton imagen
const imageBtn= $(".imageBtn")
const textBtn= $(".textBtn")

const imageAside= $("#first-aside")
const textAside= $("#second-aside")
 const aside= document.querySelectorAll("aside")
 imageBtn.addEventListener("click", ()=>{
    textAside.classList.add("display-none")
    imageAside.classList.remove("display-none")
 
})
textBtn.addEventListener("click", ()=>{
   
    textAside.classList.remove("display-none")
    imageAside.classList.add("display-none")

 
}) 
 





 // modo claro modo oscuro
const lightButton = $("#light-m")
const darkButton = $("#dark-m")
lightButton.addEventListener("click", ()=>{
    lightButton.classList.add("display-none")
    darkButton.classList.remove("display-none")
    document.body.classList.remove("dark")
});

darkButton.addEventListener("click", ()=>{
    lightButton.classList.remove('display-none')
    darkButton.classList.add("display-none")
    document.body.classList.add("dark")
})