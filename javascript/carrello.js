function aggCarrello(oggetto) {
    var utenteCollJSON = sessionStorage.getItem("utenteColl");
    if(utenteCollJSON == null) {
        alert("Accedi prima di aggiungere al carrello");
        return;
    }
    var utenteColl = JSON.parse(utenteCollJSON);
    var carrelloJSON = localStorage.getItem("carrello");
    if(carrelloJSON == null) {
        var carrello = [{mail: utenteColl.mail , oggettiCarrello: [oggetto]}]
        localStorage.setItem("carrello", JSON.stringify(carrello));
    }
    else {
        var carrello = JSON.parse(carrelloJSON);
        for(i = 0; i< carrello.length; i++) {
            if(carrello[i].mail == utenteColl.mail) {
                carrello[i].oggettiCarrello.push(oggetto);
                localStorage.setItem("carrello", JSON.stringify(carrello));
                return;
            }
        }
        var carrelloColl = {mail: utenteColl.mail , oggettiCarrello: [oggetto]};
        carrello.push(carrelloColl);
        localStorage.setItem("carrello", JSON.stringify(carrello));
    }

}