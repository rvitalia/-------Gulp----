import { scrollToMessage } from "./scroll";
import { saveChat } from "./sentToPhp";



//Вставляем ответ admina

export function addTextBot(data) {
    let chat = document.querySelector('#box');
    let id = 'message';

    let messageBot =
        `<div class="AB__chat__inner__center__bot" id='${id}'>
           
            <span class="AB__chat__inner__center__bot__text" data-bot>${data}</span>
        </div>`;

    chat.insertAdjacentHTML('beforeend', messageBot);
    scrollToMessage();
    saveChat();
}
