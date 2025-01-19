import './styles.css';
import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';

function initializeWebsite() {
    const homeButton = document.getElementById('home-btn');
    const menuButton = document.getElementById('menu-btn');
    const contactButton = document.getElementById('about-btn');

    // Add event listeners for buttons
    homeButton.addEventListener('click', () => loadHomePage());
    menuButton.addEventListener('click', () => loadMenuPage());
    contactButton.addEventListener('click', () => loadContactPage());
}

loadHomePage();
initializeWebsite();
