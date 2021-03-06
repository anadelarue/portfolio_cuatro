document.addEventListener('DOMContentLoaded', () => {
	// Creating waypoint
	let waypoint = new Waypoint({
	  element: document.querySelector('.parrafo_uno'),
	  handler: function() {
			anime({
				targets: '#p5',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 300,
			})

			this.destroy();
	  },
		context: document.querySelector('.texto_parrafo'),
		offset: '100%',
	})
})
