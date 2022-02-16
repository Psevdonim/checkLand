"use strict"

let filterDropdown = document.querySelectorAll('.js-dropdown');
let gameSwitcher = document.querySelectorAll('.js-game')


filterDropdown.forEach((element) => {
	element.addEventListener('click', () => {
		element.classList.toggle('active');
	});
});

gameSwitcher.forEach((element) => {
	element.addEventListener('click', () => {
		gameSwitcher.forEach((e) => {
			e.classList.remove('active');
		})
		element.classList.add('active');
	})
});



new WOW({
	offset: 100
}).init();

const stars = document.querySelector('.stars');
const numbers = document.querySelectorAll('.stars__banner-title');

stars.addEventListener('animationstart', () => {
	numbers.forEach(e => {
		if (e.classList.value.indexOf('js') === -1) {
			animateValue(e);
		}
	})
})

function animateValue(element) {
	element.classList.add('js-number');
	const end = +element.innerHTML;
	const duration = end > 10000 ? 7 : 30;
	let current = 0;
	const increment = end > 1000 ? 2 : 1;
	const timer = setInterval(function () {
		current += increment === 2 ? Math.ceil(Math.random() * 100) : increment;
		if (current > end) {
			current = end;
			clearInterval(timer);
		}
		element.innerHTML = current;
	}, duration);
}


new Swiper('.partners__swiper', {
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	allowTouchMove: false,
	loop: true,
	loopFillGroupWithBlank: true,
	spaceBetween: 40,
	slidesPerView: 2,
	slidesPerGroup: 1,
	breakpoints: {
		600: {
			slidesPerView: 4,
		},
		1000: {
			slidesPerView: 6,
		},
	}
});

new Swiper('.news__swiper', {
	navigation: {
		nextEl: ".news__arrow_right",
		prevEl: ".news__arrow_left",
	},
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	loop: true,
	loopFillGroupWithBlank: true,
	spaceBetween: 40,
	slidesPerView: 1,
	breakpoints: {
		500: {
			autoplay: false,
		},
		1000: {

			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 3,
		}
	}
});

const players = new Swiper('.players__swiper-small', {
	loop: true,
	spaceBetween: 40,
	slidesPerView: 3,
	allowTouchMove: false,
	navigation: {
		nextEl: ".players__arrow_right",
		prevEl: ".players__arrow_left",
	},
	breakpoints: {
		//// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//// when window width is >= 480px
		600: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		//// when window width is >= 640px
		//640: {
		//  slidesPerView: 4,
		//  spaceBetween: 40
		//}
		1000: {
			slidesPerView: 4,
		},
		1100: {
			slidesPerView: 5,
		}
	}
});

new Swiper('.players__swiper', {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 1,
	allowTouchMove: false,
	navigation: {
		nextEl: ".players__arrow_right",
		prevEl: ".players__arrow_left",
	},
	1000: {
		slidesPerView: 1,
	},
	1270: {
		slidesPerView: 2,
	}
});