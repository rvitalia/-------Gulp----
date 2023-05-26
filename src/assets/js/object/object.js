import Swiper, { Navigation, Pagination } from "swiper";
import { burger } from "../firstpage/burger";
import { receiveData } from "../firstpage/data-object";

export function swiperObject() {
    const swiper = new Swiper('.swiper-object', {
        // Optional parameters
        modules: [Pagination],
        spaceBetween: 50,
        slidesPerGroup: 1,



        // pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
    });
}


//добавляем контейнер в header и footer
function addContainer(item) {
    let object = document.querySelector(item);
    let container = object.querySelector('.container');
    container.classList.add('container-object');
}
let insertData = document.querySelector('.insert__data');
if (insertData) {
    addContainer('header');
    addContainer('footer');
}
else{
    let container = document.querySelector('.container');
    if (container.classList.contains('container-object')){
        container.classList.remove('container-object');
    }
}



burger();

//получаем данные из локал сторэдж
receiveData();



