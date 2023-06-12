
export function doubleMapClick(item){
    let buttons = document.querySelectorAll('.mapObjects__inner__tabs__button ');

    buttons.forEach(element => {
        if(element.dataset.filter ==  item){
            element.click();
        }
    });
}