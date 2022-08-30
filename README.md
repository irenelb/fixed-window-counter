<center>

![logo](logo.png)

<h1>Fixed window counter</h1>

</center>

###RATE LIMITER 

Viene fissato il numero di chiamate che l'utente fa in una finestra temporale.

Window: finestra temporale nel quale vengono fatte le chiamate

per ogni utente:

10 chiamate al minuto === 60s window

salvare l'id dell'utente e tenere il conto delle chiamate se diventano maggiori del numero di chiamate massimo allora le successive
chiamate andranno in errore.
Allo scadere della window verranno resettati i valori a zero.
