PROBLEMA:L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

1 creare pulsante nel dom
2 recuerare il pulsante in js
3 aggiungere l'event listeren al pulsante
4 creare un div nel dom che conterra le caselle della griglia 
5 creare le caselle dinamicamnee ed agiungere al div

SOTTO PROBLEMA 2 :Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
  
1 scrivere nella casella il numero corispondente
1.1 al interno del for , utilizzo la proprieta innertext della casella create per assegnarli il valore numerico (i+1);
2 aggiungo l'event listeren alla casella 
3  al click la casella si colora di azzuro 
4- al click della casella mostro in console il numero della casella cliccata 

Bonus (da fare solo una volta finito l'esercizio base)
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

SOLUZIONE
1 Aggiungere la select al dom
2 al click del pulsante recuperare il valore selezionato dalla select
3 generare la griglia in base al valore della select

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
SUPER BONUS 1 (da fare solo una volta terminato il bonus)
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
SUPER BONUS 2  (da fare solo una volta terminato il bonus)
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.

PROBLEMA : generare un array di bombe 
1- crea una funzione che genera randomicamnete un numero(in totale devono essere 16):
2- crea un array , inizialmente vuoto;
    2.1- Genero il numero casuale 
    2.2 ?se il numero non incluso nel array lo includo
    2.3 : ALTRIMENTI proseguo
