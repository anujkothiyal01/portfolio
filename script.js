document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Typed.js Hero Animation ---
    if (document.getElementById('typed-target')) {
        new Typed('#typed-target', {
            strings: [
                'Agentic AI Systems.',
                'Cloud Data Pipelines.',
                'RAG-Powered Applications.',
                'High-Performance APIs'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 2000
        });
    }
    
    // --- 2. Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    // Close mobile nav when a link is clicked
    mobileNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });

    // --- 3. Agent Chat Modal Logic ---
    const agentModal = document.getElementById('agent-modal');
    const fabToggle = document.getElementById('agent-fab-toggle');
    const heroAskBtn = document.getElementById('hero-ask-ai-btn');
    const closeBtn = document.getElementById('agent-close-btn');
    const askAiLinks = document.querySelectorAll('.ask-ai-link');

    function openModal() {
        agentModal.classList.add('active');
    }
    function closeModal() {
        agentModal.classList.remove('active');
    }

    // Open modal triggers
    fabToggle.addEventListener('click', openModal);
    heroAskBtn.addEventListener('click', openModal);

    // Close modal triggers
    closeBtn.addEventListener('click', closeModal);
    agentModal.addEventListener('click', (e) => {
        // Close if clicking on the overlay background
        if (e.target === agentModal) {
            closeModal();
        }
    });

    // Handle "Ask AI about this" links
    askAiLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectContext = link.getAttribute('data-context');
            if (projectContext) {
                const chatInput = document.getElementById('chat-input');
                chatInput.value = `Tell me more about the ${projectContext} project.`;
            }
            openModal();
            document.getElementById('chat-input').focus();
        });
    });

    // --- 4. Chat Submission Logic (Identical to before) ---
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userMessage = chatInput.value.trim();
        if (userMessage === '') return;
        addMessage(userMessage, 'user');
        chatInput.value = '';
        addMessage('...', 'ai typing');
        setTimeout(() => getAgentResponse(userMessage), 1500);
    });

    function addMessage(message, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);
        messageElement.innerHTML = `<p>${message}</p>`;
        const typingIndicator = chatMessages.querySelector('.typing');
        if (typingIndicator) {
            typingIndicator.remove();
        }
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // MOCK AI BACKEND (Replace with your FastAPI call)
    function getAgentResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        let response = "I'm not sure how to answer that. Try asking about Anuj's skills in Python, RAG, or Snowflake.";
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            response = "Hello! How can I help you understand Anuj's qualifications?";
        } else if (lowerMessage.includes('rag') || lowerMessage.includes('retrieval')) {
            response = "Anuj has hands-on experience with RAG, particularly in building pipelines with LangChain and FastAPI. He used this in his CortexVector project to allow an AI to query a knowledge base of math problems.";
        } else if (lowerMessage.includes('cortexvector')) {
            response = "CortexVector is Anuj's personal project to build a GenAI math tutor. He's using it to explore advanced agentic concepts with LangGraph, building on a RAG core he already implemented.";
        } else if (lowerMessage.includes('snowflake')) {
            response = "Anuj gained experience with Snowflake as a Data Engineer Intern at Mactores. He is skilled in building ELT pipelines, using Snowpipe for data ingestion, and writing optimized SQL for transformations.";
        }
        addMessage(response, 'ai');
    }

    // --- 5. Scroll-Spy (Highlights Nav on Scroll) ---
    const sections = document.querySelectorAll('.content-section');
    const allNavLinks = document.querySelectorAll('.main-nav .nav-link, .mobile-nav .nav-link');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.4 // 40% of the section must be visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                allNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });

    // --- 6. (Optional) Hero Canvas Animation ---
    const canvas = document.getElementById('agent-graph-animation');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(0, 191, 255, 0.5)';
        ctx.font = '12px "Fira Code"';
        ctx.fillText('// Node graph animation loads here', 20, 30);
    }
});