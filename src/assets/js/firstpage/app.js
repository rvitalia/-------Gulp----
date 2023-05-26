import Swiper, { Navigation, Pagination } from "swiper";
import { coloractive, disabledactive } from "./activeTabs";
import { burger } from "./burger";
import { loadData } from "./load&renderdata";
import { modalCallCancel, modalCallOpen } from "./modal";


export function swiperSlider() {
    const swiper = new Swiper('.swiper__services', {
        // Optional parameters
        modules: [Navigation, Pagination],
        spaceBetween: 50,
        slidesPerGroup: 1,



        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //смена слайдо при клике

    let tabs = document.querySelectorAll('.services__inner__gallery__buttons__button');

    tabs.forEach(element => {
        element.addEventListener('click', () => {
            disabledactive();
            if (window.innerWidth >= 900) {
                if (element.dataset.filter == 'bilbord') {
                    swiper.slideTo(1, 400, false);
                    coloractive('BILBORD');
                }
                else if (element.dataset.filter == 'city') {
                    swiper.slideTo(8, 400, false)
                    coloractive('CITY-BANNER');
                }
                else if (element.dataset.filter == 'big') {
                    swiper.slideTo(9, 400, false);
                    coloractive('BIG SCREEN');
                }
            }
            else {
                if (element.dataset.filter == 'bilbord') {
                    swiper.slideTo(1, 400, false);
                    coloractive('BILBORD');
                }
                else if (element.dataset.filter == 'city') {
                    swiper.slideTo(40, 400, false);
                    coloractive('CITY-BANNER');
                }
                else if (element.dataset.filter == 'big') {
                    swiper.slideTo(45, 400, false);
                    coloractive('BIG SCREEN');
                }
            }
        })
    });
}


//открытие и закрытие модального окна обратной связи
modalCallOpen();
modalCallCancel();

//вызов бургера
burger();

//загрузка данных Json
loadData();


