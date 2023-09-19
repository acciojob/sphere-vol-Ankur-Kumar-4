document.getElementById("MyForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

  
    const radius = parseFloat(document.getElementById("radius").value);

    // Check if the input is a valid number
    if (isNaN(radius)) {
        alert("Please enter a valid number for the radius.");
        return;
    }

  
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

   
    document.getElementById("volume").value = volume.toFixed(4); // Rounded to 2 decimal places
});
