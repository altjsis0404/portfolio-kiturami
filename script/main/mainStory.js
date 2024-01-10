const btnStory = document.querySelectorAll('#story_inner nav > a');
const boxStory = document.querySelectorAll('#story_inner section');

btnStory.forEach((el, index) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();

		for (let el of btnStory) el.classList.remove('on');
		btnStory[index].classList.add('on');

		for (let el of boxStory) el.classList.remove('on');
		boxStory[index].classList.add('on');

		setTimeout(() => {
			for (let el of boxStory) el.classList.remove('active');
			boxStory[index].classList.add('active');
		}, 0);
	});
});
