//  Footer year 
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}


//  Mobile nav toggle 
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        navToggle.classList.toggle('is-open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('is-open');
            navToggle.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}


//  Scroll reveal 
const animatedSections = document.querySelectorAll('[data-animate]');

if (animatedSections.length && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    animatedSections.forEach((section) => revealObserver.observe(section));
} else {
    animatedSections.forEach((section) => section.classList.add('in-view'));
}


//  Active nav link on scroll 
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('#navLinks a');

if (sections.length && navAnchors.length && 'IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navAnchors.forEach((anchor) => {
                        anchor.classList.toggle(
                            'active',
                            anchor.getAttribute('href') === `#${entry.target.id}`
                        );
                    });
                }
            });
        },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => navObserver.observe(section));
}
