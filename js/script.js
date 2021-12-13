$(document).ready(function() {
    $('.header__menu-burger-button').click(function() {
        $('.header__menu-burger-button').toggleClass('open-menu');
        $('.header__menu-burger-list').toggleClass('open-menu');
    });
});


const modalPetsBtn = $('.pets__button');
const modalClose = $('.modal__close-btn');
const modalMiddleBtn = $('.button__middle');

modalPetsBtn.click(function() {
    $('.modal').show(250);
});

modalClose.click(function() {
    $('.modal').hide(250);
});

modalMiddleBtn.click(function() {
    $('.modal').show(250);
    $('html, body').animate({scrollTop: 0}, 600);
		return false;
});

modalClose.click(function() {
    $('.modal').hide(250);
});


$('.modal').submit(function(event) {
    event.preventDefault();
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        type: 'POST',
        data: $('.modal').serialize(),
        success: function(data) {
            $('.modal').slideUp(300);
        }
    })
});


$('.form').submit(function(event) {
    event.preventDefault();
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        type: 'POST',
        data: $('.form').serialize(),
        success: function(data) {
            $('.form').slideUp(300);
        }
    })
});




let pets = document.querySelectorAll('.pets__button-list');
let bigImg = document.getElementById('bigImg');
let petsName = document.querySelector('.pets__name');

pets.forEach (item => {
    item.addEventListener ('click', event => {
        
        if (event.target.closest('.pets__button-list')){
            const petsText = item.querySelector('.pets__right-text');
            const animal = event.target.closest('.pets__button-list').querySelector('img');
            [animal.src, bigImg.src] = [bigImg.src, animal.src];
            [petsName.textContent, petsText.textContent] = 
                [petsText.textContent, petsName.textContent];
        };
    })
} ) 