export function ballonClick(e){
 // получаем данные балуна
 var balloonContent = e.get('target').properties.get('balloonContentHeader');
//выделяем id для получения информации об объекте
const idBaner = balloonContent.match(/'([^']*)'/)[1];
localStorage.setItem('id', JSON.stringify(idBaner));
}