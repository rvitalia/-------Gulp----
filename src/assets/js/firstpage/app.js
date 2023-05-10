import Swiper, {Navigation, Pagination} from "swiper";
import { modalCallCancel, modalCallOpen } from "./modal";


const swiper = new Swiper('.swiper__services', {
    // Optional parameters
    modules: [Navigation,Pagination],
    spaceBetween: 50,
    slidesPerGroup: 1,



    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    // Responsive breakpoints
    // breakpoints: {
    //     // when window width is >= 320px
    //     250: {
    //         slidesPerView: 1,
    //     },
    //     // when window width is >= 480px
    //     680: {
    //         slidesPerView: 2,
    //     },
    //     // when window width is >= 640px
    //     950: {
    //         slidesPerView: 3,
            
    //     },
    //     1150: {
    //         slidesPerView: 4,
    //     }
    // }
});

//открытие и закрытие модального окна обратной связи
modalCallOpen();
modalCallCancel();
