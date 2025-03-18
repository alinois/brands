// ОТСЛЕЖИВАНИЕ БУЛЛЕТА
let slidesContainer = document.querySelector('.brend-list__logo');
let bullets = document.querySelectorAll('.bullet');
let slides = document.querySelectorAll('.slide');

let slideWidth = 260;
let currentIndex = 0; 

function updateBullets() {
    let index = Math.round(Math.abs(slidesContainer.scrollLeft) / slideWidth);
    if (index !== currentIndex) {
        currentIndex = index;
        document.querySelector('.bullet.active').classList.remove('active');
        bullets[currentIndex].classList.add('active');
    }
}

slidesContainer.addEventListener('scroll', updateBullets);

// ПОКАЗ ЭЕЛЕМЕНТОВ
let button = document.querySelector('.brend-list__show-button');
let btntext = document.querySelector('.show-btn');
let rotate = document.querySelector('.arrows-top');
let brends = document.querySelector('.brend-list__logo')
button.onclick = function () {
    if (button.classList.contains('close-btn')) {

        brends.classList.remove('closed-brend-list')
        button.classList.remove('close-btn')
        rotate.classList.remove('non-rot')

        brends.classList.add('open-brend-list')
        button.classList.add('open-btn')
        rotate.classList.add('rot')

        btntext.value = 'Скрыть'
} else {
    brends.classList.remove('open-brend-list')
    button.classList.remove('open-btn')
    rotate.classList.remove('rot')

    brends.classList.add('closed-brend-list')
    button.classList.add('close-btn')
    rotate.classList.add('non-rot')
    
    btntext.value = 'Показать все'
}

}