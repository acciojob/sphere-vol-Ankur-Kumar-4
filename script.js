function volume_sphere() {
    const radius = parseFloat(document.getElementById("radius").value);

    const vol = (4 / 3) * Math.PI * Math.pow(radius, 3);

    document.getElementById("volume").value = vol.toFixed(2); // Round to 2 decimal places
}

window.onload = function () {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
