import jQuery from "jquery";




export function sendData(data) {
    let txt = data;
    // console.log(txt);

    jQuery.ajax({
        url: 'sendMessage.php',
        type: 'POST',
        data: { txt: txt },
        success: function (data) {
            // console.log(data);
        },
        error: function () {
            console.log('ERROR');
        }
    })
}
export function clearTxt() {

    jQuery.ajax({
        url: 'clearTxt.php',
        type: 'POST',
        success: function () {
        },
        error: function () {
            console.log('ERROR');
        }
    })
}



export function keypress(key) {
    jQuery(document).on('keypress', 'input', function (e) {
        if (e.which == 13) {
            key.click();
        }
    })
}

export function saveChat() {
    let parrentDiv = document.querySelector('.AB__chat__inner__center');
    let chat = document.querySelector('#box').innerHTML;
    sessionStorage.setItem('allChat', JSON.stringify(chat));
}






