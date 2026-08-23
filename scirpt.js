 // ========================================
// Wait for the page to load
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('🎨 Welcome to my Portfolio!');
    console.log('🚀 Built with HTML, CSS & JavaScript');

    // ========================================
    // SMOOTH SCROLLING FOR NAVIGATION LINKS
    // ========================================
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // ACTIVE NAV LINK ON SCROLL
    // ========================================
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = '#fff';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = '#00d4ff';
            }
        });
    });

    // ========================================
    // "COMING SOON" ALERT
    // ========================================
    const projectCard = document.querySelector('.project-card');
    
    if (projectCard) {
        projectCard.addEventListener('click', function() {
            alert('🚀 Exciting projects coming soon! I\'m working hard to build something awesome. Check back later!');
        });
    }

    console.log('💡 Built with ❤️ by a beginner developer!');

});