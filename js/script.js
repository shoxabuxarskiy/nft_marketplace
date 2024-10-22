'use strict';

document.addEventListener('DOMContentLoaded', e => {
    const menu = document.querySelector('.header_menu'),
          btn = document.querySelector('.header_burger');

    btn.addEventListener('click', e => {
        menu.classList.toggle('header_menu_active');
        btn.classList.toggle('header_burger_active');
    })
})