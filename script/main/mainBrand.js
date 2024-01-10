const brand_inner = document.querySelector('.brand_inner_mid');
const brand_articles = document.querySelectorAll('article');
const brand_prev = document.querySelector('.brand_prev');
const brand_next = document.querySelector('.brand_next');
const brand_opens = document.querySelectorAll('.open');
const brand_closes = document.querySelectorAll('.close');
const brand_wrap = document.querySelector('.wrap');
const brand_navs = document.querySelector('.brand_btn');

brand_next.addEventListener('click', () => {
	brand_inner.append(brand_inner.firstElementChild);
});

brand_prev.addEventListener('click', () => {
	brand_inner.prepend(brand_inner.lastElementChild);
});

brand_opens.forEach((el, index) => {
	el.addEventListener('click', (e) => {
		e.target.closest('article').classList.add('on');
		for (let el of brand_articles)
			!el.classList.contains('on') && el.classList.add('hide');
		console.log(e.target);
		e.target.closest('article').querySelector('.open').classList.add('off');
		brand_navs.classList.add('off');
	});
});

brand_closes.forEach((el, index) => {
	el.addEventListener('click', (e) => {
		e.target.closest('article').classList.remove('on');
		for (let el of brand_articles) el.classList.remove('hide');
		e.target.closest('article').querySelector('.open').classList.remove('off');
		brand_navs.classList.remove('off');
	});
});
