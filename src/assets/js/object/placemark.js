import { ballonClick } from "../firstpage/ballonClick";

export function Ymapsinit(object) {


    let cordinate = object.maps;
    let fullname = object.title;
    let name = fullname.split('.');
    let title = name[0];
    let array = [];

    //создаем массив и переводим в числовое значение избавляясь от кавычек
    let data = cordinate.split(',');
    array[0] = Number(data[0]);
    array[1] = Number(data[1]);


    function init() {
        let map = new ymaps.Map('map', {
            center: array,
            zoom: 16
        })

        let placemark = new ymaps.Placemark(array, {
            iconContent: title,
            //  balloonContentHeader: title,
            // balloonContentBody: 'Боди',
            // balloonContentFooter: 'Footer',
        }, {
            preset: "islands#redStretchyIcon"
        });

        map.geoObjects.add(placemark);
        // placemark.balloon.open();
    }

    ymaps.ready(init);
}

export async function YmapsTotalInit() {
    // загрузка данных всех банеров

    const dataBanners = await fetch('./assets/images/data.json');
    const resultBunners = await dataBanners.json();

    //выделение только определенного формата билбордов
    const allBilbords = [];
    const bilbordsArea = [];
    const cityFormat = [];
    resultBunners.forEach((element) => {
        if (element.name === 'БИЛБОРД-ПСКОВ') {
            allBilbords.push(element);
        }
        if (element.name === 'БИЛБОРДЫ-ОБЛАСТЬ') {
            bilbordsArea.push(element);
        }
        if (element.name === 'СИТИ-ФОРМАТ') {
            cityFormat.push(element);
        }

    });
    //первый запуск при загрузке страницы

    function firstinit() {
        let map = new ymaps.Map('mapstotal', {
            center: [57.839935737922, 28.3041456872],
            zoom: 7
        });

        //Создаём коллекцию 
        let myCollection = new ymaps.GeoObjectCollection({}, {
            preset: "islands#redStretchyIcon",
            strokeWidth: 4,
            geodesic: true
        });

        resultBunners.forEach((element, index) => {
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
                    balloonContentHeader: `<a href="object.php"><span id='${element.id}' style="display: block; max-width: 340px; ">${fullname}</span></a>`,
                    balloonContentBody: `<img src="./assets/images/object/${element.foto2}" height="170" width="340">`,
                    balloonContentFooter: `<span style="display: block; max-width: 340px;"> ${(element.text)}</span>`,
                },
                { preset: "islands#redStretchyIcon" }));
        });

        myCollection.events.add('click', function (event) {
            console.log('Marker clicked');
            ballonClick(event);
        });

        //вывод коллекции на карту
        map.geoObjects.add(myCollection);
  
        // функция поиска всех типов баннеров + перезагрузка карты
        function init(arrayObjects) {


            // Удаляем текущие геообъекты из коллекции
            myCollection.removeAll();


            arrayObjects.forEach((element, index) => {
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
                        balloonContentHeader: `<a href="object.php"><span id='${element.id}' style="display: block; max-width: 340px; ">${fullname}</span></a>`,
                        balloonContentBody: `<img src="./assets/images/object/${element.foto2}" height="170" width="340">`,
                        balloonContentFooter: `<span style="display: block; max-width: 340px;"> ${(element.text)}</span>`,
                    },
                    { preset: "islands#redStretchyIcon" }));
            });

            //вывод коллекции на карту
            map.geoObjects.add(myCollection);

            // Устанавливаем центр карты и масштаб таким образом, чтобы вся коллекция была видна
            map.setBounds(myCollection.getBounds());

            // Перезагружаем карту
            map.container.fitToViewport();
        }



        //осуществляем поиск кнпок управления

        let wrapperTabs = document.querySelector('.mapObjects__inner__tabs');
        let tabs = wrapperTabs.querySelectorAll('button');

        //перебираем и задаем и условия 


        tabs.forEach(element => {
            element.addEventListener('click', () => {
                // destroyMap();

                if (element.dataset.filter === 'all') {
                    ymaps.ready(init(resultBunners));
                    colorTabs(element.dataset.filter);
                }
                else if (element.dataset.filter === 'city-format') {
                    ymaps.ready(init(cityFormat));
                    colorTabs(element.dataset.filter);
                }
                else if (element.dataset.filter === 'bilbord-area') {
                    ymaps.ready(init(bilbordsArea));
                    colorTabs(element.dataset.filter);
                }
                else if (element.dataset.filter === 'bilbord-all') {
                    ymaps.ready(init(allBilbords));
                    colorTabs(element.dataset.filter);
                }
            })
        });

    }
    ymaps.ready(firstinit);
    colorTabs('all');
}


//подсвечиваем активный таб
function colorTabs(item) {
    let tabs = document.querySelectorAll('.mapObjects__inner__tabs__button');
    tabs.forEach(element => {
        if (element.classList.contains('active__banners')) {
            element.classList.remove('active__banners');

            if (item == element.dataset.filter) {
                element.classList.add('active__banners');
            }
        }
        else {
            if (item == element.dataset.filter) {
                element.classList.add('active__banners');
            }
        }
    });
}