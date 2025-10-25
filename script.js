document.addEventListener('DOMContentLoaded', () => {
    
    // --- Boot Sequence Logic ---
    const bootLoader = document.getElementById('boot-loader');
    const mainContent = document.getElementById('main-content');
    const chatBubble = document.getElementById('chatBubble');

    function runBootSequence() {
        setTimeout(() => document.getElementById('boot-line-4').style.display = 'block', 700);
        setTimeout(() => document.getElementById('boot-line-5').style.display = 'block', 1400);
        setTimeout(() => document.getElementById('boot-line-6').style.display = 'block', 2000);
        
        // Fade out loader and fade in content
        setTimeout(() => {
            bootLoader.style.transition = 'opacity 0.5s ease';
            bootLoader.style.opacity = '0';
            
            mainContent.style.display = 'block';
            chatBubble.style.display = 'flex'; // Show the chat bubble
            
            setTimeout(() => {
                bootLoader.style.display = 'none';
                mainContent.style.opacity = '1'; // Start invisible for AOS
                AOS.init({
                    duration: 800,
                    once: true,
                });
            }, 500);
        }, 2500);
    }
    
    runBootSequence(); // Start the boot sequence

    // --- AI Agent Chatbot UI Logic ---
    const chatWindow = document.getElementById('chatWindow');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    // Toggle chat window
    chatBubble.addEventListener('click', () => {
        chatWindow.style.display = 'flex'; // Use 'flex' to match CSS
    });

    closeChatBtn.addEventListener('click', () => {
        chatWindow.style.display = 'none';
    });

    // Handle sending a message
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const messageText = chatInput.value.trim();
        if (messageText === '') return;

        // Display user's message
        displayMessage(messageText, 'user');

        // Clear input
        chatInput.value = '';

        // Get bot's response
        getBotResponse(messageText);
    });

    /**
     * Displays a message in the chat window
     * @param {string} message - The message text
     * @param {string} sender - 'user' or 'bot'
     */
    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        
        // Scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    /**
     * Shows the typing indicator
     */
    function showTypingIndicator() {
        const typingElement = document.createElement('div');
        typingElement.classList.add('chat-message', 'bot', 'chat-typing-indicator');
        typingElement.id = 'typingIndicator';
        typingElement.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(typingElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    /**
     * Hides the typing indicator
     */
    function hideTypingIndicator() {
        const typingElement = document.getElementById('typingIndicator');
        if (typingElement) {
            chatMessages.removeChild(typingElement);
        }
    }

    /**
     * Gets a response from the bot (simulated)
     * @param {string} userMessage - The user's message
     */
    async function getBotResponse(userMessage) {
        // 1. Show the typing indicator
        showTypingIndicator();

        // --- TODO: This is where you connect to your *real* backend! ---
        /*
        try {
            const response = await fetch('https://your-fastapi-backend.com/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: userMessage }),
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            const botMessage = data.reply; // Adjust based on your API's response
            
            // 3. Hide typing indicator
            hideTypingIndicator();
            // 4. Display the *real* message
            displayMessage(botMessage, 'bot');

        } catch (error) {
            console.error('Error fetching bot response:', error);
            hideTypingIndicator();
            displayMessage("Sorry, I'm having trouble connecting to my brain right now.", 'bot');
        }
        */

        // 3. --- Placeholder Logic (Remove this when you connect your backend) ---
        setTimeout(() => {
            let botMessage = "I'm a demo! Anuj is building my real RAG backend. Try asking me about 'Snowflake' or 'LangGraph'.";
            
            if (userMessage.toLowerCase().includes('snowflake')) {
                botMessage = "Anuj has hands-on experience with Snowflake, including building ELT pipelines using Snowpipe for real-time ingestion, and Streams & Tasks for automated transformations.";
            } else if (userMessage.toLowerCase().includes('langgraph')) {
                botMessage = "Yes! He built his CortexVector math tutor using LangGraph. He used it to create a multi-step agentic reasoning flow for solving math problems.";
            }
            
            // 4. Hide typing indicator
            hideTypingIndicator();
            // 5. Display the message
            displayMessage(botMessage, 'bot');
        }, 1500 + Math.random() * 500); // Simulate a 1.5-2s delay
        // --- End of Placeholder Logic ---
    }
});