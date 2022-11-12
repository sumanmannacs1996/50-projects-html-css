const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let curtentActive = 1

const update = () => {
	circles.forEach((circle, idx) => {
		if (idx < curtentActive) {
			circle.classList.add('active')
		} else {
			circle.classList.remove('active')
		}
	})

	actives = document.querySelectorAll('.active')

	progress.style.width =
		((actives.length - 1) / (circles.length - 1)) * 100 + '%'

	if (curtentActive == circles.length) {
		next.disabled = true
	} else if (curtentActive == 1) {
		prev.disabled = true
	} else {
		prev.disabled = false
		next.disabled = false
	}
}

next.addEventListener('click', () => {
	curtentActive++

	if (curtentActive > circles.length) {
		curtentActive = circles.length
	}
	update()
})

prev.addEventListener('click', () => {
	curtentActive--

	if (curtentActive < 1) {
		curtentActive = 1
	}
	update()
})
