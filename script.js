const swiper = new Swiper(".client-slider", {
	loop:true,
	grabCursor:true,
	spaceBetween: 10,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
	},
});

// setTimeout( () => {
// 	open('https://jasajatim.rf.gd')
// },5000);