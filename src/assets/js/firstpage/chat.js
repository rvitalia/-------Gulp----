import { checkAllChat } from "./checkChat";
import { addTextBot } from "./receiveMessage";
import { scrollToMessage } from "./scroll";
import { clearTxt, keypress, saveChat, sendData } from "./sentToPhp";

//очищаем файл сообщений от бота
clearTxt();

function animateIcon(){
    let icon = document.querySelector('#button__chat');
    icon.addEventListener('animationend',()=>{
        icon.classList.remove('animate__animated', 'animate__swing');
    })
}

animateIcon();

function openChat() {

    let button = document.querySelector('#button__chat');
    let chat = document.querySelector('#AB__chat');
    let flag = true;

    button.addEventListener('click', () => {
        button.classList.add('animate__animated', 'animate__swing');
        button.addEventListener('animationend',()=>{
            icon.classList.remove('animate__animated', 'animate__swing');
        })

        chat.classList.toggle('chat__active');

        if (chat.classList.contains('chat__active')) {
            //запускаем интервал. 
            checkTime(true);
            checkAllChat();
        }
        else{
            //останавливаем интервал
            checkTime(false);
        }
        setTimeout(function () {

            if (flag == true) {
                chat.style.opacity = '1';
                flag = false;
            }
            else {
                chat.style.opacity = '0';
                flag = true;
            }

        }, 400)
    })

    //делаем закрытие через крестик

    let close = document.querySelector('.AB__chat__inner__top__close');
    // console.log(close);
    close.addEventListener('click',()=>{
        button.click();
    });
}

openChat();

function addTextPeople() {
    let sentPeople = document.querySelector('[data-sent="people"]');
    let inputPeople = document.querySelector('[data-input="people"]');
    let box = document.querySelector('#box');
    let id = 'message';

    keypress(sentPeople);

    sentPeople.addEventListener('click', () => {

        if (inputPeople.value !== '') {

            let itemPeople = `<div class="AB__chat__inner__center__people" id='${id}' >
                                <span class="AB__chat__inner__center__people__text">${inputPeople.value}</span>
                                
                            </div>`;

            box.insertAdjacentHTML('beforeend', itemPeople);
            scrollToMessage();
            sendData(inputPeople.value);
            saveChat();
            inputPeople.value = "";
        }
        //console.log(inputPeople.value);
    })
}

addTextPeople();




function receiveData(data) {
  
    // .then((text) => JSON.parse(text))
    let idMessage = document.querySelector('#message');
    
    //Проверяем, что данные не пустые и пользователь начал с нами диалог!
    if (data !== '' && idMessage !== null && data !== undefined) {
        //получаем сообщение от администратора
        let dataParse = JSON.parse(data);
        let message = dataParse.message.text;
        //выбираем все сообщения ботов и сравниваем с последним присланым
        let allMessage = document.querySelectorAll('[data-bot]');

        if((allMessage[allMessage.length - 1]).textContent !== message){
            addTextBot(message);
        }     
    }
}

let chatInterval;
function checkTime(flag) {
   
    if (flag === true){
    //делаем интервал запроса через каждые 10 секунды и отслеживаем изменение файла.
     chatInterval = setInterval(async function () {

        let response = await fetch('https://abrosko-business.ru/message.txt', {
            headers: {
                'Cache-Control': 'no-cache'
            }
        })
            .then((response) => response.text())
            .then((text) => receiveData(text))
            .catch((e) => {
                // console.log('Error: ' + e.message);
            })
    }, 3000)
    }
    else{
        clearInterval(chatInterval);
    }


}