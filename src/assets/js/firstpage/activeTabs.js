export function coloractive(name){
    let parentTabs = document.querySelector('.services__inner__gallery__buttons');
    let tabs = parentTabs.querySelectorAll('button');
    tabs.forEach(element => {
        if(element.textContent == name){
            element.classList.add('active__tabs');
        } ;
    });
}

export function disabledactive(){
    let parentTabs = document.querySelector('.services__inner__gallery__buttons');
    let tabs = parentTabs.querySelectorAll('button');
    tabs.forEach(element => {
        element.classList.remove('active__tabs');
    });
}

export async function activeTabs(){
    //убираем активный класс со всех табов
    disabledactive();
    //перебираем и сравниваем с названиями табов
    let activeSlide = document.querySelector('.swiper-slide-active');
    let titles = activeSlide.querySelectorAll('.services__inner__gallery__list__category__item__title ');

    titles.forEach(element => {
        let title = element.dataset.name;

        if(title == 'БИЛБОРДЫ-ПСКОВ'){
            coloractive('БИЛБОРДЫ-ПСКОВ');
        }
        else if(title == 'СИТИ-ФОРМАТЫ'){
            coloractive('СИТИ-ФОРМАТЫ');
        }
        else if(title == 'СВЕТОДИОДНЫЙ ЭКРАН'){
            coloractive('СВЕТОДИОДНЫЙ ЭКРАН');
        }
        else if(title == 'БИЛБОРДЫ-ОБЛАСТЬ'){
            coloractive('БИЛБОРДЫ-ОБЛАСТЬ');
        }
    });
}