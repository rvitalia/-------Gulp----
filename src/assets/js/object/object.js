import Swiper, {Navigation, Pagination} from "swiper";


const swiper = new Swiper('.swiper-object', {
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

//добавляем контейнер в header и footer
function addContainer (item){
    let object = document.querySelector(item);
    let container = object.querySelector('.container');
    container.classList.add('container-object');
}

addContainer('header');
addContainer('footer');