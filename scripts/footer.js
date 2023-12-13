(function () {
    var startTime = performance.now();

    function displayLoadingTime() {
        var endTime = performance.now();
        var loadTime = endTime - startTime;
        var infoElement = document.createElement('p');
        infoElement.textContent = 'Время загрузки страницы: ' + loadTime.toFixed(2) + ' мс';
         document.querySelector('.footer-section').appendChild(infoElement);
    }

    window.addEventListener('load', displayLoadingTime);
})();
