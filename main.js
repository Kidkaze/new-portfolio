//Nav Menu
(() => {
	const hamburgerBtn = document.querySelector('.hamburger-btn'),
		navMenu = document.querySelector('.nav-menu'),
		closeNavBtn = navMenu.querySelector('.close-nav-menu');

	hamburgerBtn.addEventListener('click', showNavMenu);
	closeNavBtn.addEventListener('click', hideNavMenu);

	function showNavMenu() {
		navMenu.classList.add('open');
		// bodyScrollingToggle();
	}
	function hideNavMenu() {
		navMenu.classList.remove('open');
		fadeOutEffect();
		// bodyScrollingToggle();
	}
	function fadeOutEffect() {
		const fadeOut = document.querySelector('.fade-out-effect');
		fadeOut.classList.add('active');
		setTimeout(() => {
			fadeOut.classList.remove('active');
		}, 300);
	}
	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('link-item')) {
			if (e.target.hash !== '') {
				e.preventDefault();
				const hash = e.target.hash;
				document.querySelector('.section.active').classList.add('hide');
				document.querySelector('.section.active').classList.remove('active');
				document.querySelector(hash).classList.add('active');
				document.querySelector(hash).classList.remove('hide');
				// document
				// 	.querySelector('.active')
				// 	.classList.remove('active', 'inner-shadow');
				// document
				// 	.querySelector('.active')
				// 	.classList.add('outer-shadow', 'hover-in-shadow');
				// e.target.classList.add('active', 'inner-shadow');
				// e.target.classList.remove('outer-shadow', 'hover-in-shadow');
				hideNavMenu();
			}
		}
	});
})();

//Hide all except active
(() => {
	const sections = document.querySelectorAll('.section');
	sections.forEach((section) => {
		if (!section.classList.contains('active')) {
			section.classList.add('hide');
		}
	});
})();
