// Control del header y cambio de logos
window.addEventListener('scroll', function() {
  const header = document.querySelector('.main-header');
  const hero = document.querySelector('.hero');
  const heroHeight = hero.offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition > heroHeight - 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Fade-in de secciones
const faders = document.querySelectorAll('.fade-in-section');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('is-visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
