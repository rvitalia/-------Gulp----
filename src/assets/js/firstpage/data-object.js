import { swiperObject } from "../object/object";
import { getCoordinate, Ymapsinit } from "../object/placemark";

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
                                    <div id="map" class="map">
                                    
                                    </div>
                                </div>
        
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide__object"  style="background-image: url(./assets/images/object/${currentObject.foto1});">
                                 
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide__object"  style="background-image: url(./assets/images/object/${currentObject.foto2});">
                                  
                                </div>
                            </div>
        
        
                        </div>
                        <!-- If we need pagination -->
                        <div class="swiper-pagination"></div>
        
                    </div>
                </div>
            </div>
        </section>
        
        <section class="object">
            <div class="container container-object">
                <div class="object__inner">
                    <h2 class="object__inner__title">${currentObject.title}</h2>
                    <span class="object__inner__text">${currentObject.text}</span>
        
                    <a href="./order.php" class="object__inner__link">Сделать заказ</a>
                </div>
            </div>
        </section>`;

        main.insertAdjacentHTML('beforeend', objectPage);

        //инициализируем слайдер
        swiperObject();

    

        //отрисовываем карту
        Ymapsinit(currentObject);
    }

}

export function receiveData() {
    //проверка локал сторэдж
    if (localStorage.getItem('id')) {
        const itemId = JSON.parse(localStorage.getItem('id'));
        renderDataobject(itemId);
    }
}


