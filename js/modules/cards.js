import {getResource} from '../services/services';


function cards() {
    //cards

    class Cards {
        constructor(img, alt, title, descr, price, parentSelector, ...classes) {
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parentSelector = document.querySelector(parentSelector);
            this.classes = classes;
        }

        render() {
            const div = document.createElement('div');

            if (this.classes.length === 0) {
                div.classList.add('menu__item');
            } else {
                this.classes.forEach(item => div.classList.add(item));
            }

            div.innerHTML = `
        <img src=${this.img} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
        </div>
        `;
            this.parentSelector.append(div);
        }
    }

  

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({ img, altimg, title, descr, price }) => {
                new Cards(img, altimg, title, descr, price, '.menu .container').render();
            });
        });

}

export default cards;