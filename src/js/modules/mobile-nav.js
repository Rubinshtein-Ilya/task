function mobileNav() {
	const navBtn = document.querySelector('.burger-btn');
	const nav = document.querySelector('.nav');
	const navList = document.querySelector('.nav__list');

	navBtn.onclick = function () {
		navBtn.classList.toggle('open');
		nav.classList.toggle('nav-open');
		navList.classList.toggle('nav-open');
		navBtn.classList.contains('open')? document.body.style.overflowY = 'hidden': document.body.style.overflowY = 'scroll';
	};
}

export default mobileNav;