let bottone1 = document.querySelector("#cliccami"); //Servono le "" per identificare l'elemento nel DOM.
// Essendo questo un pulsante e non un input non serve il addEventListener lì dentro, ma va direttamente nella funzione in questo caso.


bottone1.addEventListener("click", function showPopup(){
          alert("Grazie per aver cliccato!");    
    });


let contatoreBottone = 0;
const clickMassimi = 24;

let bottoneSkip = document.querySelector("#skip");
let messaggio = document.querySelector("#messaggio");

function aggiornaMessaggio() {
    let clickRestanti = clickMassimi - contatoreBottone;
    messaggio.textContent = `Hai premuto il pulsante ${contatoreBottone} volte. Premilo altre ${clickRestanti} volte per sbloccare la sorpresa!`;
}

bottone1.addEventListener("click", function () {
    if (contatoreBottone < clickMassimi){
        contatoreBottone++;
    aggiornaMessaggio()    
    
    if (contatoreBottone >= clickMassimi) {
    window.location.href = "Alfabeto.html"; // cambia il nome se necessario
}
}
})

document.getElementById("skip").addEventListener("click", () => {
  contatoreBottone = clickMassimi;
  window.location.href = "alfabeto.html";
});







// Come ingrandire in modo personalizzato un pulsante
// <button id="btnZoom">Clicca qui</button> 


//   const button = document.getElementById("btnZoom");

//   button.addEventListener("mouseover", () => {
//     button.style.transform = "scale(1.2)";
//     button.style.transition = "transform 0.3s ease";
//   });

//   button.addEventListener("mouseout", () => {
//     button.style.transform = "scale(1)";
//   });

