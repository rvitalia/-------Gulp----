import { sendDataList } from "./data-object";
import { loadDataBanner } from "./load&renderdata";

export function showList() {
    let button = document.querySelector('[data-arrow_rotate]');
    let listArdress = document.querySelector('[data-adress_list]');
    let buttonsSelected = document.querySelectorAll('[data-select_list]');

    //считываем какой тип выбран на табах
    function selectedType(array) {
        let banerType = null;
        array.forEach(element => {
            if (element.classList.contains('active__tabs')) {
                banerType = element.textContent;
            }
        });
        return banerType;
    }

    button.addEventListener('click', function () {
        button.classList.toggle('button-active');
        listArdress.classList.toggle('listShow');
        setTimeout(function () {
            listArdress.classList.toggle('animate');
        }, 150);

        //все проверки выполняем только при активном (открытом списке)
        if (button.classList.contains('button-active')) {

            function insertDataObject() {
                //проверяем какой активный таб выбран сразу
                let type = selectedType(buttonsSelected);
                loadDataBanner(type)
                    .then(data => {
                        let list = '';
                        data.forEach(element => {
                            list += `<li class="services__inner__list__item"><a data-list_object="${element.id}" target="_blank" href="./object.php">${element.titleA}</a></li>
                       <li class="services__inner__list__item"><a data-list_object="${element.id}" target="_blank" href="./object.php">${element.titleB}</a></li>`;
                        });
                        listArdress.textContent = "";
                        listArdress.insertAdjacentHTML('beforeend', list);
                        //запускаем функцию передачи id с листа объектов
                        sendDataList();
                    })
            }
            insertDataObject();

            //наблюдаем, будут ли нажатия на табы при открытом окне
            buttonsSelected.forEach(element => {
                element.addEventListener('click', () => {
                    insertDataObject();
                })
            });

        }
    })
}