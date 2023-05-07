let bodyPixels = document.querySelector('#body-pixels')
let pixelsWidth = document.querySelector('#number-width')
let addPixels = document.querySelector('#add-pixels')
let clean = document.querySelector('#clean-button')
let colors = document.querySelectorAll('.color')
let currentColor = document.querySelector('.current-color')
let colorRandom = document.querySelector('.favColor')

let pixelsSize = pixelsWidth.value * 2

//Função que determina a quantidade de pixels:
const changePixelBodySize = () => {  
    let size = 0
    if (pixelsWidth.value == "" || pixelsWidth.value < 5 || pixelsWidth.value > 40){
        window.alert("O valor da largura precisa ser um número entre 5 e 30!")
    } else {
        for (let index = 0; index < pixelsWidth.value; index++) {
            let linha = document.createElement('tr');
            linha.classList.add('pixel');
            linha.style.backgroundColor = "white"
            bodyPixels.appendChild(linha)
            for (let i = 0; i < pixelsWidth.value * 2; i++) {
                let coluna = document.createElement('td')
                coluna.classList.add('pixel')
                coluna.style.backgroundColor = "white"
                linha.appendChild(coluna)
            }
        }
    }
}

//Função que limpa os pixels
const cleanPixels = () => {
    let pixels = document.querySelectorAll('.pixel')
    pixels.forEach((pix) => {
        pix.style.backgroundColor = "white"
    })
}

//Função que seleciona a cor escolhida
const selectColor = () => {
    for (let index = 0; index < colors.length; index ++ ) {
        colors[index].addEventListener('click' , (event) => {
            if (event.target.type === "button") {
                currentColor.style.backgroundColor = event.target.style.backgroundColor
            } else {
                currentColor.style.backgroundColor = colorRandom.value
            }
        })
    }
}

bodyPixels.addEventListener('click', (event) => {
    event.target.style.backgroundColor = currentColor.style.backgroundColor
})

selectColor()
clean.addEventListener('click', cleanPixels)
addPixels.addEventListener('click' , changePixelBodySize)


