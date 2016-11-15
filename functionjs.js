
var maxvalue = 30;
var items = [{"type":"Smartphone", "qta": 2 },{"type":"PC", "qta": 8 }];


//funzione che mi ritorna la tabella precompilata
function visualizzaTabella(){
    //mi creo una variabile stringa di html tag condegli indici. per ogni item dell'array vado a sostituire il relativo valore
    var table = document.getElementById("tabella");
    for(var i = 0 ; i < items.length; i++ ){
        var row = table.insertRow(-1); 
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = items[i].type;
        cell2.innerHTML = items[i].qta;
    }
}

//fuznione per disegnare il form per ordinare 
function getForms(){
    hideButtonSize();
    document.getElementById("ordina").style.display ='block';
}
//nascondo il form ordina
function hideButtonOrdina(){
     document.getElementById("ordina").style.display ='none';
}
//visualizzo bottone per generare il campo per modificare qta max
function getMaxSize(){
    hideButtonOrdina();
    document.getElementById("maxsize").style.display ='block';
}
//nascondo qta max generator
function hideButtonSize(){
     document.getElementById("maxsize").style.display ='none';
}

//funzione per la gestione dell'ordinee

function ordina(){
    var item = document.getElementById("item").value;
    var qta = document.getElementById("qta").value;
    var i =0;
    var trovato = false;
    var pos = 0;
    while( i < items.length && trovato == false ){
        if(items[i].type === item){
            trovato = true;
            pos = i;
        }
        i++;
    }
    if(trovato == true){
        items[pos].qta += qta;
        alert("Ordine effettuato");
    }
    else{
      var temp = {"type": item, "qta": qta};
      item.push(temp);
      alert("Ordine Effettuato");
    }
    visualizzaTabella();
}

