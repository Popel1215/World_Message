let chat = document.getElementById("chat")
let eingabe = document.getElementById("eingabe")
let Name = document.getElementById("content")
// Beim Laden der Seite gespeicherte Daten wiederherstellen
window.onload = () => {
    if (localStorage.getItem("username")) {
        Name.value = localStorage.getItem("username")
    }

    if (localStorage.getItem("chatHistory")) {
        chat.innerHTML = localStorage.getItem("chatHistory")
    }
}


function btn () {
        if (eingabe.value.trim() !== "" && Name.value.trim() !== "" )  {
    // Nachricht hinzufügen
   chat.innerHTML += "<p>" + Name.value + ": " + eingabe.value + "</p>"
// Chat speichern
        localStorage.setItem("chatHistory", chat.innerHTML)

        // Namen speichern
        localStorage.setItem("username", Name.value)
   eingabe.value = ""

}

if (Name.value.trim() == "" && eingabe.value.trim() !== "") {
 alert("BITTE ERST NAMEN EINGEBEN")
 eingabe.value = ""   
}

}
function clearChat() {
    chat.innerHTML = "";
    localStorage.removeItem("chatHistory");
    localStorage.removeItem("username");
}
