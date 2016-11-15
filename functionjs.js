
var maxvalue = 30;
var items = [{"type":"Smartphone", "qta": 2 },{"type":"PC", "qta": 8 }];


//funzione che mi ritorna la tabella precompilata
function initTabella(){
    var table = document.getElementById("tabella");
    for(var i = 0 ; i < items.length; i++ ){
        var row = table.insertRow(-1); 
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = items[i].type;
        cell2.innerHTML = items[i].qta;
    }
}

//funzione per settare il placeholder del cambio maximum size

function changeSize(){
    maxvalue = parseInt(document.getElementById("mvalue").value);
    document.getElementById("maxval").innerHTML = maxvalue;
    var textf = document.getElementById("mvalue").placeholder;
    textf.innerHTML = maxvalue;
    //document.getElementById("mvalue").placeholder  = maxvalue;
    
}
//fuznione per disegnare il form per ordinare 
function getOrder(){
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
    var qta = parseInt(document.getElementById("qta").value);
    var i =0;
    var trovato = false;
    var pos = 0;
    //faccio una ricerca per vedere se trovo l'oggetto che l'utente ha deciso di ordinare
    while( i < items.length && trovato == false ){
        if(items[i].type === item){
            trovato = true;
            pos = i;
        }
        i++;
    }
    if(trovato == true){
        items[pos].qta += qta;
        alert("Ordine effettuato ");
        //vado ad aggiornare la tabella in corrispondenza dell'oggetto già esistente
        document.getElementById("tabella").rows[pos+1].cells[1].innerHTML =  items[pos].qta;
    }
    else{
      var temp = {"type": item, "qta": qta};
      item.push(temp);
      alert("Ordine Effettuato");
    }
}
