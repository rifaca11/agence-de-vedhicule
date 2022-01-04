
        var curb=document.getElementById("cars2");

        var typeCar = document.getElementById("cars");

        typeCar.onchange= function (){
        
        curb.innerHTML="";
        let x=typeCar.value.trim();

        if (x=="moto") {
          curb.innerHTML +='<option value="electrical">Electrical</option>';
          curb.innerHTML +='<option value="essence">Essence</option>';
        }

        else if (x == "citadine") {
          curb.innerHTML +=
            "<option value='essence'selected>Essence</option>" +
            "<option value='diesel'>Diesel</option>" +
            "<option value='electrical'>Electrical</option>" +
            "<option value='hybride'>Hybride</option>";
        }
        else if (x == "compact") {
          curb.innerHTML =
            "<option value='essence' selected>Essence</option>" +
            "<option value='diesel'>Diesel</option>" +
            "<option value='hybride'>Hybride</option>";
        }
        else if (x == "berlin") {
          curb.innerHTML =
            "<option value='essence' selected>Essence</option>" +
            "<option value='diesel'>Diesel</option>" +
            "<option value='hybride'>Hybride</option>";
        }
        else if (x == "utilitaire") {
          curb.innerHTML =
            "<option value='diesel' v>Diesel</option>";
        }
        else if (x == "engin") {
          curb.innerHTML =
            "<option value='essence' selected>Essence</option>" +
            "<option value='diesel'>Diesel</option>";
        }
        else if (x == "camion") {
          curb.innerHTML =
            "<option value='diesel' selected>Diesel</option>";
        }



  
  
        if (x == "berlin" || x == "camion") {
          document.getElementById("cars3").innerHTML =
            "<option value='auto' selected>Automatic</option>";
  
        }
        else if (x == "citadine"  || x == "compact"  || x == "utilitaire"  || x == "engin" ) {
          document.getElementById("cars3").innerHTML =
            "<option value='Manual' selected>Manual</option>";
        }
  
        else {
          document.getElementById("cars3").innerHTML =
            "<option value='' selected>Choose from the list below</option>";
        }

        
      }
  



      function reservation() {
        var somme = 0;
        var numofday =document.getElementById('days').value;
        var type = document.getElementById('cars').value;
        var carbur = document.getElementById('cars2').value;
        var speed = document.getElementById('cars2').value;
  
        switch (type) {
          case "moto":
            somme += 10;
            break;
          case "citadine":
            somme += 12;
            break;
          case "compact":
            somme += 14;
            break;
          case "berlin":
            somme += 20;
            break;
          case "utilitaire":
            somme += 16;
            break;
          case "engin":
            somme += 900;
            break;
          case "camion":
            somme += 250;
            break;
            default:break;
        }
        switch (carbur) {
          
          case "electrical":
            somme += 0.05;
            break;
          case "hybride":
            somme += 0.09;
            break;
          case "essence":
            somme += 0.14;
            break;
          case "diesel":
            somme += 0.21;
            break;
        }
        switch (speed) {
          case "manual":
            somme += 0;
            break;
          case "auto":
            somme += 0.19;
            break;
            default : somme += 0;
        }
        if (numofday < 0 || numofday=="") {
          alert("Please enter a valid number greater than or equal to 1.");
        }
        else {
          somme*=numofday;
          alert("Thank you for your purchase\n" +
            "The bill: " + parseFloat(somme).toFixed(2) + "$");
        }
        
        
      }
  