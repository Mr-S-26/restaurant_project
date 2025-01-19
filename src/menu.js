import espressoImage from './img/espresso.jpg';
import americanoImage from './img/americano.jpg';
import latteImage from './img/latte.jpg';
import cappuccinoImage from './img/cappuccino.jpg';

export default function loadMenuPag() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Our Coffee Menu';

    const menuGrid = document.createElement('div');
    menuGrid.className = 'menu-grid';

    // Coffee items
    const coffeeitems = [
        { name: 'Espresso', image: espressoImage, description: 'A strong black coffee made by forcing steam through ground coffee beans.' },
        { name: 'Americano', image: americanoImage, description: 'A coffee drink prepared by diluting an espresso with hot water.' },
        { name: 'Latte', image: latteImage, description: 'A coffee drink made with espresso and steamed milk.' },
        { name: 'Cappuccino', image: cappuccinoImage, description: 'A coffee drink made with espresso and steamed milk foam.' },
    ];

    coffeeitems.forEach((coffee) => {
        const coffeeCard = document.createElement('div');
        coffeeCard.className = 'coffee-card';

        const coffeeimg = document.createElement('img');
        coffeeimg.src = coffee.image;
        coffeeimg.alt = coffee.name;
        coffeeimg.className = 'coffee-image';

        const coffeeName = document.createElement('h2');
        coffeeName.textContent = coffee.name;

        const coffeeDescription = document.createElement('p');
        coffeeDescription.textContent = coffee.description;

        coffeeCard.appendChild(coffeeimg);
        coffeeCard.appendChild(coffeeName);
        coffeeCard.appendChild(coffeeDescription);

        menuGrid.appendChild(coffeeCard);
    });

    contentDiv.appendChild(headline);
    contentDiv.appendChild(menuGrid);
}