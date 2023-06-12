export function scrollToMessage(){
    let messsages = document.querySelectorAll('#message');
    let container = document.querySelector('#box');

    const elementPosition = (messsages[messsages.length-1]).getBoundingClientRect().top;

    container.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
    });
}