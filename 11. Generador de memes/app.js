
const $ = (selector) => document.querySelector(selector);

//boton imagen y texto
const imageBtn = $(".imageBtn")
const textBtn = $(".textBtn")

const imageAside = $("#first-aside")
const textAside = $("#second-aside")

const aside = document.querySelectorAll("aside")
imageBtn.addEventListener("click", () => {
    textAside.classList.add("display-none")
    imageAside.classList.remove("display-none")
})

textBtn.addEventListener("click", () => {
    textAside.classList.remove("display-none")
    imageAside.classList.add("display-none")
})

//fondo
const colorinput = $("#blend-mode-color-input")
const selection = $("#blend-mode-select")

selection.addEventListener("change", () => {
    $(".meme-image").style.backgroundBlendMode = selection.value
})

colorinput.addEventListener("input", () => {
    $(".meme-image").style.backgroundColor = colorinput.value
})

// modo claro modo oscuro
const lightButton = $("#light-m")
const darkButton = $("#dark-m")
lightButton.addEventListener("click", () => {
    lightButton.classList.add("display-none")
    darkButton.classList.remove("display-none")
    document.body.classList.remove("dark")
});

darkButton.addEventListener("click", () => {
    lightButton.classList.remove('display-none')
    darkButton.classList.add("display-none")
    document.body.classList.add("dark")
})

// filtros
const brightness = $("#brightness")
const opacity = $("#opacity")
const contrast = $("#contrast")
const blur = $("#blur")
const grayscale = $("#grayscale")
const sepia = $("#sepia")
const hue = $("#hue")
const saturate = $("#saturate")
const invert = $("#invert")

const updateImageFilters = () => {
    const filters = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturate.value}%) invert(${invert.value})`;
    $(".meme-image").style.filter = filters
    $(".top-txt").style.zIndex = 1
   
}

brightness.addEventListener("input", updateImageFilters)
opacity.addEventListener("input", updateImageFilters)
contrast.addEventListener("input", updateImageFilters)
blur.addEventListener("input", updateImageFilters)
grayscale.addEventListener("input", updateImageFilters)
sepia.addEventListener("input", updateImageFilters)
hue.addEventListener("input", updateImageFilters)
saturate.addEventListener("input", updateImageFilters)
invert.addEventListener("input", updateImageFilters)


// reseatear filtros
const resetButton = $(".reset-btn")

resetButton.addEventListener("click", () => {
    brightness.value = 1
    opacity.value = 1
    contrast.value = 100
    blur.value = 0
    grayscale.value = 0
    sepia.value = 0
    hue.value = 0
    saturate.value = 100
    invert.value = 0

    $(".meme-image").style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturate.value}%) invert(${invert.value})`;
});


// Url como background
const infoUrl = $("#url-img-input")
const img = $(".meme-image")

infoUrl.addEventListener("input", () => {
    img.style.backgroundImage = `url(${infoUrl.value})`
})

const topText = $("#top-textarea")
const bottomText = $("#bottom-textarea")


topText.addEventListener("keyup", () => {
    const addedText = topText.value
    $(".top-txt").innerText = addedText
})
bottomText.addEventListener("keyup", () => {
    const addedBottomtxt = bottomText.value
    $(".bottom-txt").innerText = addedBottomtxt
})

// checkbox sin texto
const NotopText = $("#WO-top-txt")

NotopText.addEventListener("change", () => {
    if (NotopText.checked) {
        $(".top-txt").classList.add("display-none")
    } else {
        $(".top-txt").classList.remove("display-none")
    }
})

const NoBottomText = $("#WO-bottom-txt")
NoBottomText.addEventListener("change", () => {
    if (NoBottomText.checked) {
        $(".bottom-txt").classList.add("display-none")
    } else {
        $(".bottom-txt").classList.remove("display-none")

    }
})

//boton de descarga
const downloadMeme = () => {
    domtoimage.toBlob($(".meme-container")
    ).then((blob) => {
        saveAs(blob, "mi-meme.png")
    })
}

$(".download-btn").addEventListener("click", downloadMeme)

//boton de cerrar
const closeTextAside= $("#close-txt-aside")
const closeImageAside= $("#close-img-aside")

closeTextAside.addEventListener("click", ()=> {
    textAside.classList.add("display-none")
})
closeImageAside.addEventListener("click", ()=> {
    imageAside.classList.add("display-none")
})

//seleccionar letra
const changeFontTop = $("#font-select")
changeFontTop.addEventListener("input", () => {
    $(".top-txt").style.fontFamily = changeFontTop.value
})

const changeFontBottom = $("#font-select")
changeFontBottom.addEventListener("input", () => {
    $(".bottom-txt").style.fontFamily = changeFontBottom.value
})


//seleccionar tamanio
const inputNewSize = $("#font-sz")

inputNewSize.addEventListener("input", () => {
    const newFontSize = inputNewSize.value
    $(".top-txt").style.fontSize = `${newFontSize}px`
})
inputNewSize.addEventListener("input", () => {
    const newFontSize = inputNewSize.value
    $(".bottom-txt").style.fontSize = `${newFontSize}px`

})


//botones de alineado
const alignCenterB = $(".align-center")
const alignLeftB = $(".align-left")
const alignRightB = $(".align-right")

alignCenterB.addEventListener("click", () => {
    $(".top-txt").style.textAlign = "center"
})

alignLeftB.addEventListener("click", () => {
    $(".top-txt").style.textAlign = "left"
})

alignRightB.addEventListener("click", () => {
    $(".top-txt").style.textAlign = "right"
})

alignCenterB.addEventListener("click", () => {
    $(".bottom-txt").style.textAlign = "center"
})

alignLeftB.addEventListener("click", () => {
    $(".bottom-txt").style.textAlign = "left"
})

alignRightB.addEventListener("click", () => {
    $(".bottom-txt").style.textAlign = "right"
})

//cambiar text color superior e inferior
const changeTextColor = $("#txt-color")
const changeBgdColor = $("#bgd-color")

changeTextColor.addEventListener("input", () => {
    $(".top-txt").style.color = changeTextColor.value
})
changeTextColor.addEventListener("input", () => {
    $(".bottom-txt").style.color = changeTextColor.value
})

//cambiar color de fondo
changeBgdColor.addEventListener("input", () => {
    $(".top-txt").style.backgroundColor = changeBgdColor.value
})
changeBgdColor.addEventListener("input", () => {
    $(".bottom-txt").style.backgroundColor = changeBgdColor.value
})

//sin fondo
const noBgd = $("#WO-bgn")
noBgd.addEventListener("change", () => {
    if (noBgd.checked) {
        $(".top-txt").style.backgroundColor = "transparent"
        $(".top-txt").style.position = "absolute"
        $(".top-txt").style.top = "0"
        $(".bottom-txt").style.backgroundColor = "transparent"
        $(".bottom-txt").style.position = "absolute"
        $(".bottom-txt").style.bottom = "0"
    } else {
        $(".top-txt").style.backgroundColor = `${changeBgdColor.value}`
        $(".top-txt").style.position = "static"
        $(".bottom-txt").style.backgroundColor = `${changeBgdColor.value}`
        $(".bottom-txt").style.position = "static"
    }
})

// contorno

const NoShadow = $(".txt-shadow-none")
const lightShadow = $(".txt-shadow-light")
const darkShadow = $(".txt-shadow-dark")

NoShadow.addEventListener("click", () => {
    $(".top-txt").style.textShadow = "none"
    $(".bottom-txt").style.textShadow = "none"
})
lightShadow.addEventListener("click", () => {
    $(".top-txt").style.textShadow = "3px 4px 6px rgba(0,0,0,0.45)"
    $(".bottom-txt").style.textShadow = "3px 4px 6px rgba(0,0,0,0.45)"
})

darkShadow.addEventListener("click", () => {
    $(".top-txt").style.textShadow = "6px 6px 7px rgba(9,7,7,0.91)"
    $(".bottom-txt").style.textShadow = "6px 6px 7px rgba(9,7,7,0.91)"
})

//interlineado
const lineHeight = $("#lineHeight")

lineHeight.addEventListener("input", () => {
    $(".top-txt").style.lineHeight = `${lineHeight.value}`
    $(".bottom-txt").style.lineHeight = `${lineHeight.value}`
})

const padding = $("#txt-padding")
padding.addEventListener("click", () => {
    $(".top-txt").style.padding = `${padding.value}px`
    $(".bottom-txt").style.padding = `${padding.value}px`
})

