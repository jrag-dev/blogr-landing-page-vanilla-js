import { mainMenu, subMenu } from './menu_hamburger.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
	console.log('DOMContentLoaded');
	mainMenu('.nav__button', '.nav__hamburger', '.nav__close', '.nav__container');
	subMenu('.nav__link--primary', '.nav__sublinks');
})