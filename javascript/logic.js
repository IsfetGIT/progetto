var nomeER = /^[a-z]+$/i ;
var codFiscER = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i ;
var eMailER = /^.+[@]{1}.+[.]{1}.{2,3}/i ;
var capER = /^\d{5}/i ;
var telER = /^\d{8,}/i ;

var utente = {nome: "Michele", cognome: "Di Lollo", mail: "micheledilollo@gmail.com", pass: "alemioamore"};


function iscrizione() {
    var nomeF = document.registrazione.nome.value ;
    var cognomeF = document.registrazione.cognome.value ;
    var mailF = document.registrazione.mail.value ;
    var passwordF = document.registrazione.pass.value ;
    var password2F = document.registrazione.pass2.value ;

    console.log(nomeF) ;

    if(nomeER.test(nomeF)) {
        if(nomeER.test(cognomeF)) {
            if(eMailER.test(mailF)){
                if(passwordF != ""){
                    if(passwordF == password2F){
                        var utente = {nome: nomeF , cognome: cognomeF, mail: mailF, password: passwordF};
                        if(localStorage.getItem("utenti") == null){

                        }
                        else{

                        }
                    }
                    else {
                        alert("La password di conferma non corrisponde con la password");
                    }
                }
                else {
                    alert("Inserire una password");
                }
            }
            else {
                alert("Formato eMail non corretto");
            }
        }
        else {
            alert("Formato Cognome non corretto");
        }
    }
    else {
        alert("Formato Nome non corretto");
    }
}