var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition()

function picture() {
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}

recognition.onresult = function (event) {
    console.log(event)
    var text = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML = text

    if (text == "selfie") {
        speak()
    }
}

function start() {
    Webcam.attach("camera")
    var data = "taking your picture in five seconds"
    var synth = window.speechSynthesis
    var utter = new SpeechSynthesisUtterance(data)
    synth.speak(utter)
    setTimeout(function () {
        img_id = "selfie1"
        takepic()
    }, 5000);

    setTimeout(function () {
        img_id = "selfie2"
        takepic()
    }, 10000);

    setTimeout(function () {
        img_id = "selfie3"
        takepic()
    }, 15000);
}

Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 60
})

function takepic() {
    Webcam.snap(function (dataURL) {
        if(img_id == "selfie1"){
            document.getElementById("result1").innerHTML = "<img id='selfie1' src='" + dataURL + "'>"
        }
        if(img_id == "selfie2"){
            document.getElementById("result2").innerHTML = "<img id='selfie2' src='" + dataURL + "'>"
        }
        if(img_id == "selfie3"){
            document.getElementById("result3").innerHTML = "<img id='selfie3' src='" + dataURL + "'>"
        }
    })
}