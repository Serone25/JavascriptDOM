let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
var desplegable = document.querySelector("#mySelect");
const agregar = () =>{
        for(let i =0;i< countries.length;i++){
            const option = document.createElement("option");
            option.innerHTML=countries[i];
            desplegable.appendChild(option)
        }
}
 desplegable.addEventListener("change",function(event){
    alert(event.target.value);
 })
 agregar();
