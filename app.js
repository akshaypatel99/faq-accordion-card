const faqTriggers = document.querySelectorAll('.faq-trigger');
let activeIndex = null;

faqTriggers.forEach((trigger, index) => {
	trigger.addEventListener('click', () => {
		if (activeIndex === null) {
			// Open selected faq if all faqs are closed
			trigger.setAttribute('aria-expanded', true);
			toggleAnswer(trigger, true);
			activeIndex = index;
		} else if (activeIndex === index) {
			// Close faq if already open
			trigger.setAttribute('aria-expanded', false);
			toggleAnswer(trigger, false);
			activeIndex = null;
		} else {
			// Close open faq
			faqTriggers[activeIndex].setAttribute('aria-expanded', false);
			toggleAnswer(faqTriggers[activeIndex], false);
			// Open selected faq
			trigger.setAttribute('aria-expanded', true);
			toggleAnswer(trigger, true);
			activeIndex = index;
		}
	});
});

function toggleAnswer(element, open) {
	const answerId = element.getAttribute('aria-controls');
	const answer = document.getElementById(answerId);
	if (!open) answer.setAttribute('hidden', true);
	if (open) answer.removeAttribute('hidden');
}
