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
