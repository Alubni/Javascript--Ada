
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
 

//fondo--


    const colorinput= $("#blend-mode-color-input")
const selection= $("#blend-mode-select")


selection.addEventListener("change", () =>{
    $(".meme-image").style.backgroundBlendMode= selection.value
})

colorinput.addEventListener("input", ()=>{
    $(".meme-image").style.backgroundColor= colorinput.value
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
    brightness.value=1
    opacity.value=1
    contrast.value=100
    blur.value=0
    grayscale.value=0
    sepia.value=0
    hue.value=0
    saturate.value=100
    invert.value=0

    applyFilters()
} )





// Url como background
const infoUrl= $("#url-img-input")
const img= $(".meme-image")

infoUrl.addEventListener("input", (e) => { 
    img.style.backgroundImage= `url(${infoUrl.value})`
}) 

const topText= $("#top-textarea")
 const bottomText= $("#bottom-textarea")


 topText.addEventListener("keyup", () => {
    const addedText= topText.value
    $(".top-txt").innerText= addedText
 })
 bottomText.addEventListener("keyup", () =>{
    const addedBottomtxt= bottomText.value
    $(".bottom-txt").innerText= addedBottomtxt
 })

// checkbox sin texto
 const NotopText= $("#WO-top-txt") 
 
 NotopText.addEventListener("change", () => {
    if(NotopText.checked){
        $(".top-txt").classList.add("display-none")
    }else{
        $(".top-txt").classList.remove("display-none")

    }
 })

const NoBottomText= $("#WO-bottom-txt")
NoBottomText.addEventListener("change", () => {
    if(NoBottomText.checked){
        $(".bottom-txt").classList.add("display-none")
    }else{
        $(".bottom-txt").classList.remove("display-none")

    }
 })

