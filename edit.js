function run() {
    var audio = new Audio("beast-explosion.mp3");
    audio.play();
    document.getElementById("boom").style.display = "inline";
    setTimeout( () => {document.getElementById("boom").style.display = "none";window.location = "card.html"}, 2000);
}
var SpeechRecognition = window.webkitSpeechRecognition;
var recogntion = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recogntion.start();
}

recogntion.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if (content == "creeper") {
        window.location = "clue.html";
    } else {
        window.alert("*buzzer sound* Wrong Answer! Try again");
    }
}
function reveal() {
    window.alert("IP: MRFaisals_Bday.aternos.me; Port: 64343; That is all");
}