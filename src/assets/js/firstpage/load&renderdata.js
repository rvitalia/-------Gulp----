import { activeTabs } from "./activeTabs";
import { swiperSlider } from "./app";
import { sendData } from "./data-object";

function renderData(arrayBanners) {
    const swiperSlides = document.querySelector('.swiper-wrapper');

    if (window.innerWidth >= 900) {

        function renderForSlider(index1, index2) {
            for (let i = index1; i < arrayBanners.length - index2; i += 5) {
                const swiperSlide = `<div class="swiper-slide">
                    <!-- ---------------------------slide -------------------------- -->
                    <div class="services__inner__gallery__list__category">
                        <div class="services__inner__gallery__list__category__left">
                            <!-- --------------------------- item -------------------------- -->
            
                            <div class="services__inner__gallery__list__category__item services__inner__gallery__list__category__item--big" id="${arrayBanners[i].id}" style="background-image: url(./assets/images/creativSlide/${arrayBanners[i].foto3});">
                            
                                <div class="services__inner__top">
                                    <h5
                                        class="services__inner__gallery__list__category__item__title services__inner__gallery__list__category__item__title--big"  data-name="${arrayBanners[i].name}">${arrayBanners[i].titlepresent}</h5>
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
                                <div class="services__inner__gallery__list__category__item" id="${arrayBanners[i + 1].id}" style="background-image: url(./assets/images/creativSlide/${arrayBanners[i + 1].foto3});">
                                    <div class="services__inner__top">
                                        <h5 class="services__inner__gallery__list__category__item__title"  data-name="${arrayBanners[i + 1].name}">${arrayBanners[i + 1].titlepresent}</h5>
                                        <span
                                            class="services__inner__gallery__list__category__item__subtitle">${arrayBanners[i + 1].title}</span>
                                    </div>
                                    <div class="services__inner__bottom">
                                        <a href="./object.php" data-object 
                                            class="services__inner__gallery__list__category__item__button">подробнее</a>
                                    </div>
                                </div>
            
                                <!-- --------------------------- item -------------------------- -->
            
            
                                <div class="services__inner__gallery__list__category__item" id="${arrayBanners[i + 2].id}" style="background-image: url(./assets/images/creativSlide/${arrayBanners[i + 2].foto3});">
                                    <div class="services__inner__top">
                                        <h5 class="services__inner__gallery__list__category__item__title"  data-name="${arrayBanners[i + 2].name}">${arrayBanners[i + 2].titlepresent}</h5>
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
            
            
                                <div class="services__inner__gallery__list__category__item" id="${arrayBanners[i + 3].id}" style="background-image: url(./assets/images/creativSlide/${arrayBanners[i + 3].foto3});">
                                    <div class="services__inner__top">
                                        <h5 class="services__inner__gallery__list__category__item__title"  data-name="${arrayBanners[i + 3].name}">${arrayBanners[i + 3].titlepresent}</h5>
                                        <span
                                            class="services__inner__gallery__list__category__item__subtitle">${arrayBanners[i + 3].title}</span>
                                    </div>
                                    <div class="services__inner__bottom">
                                        <a href="./object.php" data-object 
                                            class="services__inner__gallery__list__category__item__button">подробнее</a>
                                    </div>
                                </div>
            
                                <!-- --------------------------- item -------------------------- -->
            
            
                                <div class="services__inner__gallery__list__category__item" id="${arrayBanners[i + 4].id}" style="background-image: url(./assets/images/creativSlide/${arrayBanners[i + 4].foto3}">
                                    <div class="services__inner__top">
                                        <h5 class="services__inner__gallery__list__category__item__title"  data-name="${arrayBanners[i + 4].name}">${arrayBanners[i + 4].titlepresent}</h5>
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
        }
        //отдельная функция для последнего слайда билборд-область с тремя бордами
        function renderForSlideArea(index1, index2) {

            for (let i = index1; i < arrayBanners.length - index2; i += 3) {
                const swiperSlide = `<div class="swiper-slide">
                    <!-- ---------------------------slide -------------------------- -->
                    <div class="services__inner__gallery__list__category">
                        <div class="services__inner__gallery__list__category__left">
                            <!-- --------------------------- item -------------------------- -->
            
                            <div class="services__inner__gallery__list__category__item services__inner__gallery__list__category__item--big" id="${arrayBanners[i].id}" style="background-image: url(./assets/images/creativSlide/${arrayBanners[i].foto3});">
                            
                                <div class="services__inner__top">
                                    <h5
                                        class="services__inner__gallery__list__category__item__title services__inner__gallery__list__category__item__title--big"  data-name="${arrayBanners[i].name}">${arrayBanners[i].titlepresent}</h5>
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
                                <div class="services__inner__gallery__list__category__item services__inner__gallery__list__category__item--area" id="${arrayBanners[i + 1].id}" style="background-image: url(./assets/images/creativSlide/${arrayBanners[i + 1].foto3});">
                                    <div class="services__inner__top">
                                        <h5 class="services__inner__gallery__list__category__item__title  data-name="${arrayBanners[i + 1].name}"">${arrayBanners[i + 1].titlepresent}</h5>
                                        <span
                                            class="services__inner__gallery__list__category__item__subtitle">${arrayBanners[i + 1].title}</span>
                                    </div>
                                    <div class="services__inner__bottom">
                                        <a href="./object.php" data-object 
                                            class="services__inner__gallery__list__category__item__button text__center">подробнее</a>
                                    </div>
                                </div>
                            </div>
                             
            
            
                            <div class="services__inner__gallery__list__category__right__row">
                                <!-- --------------------------- item -------------------------- -->
            
            
                                <div class="services__inner__gallery__list__category__item services__inner__gallery__list__category__item--area" id="${arrayBanners[i + 2].id}" style="background-image: url(./assets/images/creativSlide/${arrayBanners[i + 2].foto3});">
                                    <div class="services__inner__top">
                                        <h5 class="services__inner__gallery__list__category__item__title  data-name="${arrayBanners[i + 2].name}"">${arrayBanners[i + 2].titlepresent}</h5>
                                        <span
                                            class="services__inner__gallery__list__category__item__subtitle">${arrayBanners[i + 2].title}</span>
                                    </div>
                                    <div class="services__inner__bottom">
                                        <a href="./object.php" data-object 
                                            class="services__inner__gallery__list__category__item__button text__center">подробнее</a>
                                    </div>
                                </div>            
                            </div>
                        </div>
            
                    </div>
                </div>`;

                //добавляем в конец нашего списка
                swiperSlides.insertAdjacentHTML('beforeend', swiperSlide);
            }
        }
        //создаем слайды в нужной нам очередности
        const bilbordPresent = addSlide('11А1.jpg', 'bilbordmap', 'БИЛБОРД-ПСКОВ', false);
        swiperSlides.insertAdjacentHTML('beforeend', bilbordPresent);
        renderForSlider(0, 18);//второе значение - это от максимальной длины массива отнять нужное количество

        const bilbordAreaPresent = addSlide('5А.jpg', 'bilbordareamap', 'БИЛБОРДЫ-ОБЛАСТЬ', false);
        swiperSlides.insertAdjacentHTML('beforeend', bilbordAreaPresent);
        renderForSlider(35, 12);
        renderForSlideArea(40, 9);


        const cityFormatPresent = addSlide('city.jpg', 'mapcity', 'СИТИ-ФОРМАТ', false);
        swiperSlides.insertAdjacentHTML('beforeend', cityFormatPresent);
        renderForSlider(43, 4);
        renderForSlideArea(48, 1);

        const bigScreenPresent = addSlide('ekran3.jpg', 'mapbigscreen', 'СВЕТОДИОДНЫЙ ЭКРАН', true);
        swiperSlides.insertAdjacentHTML('beforeend', bigScreenPresent);

        loadMaps();
    }
    else {
        arrayBanners.forEach(element => {
            const swiperSlide = ` <div class="swiper-slide">
                <div class="services__inner__gallery__list__category__item services__inner__gallery__list__category__item__mobile" id="${element.id}" style="background-image: url(./assets/images/mobile/${element.foto4});">
                <div class="services__inner__top">
                    <h5 class="services__inner__gallery__list__category__item__title" data-name="${element.name}">${element.titlepresent}</h5>
                    <span
                        class="services__inner__gallery__list__category__item__subtitle">${element.title}</span>
                </div>
                <div class="services__inner__bottom servises__nobackdrop">
                    <a href="./object.php" data-object 
                        class="services__inner__gallery__list__category__item__button text__center__mobile">подробнее</a>
                </div>
            </div>
        </div>`;

            //добавляем в конец нашего списка
            swiperSlides.insertAdjacentHTML('beforeend', swiperSlide);
        });
    }
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


export async function addSlideCity(mapsName, arrayType) {


    function cityInit() {
        let map = new ymaps.Map(mapsName, {
            center: [57.814787, 28.294692],
            zoom: 11
        });

        //Создаём коллекцию 
        let myCollection = new ymaps.GeoObjectCollection({}, {
            preset: "islands#redStretchyIcon",
            strokeWidth: 4,
            geodesic: true
        });

        arrayType.forEach(element => {
            let array = [];
            let cordinate = element.maps;
            //создаем массив и переводим в числовое значение избавляясь от кавычек
            let data = cordinate.split(',');
            array[0] = Number(data[0]);
            array[1] = Number(data[1]);
            //обрежем название
            let fullname = element.title;
            let name = fullname.split('.');
            let title = name[0];

            myCollection.add(new ymaps.Placemark(array,
                {
                    iconContent: title,
                },
                { preset: "islands#redStretchyIcon" }));

            //вывод коллекции на карту
            map.geoObjects.add(myCollection);

            // Масштабируем карту так, чтобы коллекция влезала на экран
            map.setBounds(myCollection.getBounds(), { checkZoomRange: true });
        });
    }
    ymaps.ready(cityInit);
}

function addSlide(name, mapName, title, flag) {

    if (flag == false) {
        const swiperSlide = `
        <div class="swiper-slide">
        <!-- ---------------------------slide -------------------------- -->
        <div class="services__inner__gallery__list__category">
            <div class="services__inner__gallery__list__category__left">
                <!-- --------------------------- item -------------------------- -->

                <div class="services__inner__gallery__list__category__item services__inner__gallery__list__category__item--big" id="" style="background-image: url(./assets/images/slide/${name});">
                
                    <div class="services__inner__top">
                        <h5
                            class="services__inner__gallery__list__category__item__title services__inner__gallery__list__category__item__title--big" data-name="${title}">${title}</h5>
                            <!-- <span
                            class="services__inner__gallery__list__category__item__subtitle services__inner__gallery__list__category__item__subtitle--big">Сити-формат №13. Россия, г.Псков, ул.Советская напротив д. №7</span>-->
                    </div>
                    <div class="services__inner__bottom">
                    <!-- <a href="./object.php" data-object 
                            class="services__inner__gallery__list__category__item__button services__inner__gallery__list__category__item__button--big">подробнее</a>-->
                    </div>
                </div>
            </div>


            <div class="services__inner__gallery__list__category__right">
                <!-- --------------------------- map -------------------------- -->
                <div class="slider__inner__mapcity mapslider ${mapName}" id="${mapName}">

                </div>  
            </div>

        </div>
        </div>`;
        return swiperSlide;
    }
    else{
        const swiperSlide = `
        <div class="swiper-slide">
        <!-- ---------------------------slide -------------------------- -->
        <div class="services__inner__gallery__list__category">
            <div class="services__inner__gallery__list__category__left">
                <!-- --------------------------- item -------------------------- -->

                <div class="services__inner__gallery__list__category__item services__inner__gallery__list__category__item--big" id="Diod-1" style="background-image: url(./assets/images/slide/${name});">
                
                    <div class="services__inner__top">
                        <h5
                            class="services__inner__gallery__list__category__item__title services__inner__gallery__list__category__item__title--big" data-name="${title}">${title}</h5>
                            <!-- <span class="services__inner__gallery__list__category__item__subtitle services__inner__gallery__list__category__item__subtitle--big">Сити-формат №13. Россия, г.Псков, ул.Советская напротив д. №7</span>-->
                    </div>
                    <div class="services__inner__bottom">
                     <a href="./object.php" data-object 
                            class="services__inner__gallery__list__category__item__button services__inner__gallery__list__category__item__button--big">подробнее</a>
                    </div>
                </div>
            </div>


            <div class="services__inner__gallery__list__category__right">
                <!-- --------------------------- map -------------------------- -->
                <div class="slider__inner__mapcity mapslider ${mapName}" id="${mapName}">

                </div>  
            </div>

        </div>
        </div>`;
        return swiperSlide;
    }

}



async function loadDataBanner(typeName) {
    // загрузка данных всех банеров

    const dataBanners = await fetch('./assets/images/data.json');
    const resultBunners = await dataBanners.json();

    //выделение только нужных типов

    const array = [];
    resultBunners.forEach((element) => {
        if (element.name === typeName) {
            array.push(element);
        }
    });
    return array;
}


export function loadMaps() {
    //загружаем карты на все презентационные слайды(получение данных через функцию fetch и вывод и передача полученных данных в функцию отрисовки карт)

    loadDataBanner('БИЛБОРД-ПСКОВ').then(data => {
        addSlideCity('bilbordmap', data);
        // console.log(data);
    }).catch(error => {
        console.error(error);
    });

    loadDataBanner('БИЛБОРДЫ-ОБЛАСТЬ').then(data => {
        addSlideCity('bilbordareamap', data);
        // console.log(data);
    }).catch(error => {
        console.error(error);
    });

    loadDataBanner('СИТИ-ФОРМАТ').then(data => {
        addSlideCity('mapcity', data);
        // console.log(data);
    }).catch(error => {
        console.error(error);
    });

    loadDataBanner('СВЕТОДИОДНЫЙ ЭКРАН').then(data => {
        addSlideCity('mapbigscreen', data);
        // console.log(data);
    }).catch(error => {
        console.error(error);
    });
}

