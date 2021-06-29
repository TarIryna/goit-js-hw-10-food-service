import menuCardsTpl from '../templates/cards.hbs';
import menuInfo from '../menu.json';
const cards = menuCardsTpl(menuInfo);

const cardList = document.querySelector(".menu");
cardList.insertAdjacentHTML('beforeend', cards);
