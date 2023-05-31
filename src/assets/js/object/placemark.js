// import ymaps from 'ymaps';

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




    const dataBanners = await fetch('./assets/images/data.json');
    const resultBunners = await dataBanners.json();

    function init() {
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
                    balloonContentHeader: fullname,
                    balloonContentBody: `<img src="./assets/images/object/${element.foto2}" height="150" width="300">`,
                    balloonContentFooter: (element.text),
                },
                { preset: "islands#redStretchyIcon" }));
        });

        //вывод коллекции на карту
        map.geoObjects.add(myCollection);


    }
    ymaps.ready(init);
}
