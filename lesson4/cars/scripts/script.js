console.log('Работает.')

// document.querySelector('.main-title').color = 'red';
// document.getElementsByClassName('main-title')[0].style.color = 'red';
document.getElementById('main-action').onclick = function () {
    document.getElementById('cars').scrollIntoView({behavior: "smooth"});
};

var buttons = document.getElementsByClassName('car-button');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById('price').scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById('price-action').onclick = function () {
    if (document.getElementById('name').value === '') {
        alert('Заполните поле имя!');
    } else if (document.getElementById('phone').value === '') {
        alert('Заполните поле телефон!');
    } else if (document.getElementById('car').value === '') {
        alert('Заполните поле автомобиль!');
    }else {
        alert('Спасибо за заявку, мы свяжемся с Вами в ближайшее время.');
    }
}