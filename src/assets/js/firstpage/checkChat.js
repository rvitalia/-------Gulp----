//прописывать во все страницы сайта - загрузка всего чата

import { clearTxt } from "./sentToPhp";

export function checkAllChat(){
    if (sessionStorage.getItem('allChat')) {
        const chatCenter = document.querySelector('#box');

        const chat = JSON.parse(sessionStorage.getItem('allChat'));
        chatCenter.innerHTML = '';
        chatCenter.insertAdjacentHTML('beforeend', chat);
        clearTxt();
    }
}