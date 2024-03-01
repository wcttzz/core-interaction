function generateNoise(opacity) {
    const canvas = document.getElementById('noise');
    const ctx = canvas.getContext('2d');

    // Update canvas dimensions to match the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const w = canvas.width;
    const h = canvas.height;

    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const val = Math.floor(Math.random() * 255);
        data[i] = val;        // red
        data[i + 1] = val;    // green
        data[i + 2] = val;    // blue
        data[i + 3] = opacity; // alpha (opacity)
    }

    ctx.putImageData(imageData, 0, 0);
}

function loop() {
    generateNoise(30); // Adjust opacity as needed
    requestAnimationFrame(loop);
}

// Initial call to start the loop
loop();

// Resize event listener to update the canvas size and redraw the noise
window.addEventListener('resize', function() {
    generateNoise(30);
});
