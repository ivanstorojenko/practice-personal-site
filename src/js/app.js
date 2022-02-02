import * as flsFunctions from "./modules/functions.js"

//дожидаемся полной загрузки страницы
window.onload = function () {

    flsFunctions.isWebp();

    var menu = document.querySelector('.menu');
    var menuButton = document.querySelector('.menu-button');
    var langMenu = document.querySelector('.lang-menu');
    
    menuButton.onclick = function() {
        this.classList.toggle('menu-button_active');
        menu.classList.toggle('menu_active');
        langMenu.classList.toggle('lang-menu_active');
        if(menuButton.classList.contains('menu-button_active')) {
            document.body.style = 'overflow: hidden';
        } else {
            document.body.style = 'overflow: ';
        }
    };

}