import { activeTabs } from "./activeTabs";
import { swiperSlider } from "./app";
import { sendData } from "./data-object";

function renderData(arrayBanners) {
    const swiperSlides = document.querySelector('.swiper-wrapper');

    for (let i = 0; i < arrayBanners.length; i += 5) {
        const swiperSlide = `<div class="swiper-slide">
        <!-- ---------------------------slide -------------------------- -->
        <div class="services__inner__gallery__list__category">
            <div class="services__inner__gallery__list__category__left">
                <!-- --------------------------- item -------------------------- -->

                <div class="services__inner__gallery__list__category__item services__inner__gallery__list__category__item--big" id="${arrayBanners[i].id}">
                    <img src="./assets/images/object/${arrayBanners[i].foto1}" alt="${arrayBanners[i].name}">
                    <div class="services__inner__top">
                        <h5
                            class="services__inner__gallery__list__category__item__title services__inner__gallery__list__category__item__title--big">${arrayBanners[i].name}</h5>
                        <span
                            class="services__inner__gallery__list__category__item__subtitle services__inner__gallery__list__category__item__subtitle--big">${arrayBanners[i].title}</span>
                    </div>
                    <div class="services__inner__bottom">
                        <a href="./object.php" data-object 
                            class="services__inner__gallery__list__category__item__button services__inner__gallery__list__category__item__button--big">подробнее</a>
                    </div>
                </div>
            </div>


            <div class="services__inner__gallery__list__category__right">
                <!-- --------------------------- item -------------------------- -->


                <div class="services__inner__gallery__list__category__right__row">
                    <div class="services__inner__gallery__list__category__item" id="${arrayBanners[i + 1].id}">
                        <img src="./assets/images/object/${arrayBanners[i + 1].foto1}" alt="${arrayBanners[i + 1].name}">
                        <div class="services__inner__top">
                            <h5 class="services__inner__gallery__list__category__item__title">${arrayBanners[i + 1].name}</h5>
                            <span
                                class="services__inner__gallery__list__category__item__subtitle">${arrayBanners[i + 1].title}</span>
                        </div>
                        <div class="services__inner__bottom">
                            <a href="./object.php" data-object 
                                class="services__inner__gallery__list__category__item__button">подробнее</a>
                        </div>
                    </div>

                    <!-- --------------------------- item -------------------------- -->


                    <div class="services__inner__gallery__list__category__item" id="${arrayBanners[i + 2].id}">
                        <img src="./assets/images/object/${arrayBanners[i + 2].foto1}" alt="${arrayBanners[i + 2].name}">
                        <div class="services__inner__top">
                            <h5 class="services__inner__gallery__list__category__item__title">${arrayBanners[i + 2].name}</h5>
                            <span
                                class="services__inner__gallery__list__category__item__subtitle">${arrayBanners[i + 2].title}</span>
                        </div>
                        <div class="services__inner__bottom">
                            <a href="./object.php" data-object 
                                class="services__inner__gallery__list__category__item__button">подробнее</a>
                        </div>
                    </div>
                </div>


                <div class="services__inner__gallery__list__category__right__row">
                    <!-- --------------------------- item -------------------------- -->


                    <div class="services__inner__gallery__list__category__item" id="${arrayBanners[i + 3].id}">
                        <img src="./assets/images/object/${arrayBanners[i + 3].foto1}" alt="${arrayBanners[i + 3].name}">
                        <div class="services__inner__top">
                            <h5 class="services__inner__gallery__list__category__item__title">${arrayBanners[i + 3].name}</h5>
                            <span
                                class="services__inner__gallery__list__category__item__subtitle">${arrayBanners[i + 3].title}</span>
                        </div>
                        <div class="services__inner__bottom">
                            <a href="./object.php" data-object 
                                class="services__inner__gallery__list__category__item__button">подробнее</a>
                        </div>
                    </div>

                    <!-- --------------------------- item -------------------------- -->


                    <div class="services__inner__gallery__list__category__item" id="${arrayBanners[i + 4].id}">
                        <img src="./assets/images/object/${arrayBanners[i + 4].foto1}" alt="${arrayBanners[i + 4].name}">
                        <div class="services__inner__top">
                            <h5 class="services__inner__gallery__list__category__item__title">${arrayBanners[i + 4].name}</h5>
                            <span
                                class="services__inner__gallery__list__category__item__subtitle">${arrayBanners[i + 4].title}</span>
                        </div>
                        <div class="services__inner__bottom">
                            <a href="./object.php" data-object 
                                class="services__inner__gallery__list__category__item__button">подробнее</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>`;
        //добавляем в конец нашего списка
        swiperSlides.insertAdjacentHTML('beforeend', swiperSlide);
    }



    arrayBanners.forEach(element => {

    });


}

export async function loadData() {
    const dataBanners = await fetch('./assets/images/data.json');
    const resultBanners = await dataBanners.json();
    renderData(resultBanners);
    // return resultBanners;
    swiperSlider();
    //подсветка active tabs
    //запуск первый раз без нажатия стрелок
    activeTabs();
    //при нажатии стрелок
    let arrows = document.querySelectorAll('[data-arrow]');
    arrows.forEach(element => {
        element.addEventListener('click', () => {
            setTimeout(function () {
                activeTabs();
            }, 100);
        })
    });
    //при нажатии на кнопку подробнее передать id объекта
    sendData();
}
