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
    
    
}
