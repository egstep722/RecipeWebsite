'use strict';

// carousel 
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const picItems = Array.from(document.querySelectorAll('.pic-item'));
const CAROUSEL_SIZE = picItems.length;

leftBtn.addEventListener('click', swipe);
rightBtn.addEventListener('click', swipe);

function swipe(e){
    const currentCarouselItem = document.querySelector('.pic-item.active');
    const currentIndex = picItems.indexOf(currentCarouselItem);
    let nextIndex;
    
    if(e.currentTarget.classList.contains('left')){
        if(currentIndex === 0){
            nextIndex = CAROUSEL_SIZE - 1;
        }
        else{
            nextIndex = currentIndex - 1;
        }
    }
    else {
        if(currentIndex === CAROUSEL_SIZE - 1){
            nextIndex = 0;
        }
        else{
            nextIndex = currentIndex + 1;
        }
    }
    picItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
    currentCarouselItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');
};


const navItems = Array.from(document.querySelectorAll('.nav-item'));
const NAV_SIZE = navItems.length;
const carouselNav = document.querySelector('.nav-item');

carouselNav.addEventListener('click', navSwipe);

function navSwipe(e){
    console.log(e.id);
    const currentCarouselItem = document.querySelector('.pic-item.active');
    const currentIndex = picItems.indexOf(currentCarouselItem);

    let index = parseInt(e.id);

    picItems[index].classList.add('active');
    navItems[index].classList.add('active');
    currentCarouselItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');
};




