// Particle Background
function createParticles() {
    const container = document.getElementById('particle-bg');
    if (!container) return;
    
    container.innerHTML = '';
    
    const particleCount = window.innerWidth < 768 ? 20 : 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      container.appendChild(particle);
    }
  }
  
  // Scroll reveal
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }
  
  // Initialize
  document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    document.querySelectorAll('section > *').forEach((el, index) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${index * 0.1}s`;
    });
    
    revealOnScroll();
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  });
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('resize', createParticles);
  
  // Contact form handling (placeholder)
  function submitContactForm() {
    alert('Thank you! We will contact you at ' + document.getElementById('email').value);
    return false;
  }