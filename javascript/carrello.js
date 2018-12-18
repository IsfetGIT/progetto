function aggCarrello(oggetto) {
    oggetto = JSON.parse(oggetto);
    var utenteCollJSON = sessionStorage.getItem("utenteColl");
    if(utenteCollJSON == null) {
        alert("Accedi prima di aggiungere al carrello");
        return;
    }
    var utenteColl = JSON.parse(utenteCollJSON);
    var carrelloJSON = localStorage.getItem("carrello");
    if(carrelloJSON == null) {
        var carrello = [{mail: utenteColl.mail , oggettiCarrello: [{valore: oggetto, numero: 1}]}]
        localStorage.setItem("carrello", JSON.stringify(carrello));
    }
    else {
        var carrello = JSON.parse(carrelloJSON);
        for(i = 0; i< carrello.length; i++) {
            if(carrello[i].mail == utenteColl.mail) {
                for(t = 0; t < carrello[i].oggettiCarrello.length; t++){
                    if((carrello[i].oggettiCarrello)[t].valore.nome == oggetto.nome){
                        console.log(oggetto);
                        (carrello[i].oggettiCarrello)[t].numero += 1;
                        localStorage.setItem("carrello", JSON.stringify(carrello));
                        return;
                    }
                }
                carrello[i].oggettiCarrello.push({valore: oggetto, numero: 1});
                localStorage.setItem("carrello", JSON.stringify(carrello));
                return;
            }
        }
        var carrelloColl = {mail: utenteColl.mail , oggettiCarrello: [{valore: oggetto, numero: 1}]};
        carrello.push(carrelloColl);
        localStorage.setItem("carrello", JSON.stringify(carrello));
    }

}

function setCarrello() {
    var utenteCollJSON = sessionStorage.getItem("utenteColl");
    if(utenteCollJSON == null){
        alert("Devi prima accedere per visualizzare il carrello");
        return;
    }
    var utenteColl = JSON.parse(utenteCollJSON);
    var carrelloJSON = localStorage.getItem("carrello");
    if(carrelloJSON == null){
        "Non hai nessun elemento nel carrello";
        return;
    }
    var carrello = JSON.parse(carrelloJSON);
    for(i = 0; i < carrello.length ; i++){
        if(carrello[i].mail == utenteColl.mail) {
            var prezzoTot = 0;
            for(t = 0; t< carrello[i].oggettiCarrello.length; t++){    
                var oggettoC = carrello[i].oggettiCarrello[t];
                var oggetto = oggettoC.valore;
                var quantita = oggettoC.numero;
                prezzoTot += oggetto.prezzo;
                var trEl = document.createElement("tr");
                var tdimgEl = document.createElement("td");
                var imgEl = document.createElement("img");
                imgEl.setAttribute("src", oggetto.img);
                imgEl.setAttribute("class", "imgOggetti");
                tdimgEl.appendChild(imgEl);
                var tdNome = document.createElement("td");
                var textNome = document.createTextNode(oggetto.nome);
                tdNome.appendChild(textNome);
                var tdNum = document.createElement("td");
                var textNum = document.createTextNode(quantita);
                tdNum.appendChild(textNum);
                var tdPrezzo = document.createElement("td");
                var textPrezzo = document.createTextNode(oggetto.prezzo);
                tdPrezzo.appendChild(textPrezzo);
                var tdButton = document.createElement("td");
                var button = document.createElement("button");
                button.setAttribute("value", JSON.stringify(oggetto));
                button.setAttribute("onclick", "rimuovi(this.value)" );
                var textButton = document.createTextNode("Rimuovi dal carrello");
                button.appendChild(textButton);
                tdButton.appendChild(button);

                trEl.appendChild(tdimgEl);
                trEl.appendChild(tdNome);
                trEl.appendChild(tdNum);
                trEl.appendChild(tdPrezzo);
                trEl.appendChild(tdButton);
                var tabella = document.getElementById("table");
                tabella.appendChild(trEl);
            }
            "Stampa il prezzo totale";
            return;
        }
    }
    "Nessun elemento nel carrello";

    
}
