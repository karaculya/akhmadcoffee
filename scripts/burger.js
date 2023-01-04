document.getElementById('burger').onclick = function () {
    var burger = document.getElementById('burger');
    var menu = document.getElementById('header-nav');
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
}