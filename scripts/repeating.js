document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("jsi-flying-fish-container");
    const vehicle = document.createElement("img");

    vehicle.src = "styles/images/icon.png"; 
    vehicle.className = "flying-vehicle"; 

    container.appendChild(vehicle);

    let position = -vehicle.width;
    const speed = 2;

    function moveVehicle() {
        position += speed;
        vehicle.style.transform = `translateX(${position}px)`;

        if (position > window.innerWidth) {
            vehicle.remove(); 
        } else {
            requestAnimationFrame(moveVehicle);
        }
    }

    requestAnimationFrame(moveVehicle);
});
