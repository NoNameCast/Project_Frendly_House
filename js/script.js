$(document).ready(function() {
    $('.header__menu-burger-button').click(function() {
        $('.header__menu-burger-button').toggleClass('open-menu');
        $('.header__menu-burger-list').toggleClass('open-menu');
    });
});


const modalPetsBtn = $('.pets__button');
const modalTitle = $('.modal__title');

modalPetsBtn.click(function() {
    $('.modal').show(250);
});

$(document).click(function (e) {
    if ($(e.target).is('.modal')) {
        closeModal();
    }
});

$('.modal').submit(function(event) {
    event.preventDefault();
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        type: 'POST',
        data: $('.modal').serialize(),
        success: function(data) {
            modalTitle.text('Спасибо, за Ваше обращение' + data.id)
            $('.modal').slideUp(300);
        }
    })
});

