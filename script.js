//Map filters show/hide logic

const controlPanel = document.querySelector("#content");
const controlToggle = document.querySelector("#topper")

controlToggle.addEventListener('click', () => {
    const visible = controlPanel.getAttribute('data-visible');

    if (visible === 'true') {
        controlPanel.setAttribute('data-visible', 'false');
        document.getElementById('toggle-text').innerHTML = "Show Map Controls";
        document.getElementById('toggle-button').className = "fa-solid fa-caret-left";
        controlToggle.style.borderRadius = "0 0 0 0";
    }
    else {
        controlPanel.setAttribute('data-visible', 'true');
        document.getElementById('toggle-text').innerHTML = "Hide Map Controls";
        document.getElementById('toggle-button').className = "fa-solid fa-caret-right";
        controlToggle.style.borderRadius = "10px 0 0 0";
    }
})