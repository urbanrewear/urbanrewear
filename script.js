/* =====================================
   Urban Rewear - Coming Soon
   Version 1
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Floating Logo Animation
    // ==========================

    const logo = document.querySelector(".logo");

    let position = 0;
    let direction = 1;

    setInterval(() => {

        position += direction * 0.3;

        if (position > 8) direction = -1;
        if (position < -8) direction = 1;

        logo.style.transform = `translateY(${position}px)`;

    }, 30);



    // ==========================
    // Fade In on Scroll
    // ==========================

    const elements = document.querySelectorAll(
        ".service-card, .contact-card, .glass-card"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0px)";

            }

        });

    }, {

        threshold: 0.2

    });

    elements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = "0.8s ease";

        observer.observe(el);

    });



    // ==========================
    // Button Hover Ripple
    // ==========================

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("mousemove", (e) => {

            const rect = button.getBoundingClientRect();

            button.style.setProperty(
                "--x",
                `${e.clientX - rect.left}px`
            );

            button.style.setProperty(
                "--y",
                `${e.clientY - rect.top}px`
            );

        });

    });



    // ==========================
    // Dynamic Year
    // ==========================

    const footer = document.querySelector("footer");

    const year = new Date().getFullYear();

    footer.innerHTML = `© ${year} Urban Rewear. All Rights Reserved.`;

});



/* =====================================
   Future Features
===================================== */

// Countdown Timer

// Notify Me Form

// Google Analytics

// WhatsApp API

// Booking Form

// Google Maps

// Email Integration

// Theme Switcher
