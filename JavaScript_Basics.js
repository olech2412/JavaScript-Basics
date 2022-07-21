//JavaScript basics

//Öffnet eine Notification auf der Website
function simpleAlert(){
    alert("Hello World");
}

function simpleAlertWithVar(){
    let eingabe; //let und var können variablen initialisieren. Wird die Variable nicht global genutzt sollte let verwendet werden da die Variable somit nur innerhalb des Anweisungsblocks gültig ist
    eingabe = prompt("Bitte geben Sie ihren Namen ein"); //Öffnet ein Popup, in dem etwas abgefragt werden kann
    if(eingabe == "Ingo"){
        alert("Ingo hat sich angemeldet")
    }
    alert("Hallo" + " " + eingabe)
}

//Strict Mode
function strictMode(){
    "use strict"; //aktiviert den strengen Modus. Hilft bei der Verwaltung der Variablen
                 // strenger Modus erfordert eine sorgfaltigere Programmierung und erlaubt keine undeklarierten Variablen oder Anweisungen ohne Simikolon
    let name;
    name = prompt("Bitte geben Sie ihren Namen ein");
    let ausgabe = "Wow, " + name + " ist ein schöner Name";
    alert(ausgabe);
}