import { Hello } from "./Hello";

import{Messaggio} from "./Messaggio"

export function App(){
    return(
        <div>
            <Hello/>
            <Messaggio/>
           
        </div>
    )
}



/*
1 Puoi utilizzare il componente Hello più di una volta nel componente App? 
  Si.


2Cosa succede se lo fai?
 Si visualizza il componente in base a quante volte lo riutilizzi.



3Puoi eseguire il rendering del componente Messaggio direttamente all'interno del componente App?
 Si.

4Cosa succede se lo fai?
 Viene visualizzato in Pagina.*/