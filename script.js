function volume_sphere() {

	const radius = document.getElementById("radius").value;

	let vol = (4)/(3*3.14)*(radius*radius*radius);

    document.getElementById("volume").value= vol ;
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
