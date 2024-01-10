$(function () {
	$('#datepicker').datepicker({
		dateFormat: 'yy-mm-dd',
		showOtherMonths: true,
		showMonthAfterYear: true,
		changeYear: true,
		changeMonth: true,
		showOn: 'both',
		buttonImage:
			'http://jqueryui.com/resources/demos/datepicker/images/calendar.gif', //버튼 이미지 경로
		buttonImageOnly: true, //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
		buttonText: '선택', //버튼에 마우스 갖다 댔을 때 표시되는 텍스트
		yearSuffix: '년', //달력의 년도 부분 뒤에 붙는 텍스트
		monthNamesShort: [
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'10',
			'11',
			'12',
		], //달력의 월 부분 텍스트
		monthNames: [
			'1월',
			'2월',
			'3월',
			'4월',
			'5월',
			'6월',
			'7월',
			'8월',
			'9월',
			'10월',
			'11월',
			'12월',
		], //달력의 월 부분 Tooltip 텍스트
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], //달력의 요일 부분 텍스트
		dayNames: [
			'일요일',
			'월요일',
			'화요일',
			'수요일',
			'목요일',
			'금요일',
			'토요일',
		], //달력의 요일 부분 Tooltip 텍스트
		minDate: '-1M', //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
		maxDate: '+1M', //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
	});

	//초기값을 오늘 날짜로 설정
	$('#datepicker').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
});

const form = document.querySelector('#member');
const btnSubmit = form.querySelector('input[type=submit]');

let toggleBtn = document.getElementById('toggleBtn');
let pwd = form.querySelector('#pwd1');
toggleBtn.addEventListener('click', () => {
	if (pwd.type === 'password') {
		pwd.setAttribute('type', 'text');
		toggleBtn.classList.add('hide');
	} else if (pwd.type === 'text') {
		pwd.setAttribute('type', 'password');
		toggleBtn.classList.remove('hide');
	}
});

btnSubmit.addEventListener('click', (e) => {
	if (!isTxt('username', 2)) e.preventDefault();
	if (!isTxt('telnumber', 10)) e.preventDefault();
	if (!isTxt('phonenumber', 10)) e.preventDefault();

	if (!isPwd('pwd1', 'pwd2', 10)) e.preventDefault();

	if (!isTxt('address', 10)) e.preventDefault();
	if (!isTxt('address', 10)) e.preventDefault();

	if (!isSelect('type')) e.preventDefault();
	if (!isSelect('product')) e.preventDefault();

	if (!isTxt('datepicker', 0)) e.preventDefault();
	if (!isTxt('comments', 10)) e.preventDefault();

	if (!isCheck('agreement1')) e.preventDefault();
	if (!isCheck('agreement2')) e.preventDefault();
	if (!isCheck('agreement3')) e.preventDefault();
	if (!isCheck('agreement4')) e.preventDefault();
});


function isTxt(el, len) {
	if (len === undefined) len = 2;
	let input = form.querySelector(`[name=${el}]`);
	let txt = input.value;

	if (txt.length >= len) {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();

		return true;
	} else {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();

		let errMessage = document.createElement('p');
		errMessage.append(`${len}글자 이상 입력하셔야 합니다.`);
		input.closest('td').append(errMessage);
		return false;
	}
}

function isSelect(el) {
	let select = form.querySelector(`[name=${el}]`);

	let selectIndex = select.options.selectedIndex;
	let value = select[selectIndex].value;
	if (value !== '') {
		const errMsgs = select.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) select.closest('td').querySelector('p').remove();
		return true;
	} else {
		const errMsgs = select.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) select.closest('td').querySelector('p').remove();

		let errMessage = document.createElement('p');
		errMessage.append('항목을 선택해 주세요');
		select.closest('td').append(errMessage);
		return false;
	}
}

function isCheck(el) {
	let inputs = form.querySelectorAll(`[name=${el}]`);
	let isCheck = false;

	for (let el of inputs) {
		if (el.checked) isCheck = true;
	}

	if (isCheck) {
		const errMsgs = inputs[0].closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) inputs[0].closest('td').querySelector('p').remove();
		return true;
	} else {
		const errMsgs = inputs[0].closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) inputs[0].closest('td').querySelector('p').remove();

		let errMessage = document.createElement('p');
		errMessage.append('필수 체크해 주세요');
		inputs[0].closest('td').append(errMessage);
		return false;
	}
}

function isPwd(el1, el2, len) {
	let pwd1 = form.querySelector(`[name=${el1}]`);
	let pwd2 = form.querySelector(`[name=${el2}]`);
	let pwd1_value = pwd1.value;
	let pwd2_value = pwd2.value;

	const num = /[0-9]/;
	const eng = /[a-zA-Z]/;
	const spc = /[~!@#$%^&*()_+?><]/;

	const errMsgWrap = pwd1.closest('td');
	function addErr(msg) {
		const errMessage = document.createElement('p');
		errMessage.textContent = msg;
		errMsgWrap.append(errMessage);
	}
	function removeErr() {
		const errMessage = errMsgWrap.querySelector('p');
		if (errMessage) {
			errMessage.remove();
		}
	}

	if (
		pwd1_value === pwd2_value &&
		pwd1_value.length >= len &&
		num.test(pwd1_value) &&
		eng.test(pwd1_value) &&
		spc.test(pwd1_value)
	) {
		removeErr();
		return true;
	} else {
		removeErr();
		let errMsg = '비밀번호는 ';
		if (pwd1_value.length < len) {
			errMsg += `${len}글자 이상,`;
		}
		if (!num.test(pwd1_value)) {
			errMsg += `숫자 포함,`;
		}
		if (!eng.test(pwd1_value)) {
			errMsg += `영문 포함,`;
		}
		if (!spc.test(pwd1_value)) {
			errMsg += `특수문자 포함,`;
		}
		errMsg += `동일하게 입력하세요`;
		addErr(errMsg);
		return false;
	}
}
