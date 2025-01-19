import coffeeImage from './img/homepage.jpg';
export default function loadHomePage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

// Create an image element
const image = document.createElement('img');
image.src = coffeeImage;
image.alt = 'Black Coffee';
image.className = 'homepage-image';

// Create a headline element
const headline = document.createElement('h1');
headline.textContent = 'Welcome to Amazing Coffee!';

// Create a paragraph element
const description = document.createElement('p');
description.textContent = 'Start your day with our freshly brewed black coffee!';

// Append elements to the contentDiv
contentDiv.appendChild(image);
contentDiv.appendChild(headline);
contentDiv.appendChild(description);

}