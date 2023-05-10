
export function modalCallOpen() {
    function modalOpen() {
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
    }
    let buttonCallback = document.querySelector('[data-modalcallback]');
    buttonCallback.addEventListener('click', () => {
        modalOpen();
    })
}


function removeClass(parent) {
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
}



export function modalCallCancel() {
    const popuptel = document.querySelector('.modalcallback');
    const cancel = document.querySelector('[data-close]');
    const body = document.querySelector('body');
    cancel.addEventListener('click', () => {
        removeClass(popuptel);        
    })
}















