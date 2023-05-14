import { swiperObject } from "../object/object";
import { addPlacemark } from "../object/placemark";

export function sendData() {
    let readMores = document.querySelectorAll('[data-object]');
    readMores.forEach(element => {
        element.addEventListener('click', (event) => {
            // event.preventDefault();
            let item = element.closest('.services__inner__gallery__list__category__item ');
            localStorage.setItem('id', JSON.stringify(item.id));
            // console.log(item.id); 
        });
    });
}

export async function renderDataobject(Id) {
    const dataBanners = await fetch('./assets/images/data.json');
    const resultBanners = await dataBanners.json();
    let containerMain = document.querySelector('.main'); 
    if (containerMain.querySelector('.insert__data')) {
        let main = document.querySelector('.insert__data');
        let currentObject = {};

        resultBanners.forEach(element => {
            if (element.id === Id) {
                currentObject = element;
            }
        });
        // console.log(currentObject);

        // const mapMark = addPlacemark(currentObject);
        // console.log(mapMark);

        const objectPage = `
        <div class="container container-object">
            <ul class="breadcrump">
                <li>Главная</li>
                <li>${currentObject.title}</li>
            </ul>
        </div>
        
        
        <section class="slider">
            <div class="container container-object">
                <div class="slider__inner">
                    <!-- Slider main container -->
                    <div class="swiper swiper-object">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                            <!-- Slides -->
                            <div class="swiper-slide">
                                <div class="swiper-slide__object">
                                    <div id="YMapsID" class="YMapsID" style="width:100%; height:650px">
                                    
                                    </div>
                                </div>
        
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide__object">
                                    <picture class="swiper-slide__object__img">
                                        <img src="./assets/images/object/${currentObject.foto1}" alt="${currentObject.name}">
                                    </picture>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide__object">
                                    <picture class="swiper-slide__object__img">
                                        <img src="./assets/images/object/${currentObject.foto2}" alt="${currentObject.name}">
                                    </picture>
                                </div>
                            </div>
        
        
                        </div>
                        <!-- If we need pagination -->
                        <div class="swiper-pagination"></div>
        
                        <!-- If we need navigation buttons -->
                        <div class="swiper-button-prev">
                            <img src="./assets/images/services/arrowleft.svg" alt="arrow">
                        </div>
                        <div class="swiper-button-next">
                            <img src="./assets/images/services/arrowright.svg" alt="arrow">
                        </div>
        
                    </div>
                </div>
            </div>
        </section>
        
        <section class="object">
            <div class="container container-object">
                <div class="object__inner">
                    <h2 class="object__inner__title">${currentObject.title}</h2>
                    <span class="object__inner__text">${currentObject.text}</span>
        
                    <a href="./order.html" class="object__inner__link">Сделать заказ</a>
                </div>
            </div>
        </section>`;

        main.insertAdjacentHTML('beforeend', objectPage);
        swiperObject();
    }

}

export function receiveData() {
    //проверка локал сторэдж
    if (localStorage.getItem('id')) {
        const itemId = JSON.parse(localStorage.getItem('id'));
        renderDataobject(itemId);
    }
}


