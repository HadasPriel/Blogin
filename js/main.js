'use strict'

// function shwoArrow() {
//     var elArrow = document.querySelector('.main-card button img')
//     elArrow.style.visibility = 'visible'
// }

function toggleMenu() {
    let elMenu = document.querySelector('.header-ul')
    elMenu.classList.toggle('open-menu')
    let elScreen = document.querySelector('.screen')
    elScreen.classList.toggle('dark')
    let elLink = document.querySelector('.a-nav')
    elLink.classList.toggle('for-click')

    let elHamburger = document.querySelector('.hamburger')
    if (elHamburger.innerText === '☰') elHamburger.innerText = 'X'
    else elHamburger.innerText = '☰'
}