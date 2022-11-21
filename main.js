
var content;

var SpeechRecognition = window.webkitSpeechRecognition;
 
var recognition = new SpeechRecognition();


function start()
{
    recognition.start();
}
 
recognition.onresult = function(event) {

 console.log(event);
 content=event.results[0][0].transcript.toLowerCase();
 
 if(content=="selfie"){
    speak();
 }
 
}
function speak(){
    var synth=window.speechSynthesis;
    var speak_data="taking your selfie in five seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
    img_id="selfie1";
    take_snapshot();
    var speak_data="taking your selfie in ten seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    },5000
    
    );
    setTimeout(function(){
        img_id="selfie2";
        take_snapshot();
        var speak_data="taking your selfie in fifteen seconds";
        var utterthis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
        },8000
        
        );
        setTimeout(function(){
            img_id="selfie3";
            take_snapshot();
            },11000
            
            );
    }
    Webcam.set({
        width: 360,
        height: 250,
        image_format: 'png',
        png_quality: 90
     });
     camera=document.getElementById("camera");
    function take_snapshot(){
    Webcam.snap(function(data_uri){
    if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML="<img id='selfie_image' src='"+data_uri+"'>";
    }
    if(img_id=="selfie2"){
        document.getElementById("result2").innerHTML="<img id='selfie_image' src='"+data_uri+"'>";
    }
    if(img_id=="selfie3"){
        document.getElementById("result3").innerHTML="<img id='selfie_image' src='"+data_uri+"'>";
    }
    });
    }