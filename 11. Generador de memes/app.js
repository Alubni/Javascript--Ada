
const $ = (selector) => document.querySelector(selector);

//boton imagen
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

brightness.addEventListener("input", () => {
    document.querySelector(".meme-image").style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturate.value}%) invert(${invert.value})`;
});

opacity.addEventListener("input", () => {
    document.querySelector(".meme-image").style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturate.value}%) invert(${invert.value})`;
});

contrast.addEventListener("input", () => {
    document.querySelector(".meme-image").style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturate.value}%) invert(${invert.value})`;
});

blur.addEventListener("input", () => {
    document.querySelector(".meme-image").style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturate.value}%) invert(${invert.value})`;
});

grayscale.addEventListener("input", () => {
    document.querySelector(".meme-image").style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturate.value}%) invert(${invert.value})`;
});

sepia.addEventListener("input", () => {
    document.querySelector(".meme-image").style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturate.value}%) invert(${invert.value})`;
});

hue.addEventListener("input", () => {
    document.querySelector(".meme-image").style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturate.value}%) invert(${invert.value})`;
});

saturate.addEventListener("input", () => {
    document.querySelector(".meme-image").style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturate.value}%) invert(${invert.value})`;
});
invert.addEventListener("input", () => {
    document.querySelector(".meme-image").style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturate.value}%) invert(${invert.value})`;
});


// reseatear filtros
const resetButton = $(".reset-btn")

resetButton.addEventListener("click", () => {
    brightness.value = 1
    opacity.value = 0
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
const alignCenterB = $(".align-left")
const alignLeftB = $(".align-center")
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
 
