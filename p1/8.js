document.addEventListener('DOMContentLoaded', function () {
    const audioElement = document.getElementById('audio'); 
    const playButton = document.querySelector('.play-btn'); 
    const disk = document.querySelector('.disk'); 
    const seekBar = document.querySelector('.seek-bar'); 
    const currentTimeElement = document.querySelector('.current-time');
    const durationElement = document.querySelector('.song-duration'); 

   
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

   
    function updateSeekBar() {
        const currentTime = audioElement.currentTime;
        const duration = audioElement.duration;
        seekBar.value = (currentTime / duration) * 100; 
        currentTimeElement.textContent = formatTime(currentTime); 
    }

    audioElement.addEventListener('loadedmetadata', () => {
        durationElement.textContent = formatTime(audioElement.duration);
    });

    audioElement.addEventListener('timeupdate', updateSeekBar);  

    seekBar.addEventListener('input', function() {
        const duration = audioElement.duration;
        audioElement.currentTime = (seekBar.value / 100) * duration; 
    });

    playButton.addEventListener('click', function () {
        if (audioElement.paused) {
            audioElement.play(); 
            playButton.classList.add('pause'); 
            disk.classList.add('play'); 
        } else {
            audioElement.pause(); 
            playButton.classList.remove('pause'); 
            disk.classList.remove('play'); 
        }
    });


    audioElement.addEventListener('ended', function () {
        playButton.classList.remove('pause');
        disk.classList.remove('play');
    });
});
