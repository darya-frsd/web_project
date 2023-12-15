document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    document.body.appendChild(preloader);

    preloader.innerHTML = '<div class="preloader-animation"></div>';

    const fetchData = async () => {
        try {
            const randomFilter = Math.floor(Math.random() * 200) + 1;
            const url = `https://jsonplaceholder.typicode.com/users/1?filter=${randomFilter}`;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            preloader.style.display = 'none';

            renderUserData(data);
        } catch (error) {
            preloader.innerHTML = '<div class="error-message">⚠ Что-то пошло не так</div>';
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
});

function renderUserData(data) {
    const userContainer = document.getElementById('userContainer');

    userContainer.innerHTML = `
        <h2>${data.name}</h2>
        <p>Username: ${data.username}</p>
        <p>Email: ${data.email}</p>
        <p>Address: ${data.address.city}, ${data.address.street}</p>
        <p>Phone: ${data.phone}</p>
        <p>Website: ${data.website}</p>
        <p>Company: ${data.company.name}</p>
    `;
}
