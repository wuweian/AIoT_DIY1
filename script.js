// Real-time Clock Functionality
function updateClock() {
    const clockElement = document.getElementById('clock');
    const footerTimeElement = document.getElementById('footer-time');
    
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    if (clockElement) {
        clockElement.textContent = timeString;
    }
    
    if (footerTimeElement) {
        footerTimeElement.textContent = `Current Local Time: ${timeString}`;
    }
}

// Scroll Effects (Navbar & Reveal)
function handleScroll() {
    const navbar = document.getElementById('navbar');
    const reveals = document.querySelectorAll('.reveal');
    
    // Navbar background change
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Reveal animations
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
}

// Smooth Scrolling for Nav Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Start clock
    updateClock();
    setInterval(updateClock, 1000);
    
    // Initial scroll check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
