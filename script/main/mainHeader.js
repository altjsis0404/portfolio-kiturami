let header_lis = document.querySelectorAll('#header_gnb > li');
console.log(header_lis);
header_lis.forEach((el, index) => {
	el.addEventListener('mouseenter', () => {
		let sub = el.querySelector('.header_sub');
		sub.style.display = 'block';
		el.querySelector('a').classList.add('on');
	});

	el.addEventListener('mouseleave', () => {
		let sub = el.querySelector('.header_sub');
		sub.style.display = 'none';
		el.querySelector('a').classList.remove('on');
	});
});
