// modal-utils.js

export function helloWorld() {
    console.log('Hello world!');
}

export function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('open');
        document.body.classList.add('jw-modal-open');
        console.log(`Modal ${id} opened`);
    } else {
        console.warn(`Modal with id "${id}" not found`);
    }
}

export function closeModal() {
    const openModal = document.querySelector('.jw-modal.open');
    if (openModal) {
        openModal.classList.remove('open');
        document.body.classList.remove('jw-modal-open');
        console.log('Modal closed');
    }
}

// Initialize the event listeners
export function initializeModalSystem() {
    // Close modals on background click
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });
    
    // Listen for hero button click
    const heroButton = document.getElementById('open-modal');
    if (heroButton) {
        heroButton.addEventListener('click', () => {
            console.log('Hero button clicked');
            openModal('modal-1'); // Assuming modal-1 is the ID of your modal
        });
    } else {
        console.warn('Hero button (id="herobutton") not found in the DOM');
    }
    


     const supportButton = document.getElementById('support-button');
    if (supportButton) {
        supportButton.addEventListener('click', () => {
            console.log('Support button clicked');
            openModal('modal-1'); // Assuming modal-1 is the ID of your modal
        });
    } else {
        console.warn('Hero button (id="herobutton") not found in the DOM');
    }



     const newsButton = document.getElementById('news-letter');
    if (newsButton) {
        newsButton.addEventListener('click', () => {
            console.log('News button clicked');
            openModal('modal-1'); // Assuming modal-1 is the ID of your modal
        });

    } else {
        console.warn('News button (id="news-letter") not found in the DOM');
    }


     const inServiceButton = document.getElementById('in-service-button');
    if (inServiceButton) {
        inServiceButton.addEventListener('click', () => {
            console.log('In-Service button clicked');
            openModal('modal-1'); // Assuming modal-1 is the ID of your modal
        });
    } else {
        console.warn('Hero button (id="herobutton") not found in the DOM');
    }
    // Optional: Add close button listener if it exists
    const closeButton = document.querySelector('.jw-modal .close-btn, .jw-modal button[onclick*="closeModal"]');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    
    
    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', initializeModalSystem);

// Alternative: Also run when window loads for safety
window.addEventListener('load', function() {
    // Re-initialize in case DOM elements were added after DOMContentLoaded
    if (!document.getElementById('herobutton') || !document.getElementById('modal-1')) {
        console.log('Rechecking for modal elements on window load');
        initializeModalSystem();
    }
});

// Export all functions as a module
export default {
    openModal,
    closeModal,
    initializeModalSystem,
    helloWorld
};