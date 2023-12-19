function scrollAds(direction) {
    const container = document.querySelector('.ads-container');
    const scrollAmount = direction * container.clientWidth;
    container.scrollLeft += scrollAmount;
}

document.addEventListener('DOMContentLoaded', function () {
    const tabsContainer = document.querySelector('.tabs-container');
    const tabs = tabsContainer.querySelectorAll('button');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active-tab'));
            tab.classList.add('active-tab');
        });
    });
});
