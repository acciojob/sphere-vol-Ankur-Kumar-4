function volume_sphere() {

	const radius = parseInt(document.getElementById("radius").value);

	const vol = (4/3)*Math.PI*Math.pow(radius,3);

    document.getElementById("volume").value= vol ;
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
