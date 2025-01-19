export default function loadContactPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';

    const phone = document.createElement('p');
    phone.textContent = 'Phone: (123) 456-7890';

    const email = document.createElement('p');
    email.textContent = 'Email: contact@amazingeats.com';

    const address = document.createElement('p');
    address.textContent = 'Address: 123 Main St, Townsville';

    contentDiv.appendChild(headline);
    contentDiv.appendChild(phone);
    contentDiv.appendChild(email);
    contentDiv.appendChild(address);
}