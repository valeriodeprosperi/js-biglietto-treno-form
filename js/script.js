var bottoneGenera = document.getElementById('genera');
bottoneGenera.addEventListener("click" ,
 function() {
   // blocco istruzioni
   // 1 recupero nome Utente tramite campo input
   var nome = document.getElementById("nome").value;
   console.log(nome);
   // 2 recupero km tramite campo input
   var km = document.getElementById('km').value;
   console.log(km);
   // 3 recupero km tramite campo input
   var fasciaEta = document.getElementById('eta').value;
   console.log(fasciaEta);
   var prezzoKm = 0.21;

   var totale = km * prezzoKm;
   var tipoOfferta = "Biglietto standard"
// sconto minorenni e over 65
    if (fasciaEta == "minorenne") {
     totale = totale - ((totale  * 20) / 100);
     tipoOfferta = "Sconto minorenne";
   } else if (fasciaEta == "over65"){
  totale = totale - ((totale * 40) / 100);
       tipoOfferta = "Sconto silver";
  }

// arrotondo totale a due decimali
totale = totale.toFixed(2);
// genero numeri random per carrozza e codice cp
var numCarrozza = Math.floor(Math.random()* 10);
var codiceCp = Math.floor(Math.random()* 10000) * 90000;

// stampare il nostro Biglietto
document.getElementById("nome-passegero").innertHTML = nome;
document.getElementById("offerta").innertHTML = tipoOfferta;
document.getElementById("carrozza").innertHTML = numCarrozza;
document.getElementById("codice-cp").innertHTML = codiceCp;
document.getElementById("costo-biglietto").innertHTML = totale + "€";


document.getElementById("biglietto").classList.add("show");


 }
 );

 var bottoneAnnulla = document.getElementById("annulla");
 bottoneAnnulla.addEventListener("click",
function(){
  document.getElementById('nome').value = "";
      document.getElementById('km').value = "";
      document.getElementById('eta').value = "";



  document.getElementById("biglietto").classList.remove("show");

}

);
