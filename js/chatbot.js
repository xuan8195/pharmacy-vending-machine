// AI Assistant Chatbot Demo
document.addEventListener('DOMContentLoaded', function() {
    const chatWidget = document.getElementById('chat-widget');
    const chatButton = document.getElementById('chat-button');
    const chatClose = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');

    if (!chatWidget || !chatButton) return;

    // Toggle chat window
    chatButton.addEventListener('click', () => {
        chatWidget.classList.toggle('hidden');
        if (!chatWidget.classList.contains('hidden')) {
            chatInput.focus();
        }
    });

    if (chatClose) {
        chatClose.addEventListener('click', () => {
            chatWidget.classList.add('hidden');
        });
    }

    // Predefined responses
    const responses = {
        'hello': 'Hello! I\'m VendoBot. How can I assist you today?',
        'hi': 'Hi there! I\'m here to help you learn about Vendo Pharmacy.',
        'hours': 'Our pharmacy vending machines are available 24/7, every day of the year!',
        'location': 'We have machines at various MRT stations and residential estates. Check our website for specific locations.',
        'prescription': 'Prescription-Only Medicines (POM) can be collected from our secure locker system after pharmacist verification.',
        'safety': 'All medications are stored in temperature-controlled environments and dispensed with pharmacist oversight for regulated medicines.',
        'help': 'I can answer questions about our services, locations, operating hours, and medication types. Try asking about prescription collection or safety!',
        'default': 'Thank you for your question. For detailed information, please explore our website or contact our support team.'
    };

    // Add message to chat
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `mb-3 ${isUser ? 'text-right' : 'text-left'}`;
        
        const bubble = document.createElement('div');
        bubble.className = `inline-block px-4 py-2 rounded-lg ${
            isUser 
                ? 'bg-[#D94A5C] text-white' 
                : 'bg-[#EBF6F5] text-[#1F2937]'
        } max-w-xs`;
        bubble.textContent = message;
        
        messageDiv.appendChild(bubble);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Get bot response
    function getBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        for (const [key, response] of Object.entries(responses)) {
            if (lowerMessage.includes(key)) {
                return response;
            }
        }
        
        return responses['default'];
    }

    // Send message
    function sendMessage() {
        const message = chatInput.value.trim();
        
        if (message) {
            addMessage(message, true);
            chatInput.value = '';
            
            // Simulate bot typing delay
            setTimeout(() => {
                const response = getBotResponse(message);
                addMessage(response, false);
            }, 500);
        }
    }

    // Event listeners
    if (chatSend) {
        chatSend.addEventListener('click', sendMessage);
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Welcome message
    setTimeout(() => {
        addMessage('Hello! I\'m VendoBot, your virtual assistant. Ask me anything about Vendo Pharmacy!', false);
    }, 1000);
});
