import './style.css'
import './modal.css'


import progress from '/progress.png'
import { openModal, closeModal, initializeModalSystem } from './modal.js'
import { setupCounter } from './counter.js'


// Define the function
function helloWorld() {
    console.log("Hello, World!");
}

// Attach it to the window object
window.helloWorld = helloWorld;
// Or use window.onload = helloWorld if that's your intent
window.onload = helloWorld;

// Use the imported functions
document.addEventListener('DOMContentLoaded', () => {
    initializeModalSystem();
    setupCounter(document.getElementById('counter'));
    
    document.getElementById('open-modal').addEventListener('click', () => {
        openModal('modal-1');
    });
});
