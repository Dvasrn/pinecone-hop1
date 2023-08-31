function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  const epicMix = [
    "Time to Pretend",
    "O-o-oh Child",
    "Wish You Were Here",
    "Heroes",
    "I Put a Spell on You",
    "Call Me",
    "Paper Planes",
    "Jolene",
    "You Don't Own Me",
    "Fast Car",
    "Run the World (Girls)",
    "Superstition"
   ];

function myFunction(){
    var container = document.getElementById("mydiv");
    for (let i = 0; i < epicMix.length; i++){
        let p = document.createElement("mydiv");
        
        p.innerText = epicMix[i];
        container.append(p)
    }
}
