document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Typed.js Initialization ---
    // This targets the <span id="typed-target"> in your HTML
    var options = {
        strings: [
            'GenAI Applications.',
            'Data-Driven Solutions.',
            'Cloud-Native Pipelines.',
            'Agentic AI Systems.'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 2000
    };

    // Only run Typed.js if the target element exists
    if (document.getElementById('typed-target')) {
        var typed = new Typed('#typed-target', options);
    }

    // --- 2. Navigation / Tab Switching ---
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');
    const contentWindow = document.querySelector('.content-window');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            
            // Remove 'active' from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' to clicked button
            button.classList.add('active');

            // Hide all sections
            contentSections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });

            // Scroll to top of content window
            if (contentWindow) {
                contentWindow.scrollTo(0, 0);
            }
        });
    });
});
