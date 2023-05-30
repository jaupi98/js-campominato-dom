// DEFINIZIONE DELLA FUNZIONE CHE GENERA UN NUMERO CASUALE 
function generateRaandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);

}

// DEFINIZIONE DELLA FUNZIONE CHE MI RIEMPIE L'ARRAY DELLE BOMBE
function fillAraybombs(array_bombs){
    console.log(array_bombs);
}

// DEFINIZIONE DELLA FUNZIONE CHE CREA LA GRIGLIA DI GIOCO
function createNewGame(){
    const grid = document.getElementById('grid');
    const arrayBomb =[];
     // RECUPERO IL LIVELLO DI DIFFICOLTA
     const difficulty =parseInt(document.getElementById('difficulty').value);
    
    // SVUOTO LA GRGLIA
    grid.innerHTML ='';

    let celNumber;
    switch(difficulty){
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
    // INVOCO LA FUNZIONE fillArrayBombs PER RIEMPIRE L'ARRAY CON LE BOMBE
    fillAraybombs(arrayBomb);
   

     //INVOCO LA FUNZIONE createCells PER CREARE LE SINGOLE CASELLE DI GIOCO
    creatCells(celNumber);
}
// DEFINIZIONE DELLA FUNZIONE CHE CREA LE CASELLE DELLA GRIGLIA
function creatCells(cel){


    // GENERO DELLE CASELLE DA SCRIVERE NELLA GRIGLIA   
    for(let i =0; i< cel; i++ ){ 
        const square = document.createElement('div');

        let cellPerRow = Math.sqrt(cel);

        square.classList.add('square');
        square.style.width = `calc(100% / ${cellPerRow})`;
        square.style.height = square.style.width;
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
