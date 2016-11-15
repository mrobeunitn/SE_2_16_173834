
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
    htmlstring+="</table>";
    document.write(htmlstring+"<br>");
    document.getElementById("tabella").innerHTML = htmlstring ;
    return htmlstring;
}