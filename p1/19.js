var playing = false;

var playpause = document.getElementById('playpause');
var reset = document.getElementById('reset');
var audioPlayer = document.getElementById('audioPlayer'); 

playpause.onclick = function() {
    if (playing) {
        playing = false;
        audioPlayer.pause(); 
        playpause.innerHTML = "▶";
        console.log("Pause!");
    } else {
        playing = true;
        audioPlayer.play(); 
        playpause.innerHTML = "‖"; 
        console.log("Play!");
    }
}

reset.onclick = function() {
    playing = false;
    audioPlayer.pause(); 
    audioPlayer.currentTime = 0; 
    playpause.innerHTML = "▶"; 
    console.log("Reset Audio!");
}

