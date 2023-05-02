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
function Check(){
    var Img = document.getElementById("Gesto");
    classifier.classify(Img,gotResults)
}
function gotResults(error, results){
    if (error) {
        console.error(error);
    }else{
        console.log(results);
        Previsao1 = results[0].label;
        Previsao2 = results[1].label;
        document.getElementById("ResultName").innerHTML = Previsao1;
        document.getElementById("ResultName2").innerHTML = Previsao2;
        if (Previsao1 == "Tranquilo"){
          document.getElementById("Emoji").innerHTML = "&#129305;"
        }
        if (Previsao1 == "Legal"){
            document.getElementById("Emoji").innerHTML = "&#128077;"
        }
        if (Previsao1 == "Vitória"){
            document.getElementById("Emoji").innerHTML = "&#9996;"
        }
        if (Previsao2 == "Tranquilo"){
            document.getElementById("Emoji2").innerHTML = "&#129305;"
          }
          if (Previsao2 == "Legal"){
              document.getElementById("Emoji2").innerHTML = "&#128077;"
          }
          if (Previsao2 == "Vitória"){
              document.getElementById("Emoji2").innerHTML = "&#9996;"
          }
    }
}