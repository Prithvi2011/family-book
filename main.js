var images=["father.png","mother.png","brother.jpg","me.jpg"];
var name=["Girish Mantur","Sudarshini Mantur","Prithvi Mantur","Adarsh Mantur"];
var i=0;
function nextslide(){
  
    document.getElementById("family").innerHTML=name[i];
    document.getElementById("img").src=images[i];
    i++;
} 
