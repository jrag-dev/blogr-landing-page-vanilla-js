const d =document;

export function mainMenu(btnMenu, btnHamburger, btnClose, mainMenu) {
	const $btnMenu = d.querySelector(btnMenu);
	const $btnHamburger = d.querySelector(btnHamburger);
	const $btnClose = d.querySelector(btnClose);
	const $mainMenu = d.querySelector(mainMenu);
	
	d.addEventListener('click', (e) => {
		if (e.target.matches(btnMenu) || e.target.matches(`${btnMenu} *`)) {
			$btnHamburger.classList.toggle('nav__hamburger-active');
			$btnClose.classList.toggle('nav__close-active');
			$mainMenu.classList.toggle('nav__container-active');
		}
		e.preventDefault();
	})
}

export function subMenu(btnLinks, secondMenu) {
	const $btnLinks = d.querySelectorAll(btnLinks);
	const $secondMenu = d.querySelectorAll(secondMenu);
	
	d.addEventListener('click', (e) => {
		
		if (e.target.matches(btnLinks)) {
			console.log(e.target.children[0])
			e.target.nextSibling.classList.toggle('nav__sublinks-active');
			e.target.children[0].classList.toggle('nav__link-icon-active');
		}
	})
	
}