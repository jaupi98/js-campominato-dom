
// definizione della funzione ch crea la griglia di gioco
function createNewGame(){
    const grid = document.getElementById('grid');
    // SVUOTO LA GRGLIA
    grid.innerHTML ='';

    for(let i =0; i<100; i++ ){
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerText = i + 1;
        square.addEventListener('click', function(){
            console.log(this.innerText);
        })
        grid.append(square);
    }
}

const button = document.getElementById('play');

button.addEventListener('click', function(){
    createNewGame();
});
