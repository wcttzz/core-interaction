var COUNT_START = 5 * 60 * 10; // tenths * seconds * minutes (for 5 minutes)
var count = COUNT_START;
var playing = false;
var timeout;

var playpause = document.getElementById('playpause');
var reset = document.getElementById('reset');
var time_left = document.getElementById('time_left');

playpause.onclick = function() {
    if (playing) {
        playing = false;
        clearTimeout(timeout); // Stop the countdown
        playpause.innerHTML = "▶";
        console.log("Pause!");
    } else {
        playing = true;
        countdown(); // Start the countdown
        playpause.innerHTML = "‖";
        console.log("Play!");
    }
}

reset.onclick = function() {
    playing = false;
    clearTimeout(timeout); // Stop the countdown
    playpause.innerHTML = "▶";
    count = COUNT_START;
    displayTime(); // Update display immediately
    console.log("Reset Timer!");
}

function countdown() {
    if (count == 0) {
        playing = false;
        playpause.innerHTML = "▶";
    } else if (playing) {
        displayTime();
        count--;
        timeout = setTimeout(countdown, 100); // Ensure we can stop this when pausing
    }
}

function displayTime() {
    var tenths = count;
    var sec = Math.floor(tenths / 10);
    var hours = Math.floor(sec / 3600);
    sec -= hours * 3600;
    var mins = Math.floor(sec / 60);
    sec -= mins * 60;

    if (hours < 1) {
        time_left.innerHTML = LeadingZero(mins) + ':' + LeadingZero(sec);
    } else {
        time_left.innerHTML = hours + ':' + LeadingZero(mins) + ':' + LeadingZero(sec);
    }
}

function LeadingZero(Time) {
    return (Time < 10) ? "0" + Time : Time;
}

// Initialize display immediately
displayTime();
