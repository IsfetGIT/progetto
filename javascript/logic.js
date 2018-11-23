var nomeER = /^[a-z]+$/i
var codFiscER = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i
var eMailER = /^.+[@]{1}.+[.]{1}.{2,3}/i
var capER = /^\d{5}/i
var telER = /^\d{8,}/i

var utente = {nome: "Michele", cognome: "Di Lollo", mail: "micheledilollo@gmail.com", pass: "alemioamore"}


function iscrizione() {
    var nome = document.registrazione.nome.value
    var cognome = document.registrazione.cognome.value
    var mail = document.registrazione.mail.value
    var password = document.registrazione.pass.value
    var password2 = document.registrazione.pass2.value

    if(nomeEr.test(nome)) {
        if(cognomeEr.test(cognome)) {
            if(eMailER.test(mail)){
                if(password != ""){
                    if(password == password2){
                        if(localStorage.getItem("utenti") == null){

                        }
                        else{

                        }
                    }
                    else {
                        alert("La password di conferma non corrisponde con la password")
                    }
                }
                else {
                    alert("Inserire una password")
                }
            }
            else {
                alert("Formato eMail non corretto")
            }
        }
        else {
            alert("Formato Cognome non corretto")
        }
    }
    else {
        alert("Formato Nome non corretto")
    }
}
