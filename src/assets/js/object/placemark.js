import ymaps from "ymaps";

export function addPlacemark(item) {

    let dataCoordinate = item.maps;
    let fullname = item.title;
    let name = fullname.split('.');




    ymaps
        .load()
        .then(maps => {
            const map = new maps.Map('YMapsID', {
                center: [57.82, 28.33],
                zoom: 12
            });
        })
        .catch(error => console.log('Failed to load Yandex Maps', error));

    // Создает метку с банером
    //  let placemark = new ymaps.Placemark(new ymaps.GeoPoint(dataCoordinate));




};



    // Устанавливает содержимое балуна
    //  placemark.name = name[0];
    // placemark.description = "Столица Российской Федерации";

    // Добавляет метку на карту
    //  map.addOverlay(placemark);
    // return dataCoordinate;

// }