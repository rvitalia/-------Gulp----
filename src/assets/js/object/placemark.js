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
            preset: "islands#blueStretchyIcon"
        });

        map.geoObjects.add(placemark);
        // placemark.balloon.open();
    }






    ymaps.ready(init);
}   
