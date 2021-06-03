addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn-menu')

    btn_menu.addEventListener('click', () => {
         const navbar_opciones = document.querySelector('.navbar-opciones')
         navbar_opciones.classList.toggle('active')
    })
})