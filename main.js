addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn-menu')
    

    btn_menu.addEventListener('click', () => {
         const navbar_opciones = document.querySelector('.navbar-opciones')
         navbar_opciones.classList.toggle('active')
    })
})

const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next() {
    let sliderSectionFirts = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirts);
        slider.style.marginLeft = '-100%';
    }, 500);
}

setInterval(function() {
    next()
}, 4000)