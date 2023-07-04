import { validation } from "./validation";

export function modalCallOpen() {
    function modalOpen(button) {
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';


        const popuptel = document.querySelector('.modalcallback');
        const body = document.querySelector('body');

        document.body.style.paddingRight = paddingOffset;
        let fixwindow = document.querySelectorAll('.fix__block');

        fixwindow.forEach(element => {
            element.style.paddingRight = paddingOffset;
        });

        popuptel.classList.add('active__popuptel');
        body.classList.add('_lock');

        setTimeout(function () {
            popuptel.style.opacity = '1';
        }, 400)

        button.dataset.open = "true";
    }

    let buttonCallback = document.querySelectorAll('[data-modalcallback]');
    
    buttonCallback.forEach(element => {
        element.dataset.open = "false";
        element.addEventListener('click', () => {
            if(element.dataset.open == "false"){
                modalOpen(element);
                setTimeout(()=>{
                    //валидация и отправка на почту
                validation();
                },150);
            }
            else{
                return
            }
        })
    });
  
}


function removeClass(parent, button) {
    parent.style.opacity = '0';
    const body = document.querySelector('body');
    let fixwindow = document.querySelectorAll('.fix__block');

    setTimeout(function () {
        parent.classList.remove('active__popuptel');
        fixwindow.forEach(element => {
            element.style.paddingRight = 0;
        });
        document.body.style.paddingRight = 0;
        body.classList.remove('_lock');
    }, 400)

    button.dataset.open = "false";

    //добавляем очистку всех сообщений об ошибке
    let attentionLabels = document.querySelectorAll('.label__attention');
    attentionLabels.forEach(element => {
        let errorLabels = element.querySelectorAll('.just-validate-error-label');
        errorLabels.forEach(item => {
            item.parentNode.removeChild(item);
        });
    });
}



export function modalCallCancel() {
    const popuptel = document.querySelector('.modalcallback');
    const cancel = document.querySelector('.modalcallback__close');
    const body = document.querySelector('body');
    cancel.addEventListener('click', () => {
        const currentButton = document.querySelector('[data-open="true"]');
        if(currentButton){
            removeClass(popuptel, currentButton);
        }
    })
}















