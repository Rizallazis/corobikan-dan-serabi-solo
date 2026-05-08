document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll reveal animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Add simple parallax effect to abstract shapes
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const shapes = document.querySelectorAll('.shape-1, .shape-2, .shape-3');
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Mobile Menu Toggle Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconPath = document.getElementById('menu-icon-path');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            
            // Toggle Icon (Hamburger to Close)
            if (mobileMenu.classList.contains('hidden')) {
                menuIconPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7'); // Hamburger
            } else {
                menuIconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // X Close
            }
        });

        // Close mobile menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                menuIconPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7'); // Hamburger
            });
        });
    }
});
