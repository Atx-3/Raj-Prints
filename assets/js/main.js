document.addEventListener("DOMContentLoaded", function() {

    // --- 1. SMOOTH SCROLL INITIALIZATION (LENIS) --- //
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


    // --- 2. SCROLL-TRIGGERED ANIMATIONS (GSAP) --- //
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections and their child elements as they enter the viewport
    const staggerSections = document.querySelectorAll(".stagger-section");
    staggerSections.forEach(section => {
        const animatedElements = section.querySelectorAll(".g-anim");
        gsap.from(animatedElements, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2, // Animate each element 0.2s after the previous one
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none none",
            }
        });
    });

    // A simpler animation for the hero box
    gsap.from(".hero-box.g-anim", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
    });


    // --- 3. SWIPER SLIDER INITIALIZATIONS --- //

    // a) Hero Banner Slider
    const heroSwiper = new Swiper('.hero-slider', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 1000, // Smooth transition between slides
    });

    // b) Clients Logo Endless Scroll (Marquee Effect)
    const logoSwiper = new Swiper('.logo-marquee-slider', {
        loop: true,
        slidesPerView: 'auto', // Shows as many as can fit
        spaceBetween: 30,
        freeMode: true,
        speed: 8000, // Controls the speed of the marquee
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false, // Ensures it doesn't stop on hover
        },
    });


    // --- 4. MOBILE MENU FUNCTIONALITY --- //
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    // Function to open/close the menu
    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileNavOverlay.classList.toggle('active');
    }

    // Event listener for the hamburger button
    hamburger.addEventListener('click', toggleMenu);

    // Event listener for each link inside the mobile menu to close it on click
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

});

