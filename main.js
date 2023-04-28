var Previsao1 = "";
var Previsao2 = "";
Webcam.set({
    width: 350,
    height: 300,
    imageFormat: "png",
    pngQuality: 100
})
var camera = document.getElementById("camera");
Webcam.attach("#camera");
function TakeSnapshot(){
    Webcam.snap(function (image){
        document.getElementById("result").innerHTML = "<img src='" + image + "' id='Gesto'>";
    })
}
console.log("versão ML5: "+ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/76y8GuPmY/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}
function speak(){
var P1 = "Primeira Previsão " + Previsao1;
var P2 = "Segunda Previsão " + Previsao2;
var Speech = window.speechSynthesis;
var UtterThis = new SpeechSynthesisUtterance(P1 + P2);
Speech.speak(UtterThis);
}