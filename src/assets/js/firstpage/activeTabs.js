function coloractive(name){
    let parentTabs = document.querySelector('.services__inner__gallery__buttons');
    let tabs = parentTabs.querySelectorAll('button');
    tabs.forEach(element => {
        if(element.textContent == name){
            element.classList.add('active__tabs');
        } ;
    });
}

function disabledactive(){
    let parentTabs = document.querySelector('.services__inner__gallery__buttons');
    let tabs = parentTabs.querySelectorAll('button');
    tabs.forEach(element => {
        element.classList.remove('active__tabs');
    });
}

export function activeTabs(){
    //убираем активный класс со всех табов
    disabledactive();
    //перебираем и сравниваем с названиями табов
    let activeSlide = document.querySelector('.swiper-slide-active');
    let titles = activeSlide.querySelectorAll('.services__inner__gallery__list__category__item__title ');
    titles.forEach(element => {
        let title = element.textContent;

        if(title == 'BILBORD'){
            coloractive('BILBORD');
        }
        else if(title == 'CITY-BANNER'){
            coloractive('CITY-BANNER');
        }
        else if(title == 'BIG SCREEN'){
            coloractive('BIG SCREEN');
        }
    });
}