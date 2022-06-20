
import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
    const modalTimer = setTimeout(() => openModal('.modal', modalTimer), 30000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal');
    timer('.timer', '2022-06-30');
    cards();
    calc();
    forms('form', modalTimer);
    slider({
        allSlides: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalNumber: '#total',
        currentNumber: '#current'
    });


});