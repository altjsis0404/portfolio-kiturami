AOS.init();

const headerBtnCall = document.querySelector('.header_btnCall');
const headerGnbMo = document.querySelector('.header_gnb_mo');

headerBtnCall.addEventListener('click', function (e) {
	e.preventDefault();

	let isOn = headerBtnCall.classList.contains('on');

	if (isOn) {
		headerBtnCall.classList.remove('on');
	} else {
		headerBtnCall.classList.add('on');
	}

	let isOnMo = headerGnbMo.classList.contains('on');
	if (isOnMo) {
		headerGnbMo.classList.remove('on');
	} else {
		headerGnbMo.classList.add('on');
	}
});