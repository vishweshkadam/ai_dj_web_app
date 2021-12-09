sound=""
 document.getElementById("function_stop").style.display="none"

function perload(){
    sound=loadSound("music.mp3")
}

function setup(){
    canvas=createCanvas(500,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video,0,0,500,500)
}

function play_sound(){
    sound.play();
    document.getElementById("function_stop").style.display="block"
    document.getElementById("function_play").style.display="none"
}
function  stop(){
    sound.stop()
    document.getElementById("function_stop").style.display="none"
    document.getElementById("function_play").style.display="block"
}