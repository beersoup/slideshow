const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg"
]


images.map((image) => {
    const sliderWrapper = document.getElementById('slider-wrapper')
    const list = document.createElement("li")
    const img = document.createElement("img")
    img.src = image
    const slideItem = sliderWrapper.appendChild(list)
    slideItem.appendChild(img)
})

const sliderWrapper = document.getElementById('slider-wrapper')
const slider = document.getElementById('slider')
const prevBtn = document.getElementById('btn-prev')
const nextBtn = document.getElementById('btn-next')
const count = slider.querySelectorAll('li').length
const sliderWidth = slider.offsetWidth

prevBtn.addEventListener('click', ClickPrev)
nextBtn.addEventListener('click', ClickNext)


function changeSlidePosition (i, marginLeft, position) {

    const slideToChange = slider.querySelectorAll('.slider-wrapper > li')[i]

    slideToChange.style.marginLeft = marginLeft

    slider.querySelector('.slider-wrapper').removeChild(slideToChange)

    slider.querySelector('.slider-wrapper').insertAdjacentHTML(position, slideToChange.outerHTML)
}

changeSlidePosition(count - 1, `-${sliderWidth}px`, 'afterBegin')


function ClickPrev() {
    slidePrev(slider.querySelectorAll('.slider-wrapper > li')[0])
    changeSlidePosition(count - 1, `-${sliderWidth}px`, 'afterBegin')
}


function ClickNext () {
    slideNext(slider.querySelectorAll('.slider-wrapper > li')[1])
    changeSlidePosition(0, '', 'beforeEnd')
}


function slidePrev(item) {
    item.style.marginLeft = ''
}

function slideNext(item) {
    item.style.marginLeft = `-${sliderWidth}px`
}


sliderWrapper.addEventListener('mouseover', stopAutoPlay)
prevBtn.addEventListener('mouseover', stopAutoPlay)
nextBtn.addEventListener('mouseover', stopAutoPlay)
sliderWrapper.addEventListener('mouseout', startAutoPlay)


let autoPlay = setInterval(ClickNext, 2000)


function stopAutoPlay() {
    autoPlay = clearInterval(autoPlay)
}

function startAutoPlay() {
    autoPlay = setInterval(ClickNext, 2000)
}





