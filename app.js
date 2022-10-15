const faqs = document.querySelectorAll('.faq');

let activeIndex = null;

faqs.forEach((faq, index) => {
	faq.addEventListener('click', () => {
		if (activeIndex === null) {
			faq.classList.toggle('active');
			activeIndex = index;
		} else if (activeIndex === index) {
			faq.classList.toggle('active');
			activeIndex = null;
		} else {
			faqs[activeIndex].classList.toggle('active');
			faq.classList.add('active');
			activeIndex = index;
		}
	});
});
