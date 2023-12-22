function scrollAds(direction) {
    const container = document.querySelector('.ads-container');
    const scrollAmount = direction * container.clientWidth;
    container.scrollLeft += scrollAmount;
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleMenuButton = document.getElementById('toggleMenu');
    const menu = document.querySelector('.menu');
    const menuItems = menu.querySelectorAll('li');

    toggleMenuButton.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    const currentPath = window.location.pathname;
    menuItems.forEach(function (menuItem) {
        const link = menuItem.querySelector('a');
        if (link.href === window.location.href) {
            link.classList.add('active-tab');
        }
    });
});

