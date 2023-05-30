
// DEFINIZIONE DELLA FUNZIONE CHE CREA LA GRIGLIA DI GIOCO
function createNewGame(){
    const grid = document.getElementById('grid');
     // RECUPERO IL LIVELLO DI DIFFICOLTA
     const difficulty =parseInt(document.getElementById('difficulty').value);
    
    // SVUOTO LA GRGLIA
    grid.innerHTML ='';

     //INVOCO LA FUNZIONE createCells PER CREARE LE SINGOLE CASELLE DI GIOCO
    creatCells(difficulty);
}
// DEFINIZIONE DELLA FUNZIONE CHE CREA LE CASELLE DELLA GRIGLIA
function creatCells(level){

    let celNumber;
    switch(level){
        case 1:
            celNumber = 100;
            break;
        case 2:
            celNumber = 81;
            break;
        case 3:
            celNumber = 49;
            break;
            

    }
    console.log(celNumber);

    // GENERO DELLE CASELLE DA SCRIVERE NELLA GRIGLIA   
    for(let i =0; i< celNumber; i++ ){ 
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerText = i + 1;

        square.addEventListener('click', function(){
            this.classList.add('clicked')
            console.log(this.innerText);
        })
        grid.append(square);
    }
}
const button = document.getElementById('play');

button.addEventListener('click', function(){
   

    // AL CLICK DEL PULSANTE INVOCO LA FUNZIONE CHE CREA LA GRIGLIA DI GIOCO
    createNewGame();
});
