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


const header_btnCall = document.querySelector('.header_btnCall');
const header_gnb_side = document.querySelector('.header_gnb_side');

header_btnCall.addEventListener('click', function (e) {
	e.preventDefault();

	let isOn = header_btnCall.classList.contains('on');

	if (isOn) {
		header_btnCall.classList.remove('on');
	} else {
		header_btnCall.classList.add('on');
	}

	let isOnMo = header_gnb_side.classList.contains('on');
	if (isOnMo) {
		header_gnb_side.classList.remove('on');
	} else {
		header_gnb_side.classList.add('on');
	}
});



