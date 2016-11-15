
var maxvalue = 30;
var items = [{"type":"Smartphone", "qta":"2"},{"type":"PC", "qta": "8" }];


//funzione che mi ritorna la tabella precompilata
function visualizzaTabella(){
    //mi creo una variabile stringa di html tag condegli indici. per ogni item dell'array vado a sostituire il relativo valore
    var stringa = "<tr><td>{item}</td><td>{qta}</td></tr>";
    var htmlstring="<table><tr><td align='center'><b>Object</b></td><td align='center'><b>Quantity</b></td></tr> ";
    for(var i = 0 ; i < items.length; i++ ){
        htmlstring+= "<tr><td align='center'>"+items[i].type+"</td><td align='center'>"+items[i].qta+"</td></tr>"
        //stringa.replace(item,items[i].type).replace(qta,items[i].qta);
    }
    htmlstring+="</table> <h4 align='right'>Max Order Item : 30</h4>";
    document.write(htmlstring+"<br>");
    document.getElementById("tabella").innerHTML = htmlstring ;
    return htmlstring;
}

//fuznione per disegnare il form per ordinare 

function getForms(){
    htmlstring = "<input type='text' name='item' placeholder='item'>";
    htmlstring+= "<input type='text' name='qta' placeholder='qta'>";
    htmlstring+="<input type='button' name='order' value='send' onclick='ordina()'>";
    document.getElementById("OrderForm").innerHTML = htmlstring ;
}

