function scrollAds(direction) {
    const container = document.querySelector('.ads-container');
    const scrollAmount = direction * container.clientWidth;
    container.scrollLeft += scrollAmount;
}