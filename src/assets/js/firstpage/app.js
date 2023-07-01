import Swiper, { Navigation, Pagination } from "swiper";
import { YmapsTotalInit } from "../object/placemark";
import { coloractive, disabledactive } from "./activeTabs";
import { burger } from "./burger";
import { loadData } from "./load&renderdata";
import { modalCallCancel, modalCallOpen } from "./modal";
import { doubleMapClick } from './doubleclick.js'
import { showList } from "./accordon";


export async function swiperSlider() {
    const swiper = new Swiper('.swiper__services', {
        // Optional parameters
        modules: [Navigation, Pagination],
        spaceBetween: 50,
        slidesPerGroup: 1,



        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    //смена слайдо при клике
    let tabs = document.querySelectorAll('.services__inner__gallery__buttons__button');

    tabs.forEach(element => {
        element.addEventListener('click', () => {
            disabledactive();
            if (window.innerWidth >= 900) {
                if (element.dataset.filter == 'bilbord') {
                    swiper.slideTo(0, 400, false);
                    coloractive('БИЛБОРДЫ-ПСКОВ');
                }
                else if (element.dataset.filter == 'city') {
                    swiper.slideTo(11, 400, false)
                    coloractive('СИТИ-ФОРМАТЫ');
                }
                else if (element.dataset.filter == 'big') {
                    swiper.slideTo(15, 400, false);
                    coloractive('СВЕТОДИОДНЫЙ ЭКРАН');
                }
                else if (element.dataset.filter == 'area') {
                    swiper.slideTo(8, 400, false);
                    coloractive('БИЛБОРДЫ-ОБЛАСТЬ');
                }
            }
            else {
                if (element.dataset.filter == 'bilbord') {
                    swiper.slideTo(0, 400, false);
                    doubleMapClick('bilbord-all');
                    coloractive('БИЛБОРДЫ-ПСКОВ');
                }
                else if (element.dataset.filter == 'city') {
                    swiper.slideTo(42, 400, false);
                    doubleMapClick('city-format');
                    coloractive('СИТИ-ФОРМАТЫ');
                }
                else if (element.dataset.filter == 'big') {
                    swiper.slideTo(51, 400, false);
                    coloractive('СВЕТОДИОДНЫЙ ЭКРАН');
                }
                else if (element.dataset.filter == 'area') {
                    swiper.slideTo(34, 400, false);
                    doubleMapClick('bilbord-area');
                    coloractive('БИЛБОРДЫ-ОБЛАСТЬ');
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

//отрисовываем точку на карте
YmapsTotalInit();
//запускаем лист отображения объектов на мобильной ориентации
showList();