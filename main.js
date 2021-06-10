// CONSTANTES
const btn_menu = document.querySelector('.btn-menu')
const formulario = document.querySelector('#formulario');
const slider = document.querySelector('#slider');
const inputs = document.querySelectorAll('#formulario input');
const textarea = document.querySelector('#formulario textarea');
const expressions = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	asunto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    mensaje: /^[a-zA-ZÀ-ÿ\s]{4,1000}$/
}

const validaciones = {
    nombre: false,
	correo: false,
	asunto: false,
    mensaje: false
}
// FIN DE LAS CONSTANTES

// EVENTOS CON BOTONES
btn_menu.addEventListener('click', () => {
    const navbar_opciones = document.querySelector('.navbar-opciones')
    navbar_opciones.classList.toggle('active')
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if(validaciones.nombre && validaciones.correo && validaciones.asunto && validaciones.mensaje) {
        formulario.reset();
        document.getElementById('nombre').classList.remove('valido');
        document.getElementById('ico-nombre').classList.remove('fa-check');
        document.getElementById('asunto').classList.remove('valido');
        document.getElementById('ico-asunto').classList.remove('fa-check');
        document.getElementById('correo').classList.remove('valido');
        document.getElementById('ico-correo').classList.remove('fa-check');
        document.getElementById('mensaje').classList.remove('valido');
    } else {
        e.preventDefault();
        Swal.fire({
            icon: 'error',
            iconColor: 'red',
            title: '<h2 class="popup__titulo">Error en formulario</h2>',
            titleColor: 'white',
            html: '<h4 class="popup__texto">Por favor verifique los datos ingresados</h4>',
            background: 'rgb(48, 48, 48)',
            confirmButtonColor: 'rgb(1, 165, 1)',
            allowOutsideClick: false,
            stopKeydownPropagation: false
          });
    }
})

// FIN EVENTOS CON BOTONES

// CONFIGURACIÓN DEL SLIDER
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next() {
    let sliderSectionFirts = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'ease all 1.5s';
    setTimeout(function(){
        slider.insertAdjacentElement('beforeend', sliderSectionFirts);
        slider.style.transition = 'none';
        slider.style.marginLeft = '-100%';
    }, 2000);
}

setInterval(function() {
    next()
}, 10000)
// FIN DE CONFIGURACIÓN DEL SLIDER



// VALIDACIONES DEL FORMULARIO
const validarCampo = (expression, target, campo) => {
    if (expression.test(target)) {
        document.getElementById(campo).classList.remove('invalido');
        document.getElementById(`ico-${campo}`).classList.remove('fa-times');
        document.getElementById(campo).classList.add('valido');
        document.getElementById(`ico-${campo}`).classList.add('fa-check');
        validaciones[campo] = true;
    } else {
        document.getElementById(campo).classList.add('invalido');
        document.getElementById(`ico-${campo}`).classList.add('fa-times');
        validaciones[campo] = false;
    }
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'Nombre':
            validarCampo(expressions.nombre, e.target.value, 'nombre')
            break;
        case 'Correo':
            validarCampo(expressions.correo, e.target.value, 'correo')
            break;
        case 'Asunto':
            validarCampo(expressions.asunto, e.target.value, 'asunto')
            break;
        case 'Mensaje':
            if (expressions.mensaje.test(e.target.value)) {
                document.getElementById('mensaje').classList.remove('invalido');
                document.getElementById('mensaje').classList.add('valido');
                validaciones['mensaje'] = true;
            } else {
                document.getElementById('mensaje').classList.add('invalido');
                validaciones['mensaje'] = false;
            }
            break;
        
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

textarea.addEventListener('keyup', validarFormulario);
textarea.addEventListener('blur', validarFormulario);


// FIN VALIDACIONES DEL FORMULARIO