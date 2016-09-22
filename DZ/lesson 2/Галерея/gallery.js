// Берем по id нашу голерею, и записываем ее в переменную
var gallery = document.getElementById("gallery");
// Записываем в переменную по id отображение картинки
var show = document.getElementById("show");


// создаю событие наведения мыши
gallery.onmousemove = function(e) {
    // проверяем тип обьекта
    if ( e.target.nodeName == 'IMG' ) {
        // отображаем блок картинки
        show.style.display = "block";
        // задаем позицию
        show.style.top = e.y -400 + "px";
        show.style.left = e.x + 10 + "px";

        // выбираем изображение из блока c id="show"
        var image = show.querySelector('img');
        // переписываю путь к картинке
        image.src = e.target.attributes.src.nodeValue;
    }
    // функция отвода мыши с блока gallery
    e.target.onmouseout = function (j) {
        show.style.display = "none"
    }
};



/**
 * 1. Игра парные карты http://igroflot.ru/logic/flash_game_2470/
 * 2. Если картинка снизу экрана выводить ее над курсором
 */



