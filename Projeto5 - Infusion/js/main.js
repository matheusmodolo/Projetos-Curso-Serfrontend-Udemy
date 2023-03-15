// comparar os arquivos:
// main.js
// menu.js
// index.html
// main.css
// acho q eu não importei alguma coisa no index.html

(function () {
    var $body = document.querySelector("body");
    $body.classList.remove("no-js");
    $body.classList.add("js");

    var menu = new Menu({
        container: ".header__nav",
        toggleBtn: ".header__btnMenu",
        widthEnabled: 1025
    })

})