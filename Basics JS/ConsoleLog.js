function consoleLogExample() {
    let eingabe;
    eingabe = prompt("Bitte geben Sie ihr Alter ein");

    if(eingabe == ""){
        console.log("Person hat kein Alter eingegeben");
        alert("Never gonna give you up");
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
    }else{
        if(eingabe < 18){
            console.log("Person ist nicht 18 Jahre alt. Browser wird geschlossen");
            alert("Du bist nicht alt genug. Website wird geschlossen");
            window.close();
        }else{
            console.log("Person ist alt genug");
        }
    }
}