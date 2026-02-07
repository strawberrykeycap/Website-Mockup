import './style.css'
import './modal.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import {  openModal, closeModal, initializeModalSystem} from './modal.js'
import { setupCounter } from './counter.js'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <!-- Add a button to open modal -->
      <button id="open-modal" type="button">Open Modal</button>
    </div>
    
    <!-- Add modal HTML structure -->
    <div id="myModal" class="jw-modal">
      <div class="jw-modal-content">
        <span class="jw-close">&times;</span>
        <p>Modal content here...</p>
      </div>
    </div>
    
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
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
