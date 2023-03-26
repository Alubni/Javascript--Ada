
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

// filtros

const brightness=$("#brightness")
const opacity=$("#opacity" )
const contrast=$("#contrast" )
const blur=$("#blur")
const grayscale=$("#grayscale")
const sepia=$("#sepia")
const hue=$("#hue")
const saturate=$("#saturate")
const invert=$("#invert")
const applyFilters= () =>{
    const filters= `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturate.value}%) invert(${invert.value})`;


    $(".meme-image").style.filter= filters
}

brightness.addEventListener("input", applyFilters)
opacity.addEventListener("input", applyFilters)
contrast.addEventListener("input", applyFilters)
blur.addEventListener("input", applyFilters)
grayscale.addEventListener("input", applyFilters)
sepia.addEventListener("input", applyFilters)
hue.addEventListener("input", applyFilters)
saturate.addEventListener("input", applyFilters)
invert.addEventListener("input", applyFilters)


// reseatear filtros
const resetButton= $(".reset-btn")

resetButton.addEventListener("click", () =>{
    const filters= `brightness(1) opacity(1) contrast(100%) blur(0px) grayscale(0%) sepia(0%) hue-rotate(0deg) saturate(100%) invert(0)`;


    $(".meme-image").style.filter= filters

} )





// Url como background
const infoUrl= $("#url-img-input")
const img= $(".meme-image")

infoUrl.addEventListener("input", (e) => { 
    img.style.backgroundImage= `url(${infoUrl.value})`
}) 
