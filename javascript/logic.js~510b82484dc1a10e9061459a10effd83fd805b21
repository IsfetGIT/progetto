var nomeER = /^\w+$/i ;
var codFiscER = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i ;
var eMailER = /^.+[@]{1}.+[.]{1}.{2,3}/i ;
var capER = /^\d{5}/i ;
var telER = /^\d{8,}/i ;

var utente = {nome: "Michele", cognome: "Di Lollo", mail: "micheledilollo@gmail.com", password: "alemioamore"};


function iscrizione() {
    var nomeF = document.registrazione.nome.value ;
    var cognomeF = document.registrazione.cognome.value ;
    var mailF = document.registrazione.mail.value ;
    var passwordF = document.registrazione.pass.value ;
    var password2F = document.registrazione.pass2.value ;

    if(nomeER.test(nomeF)) {
        if(nomeER.test(cognomeF)) {
            if(eMailER.test(mailF)){
                if(passwordF != ""){
                    if(passwordF == password2F){
                        var utente = {nome: nomeF , cognome: cognomeF, mail: mailF, password: passwordF};
                        dbUtentiJSON = localStorage.getItem("utenti");
                        if(dbUtentiJSON == null){
                            initDbUtenti(utente);
                        }
                        else{
                            addDbUtente(utente, dbUtentiJSON);
                        }
                        location.reload();
                    }
                    else alert("La password di conferma non corrisponde con la password");
                }
                else alert("Inserire una password");
            }
            else alert("Formato eMail non corretto");
            
        }
        else  alert("Formato Cognome non corretto");
    }
    else alert("Formato Nome non corretto");
}

function initDbUtenti(utente) {
    var utentiArr = [] ;
    utentiArr.push(utente)
    var utentiArrJSON = JSON.stringify(utentiArr) ;
    localStorage.setItem("utenti", utentiArrJSON) ;
}

function addDbUtente(utente, dbUtentiJSON) {
    var dbUtenti = JSON.parse(dbUtentiJSON);
    for(i = 0; i < dbUtenti.length; i++) {
        if(dbUtenti[i].mail == utente.mail){
            alert("EMail gia registrata, inserisci una eMail diversa");
            return ;
        }
    }
    dbUtenti.push(utente);
    localStorage.setItem("utenti", JSON.stringify(dbUtenti));
    alert("Registrazione avvenuta con successo!\nRecarsi alla pagina di Login per accedere")
}

function loginU() {
    var mailF = document.login.mail.value;
    var passwordF = document.login.pass.value;
    dbUtentiJSON = localStorage.getItem("utenti");
    if(dbUtentiJSON == null) alert("Credenziali Errate!");
    else {
        dbUtenti = JSON.parse(dbUtentiJSON);
        for(i = 0; i < dbUtenti.length; i++) {
            if(dbUtenti[i].mail == mailF && dbUtenti[i].password == passwordF) {
                var utenteColl = dbUtenti[i];
                sessionStorage.setItem("utenteColl", JSON.stringify(utenteColl));
                alert("Login avvenuto con successo !");
                window.open("./usr.html");
                return;
            }
        }
        alert("Credenziali Errate !!!");
    }
}

function setDatiUtenteColl()  {
    var utente = JSON.parse(sessionStorage.getItem("utenteColl"));
    document.getElementById("nome").innerHTML = utente.nome;
    document.getElementById("cognome").innerHTML = utente.cognome;
    document.getElementById("mail").innerHTML = utente.mail;

    /*document.getElementsByName("nome")[0] = utente.nome;
    document.getElementsByName("cognome")[0] = utente.cognome;
    document.getElementsByName("Mail")[0] = utente.mail;
    */

}



function modificaPassword() {
    var utente = JSON.parse(sessionStorage.getItem("utenteColl"));
    var oldPass = document.getElementById("oldPass").value;
    var newPass = document.getElementById("newPass").value;
    if(newPass == "" || oldPass != utente.password) alert("Vecchia Password non corretta o nuova password non inserita");
    else {
        var dbUtenteJSON = localStorage.getItem("utenti");
        if (dbUtenteJSON == null) alert("Nessun Utente"); //non deve mai verificarsi
        else {
            var dbUtente = JSON.parse(dbUtenteJSON);
            for(i = 0; i<dbUtente.length; i++) {
                if(utente.mail == dbUtente[i].mail && oldPass == dbUtente[i].password) {
                    dbUtente[i].password = newPass;
                    localStorage.setItem("utenti", JSON.stringify(dbUtente));
                    alert("Password modificata con successo");
                    return
                }
            }
            alert("Modifica password non riuscita"); //non deve mai verificarsi
        }
        
    }
}
