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
