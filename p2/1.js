document.querySelector('.button').addEventListener('mouseenter', function(e) {
    const button = e.target;
    const buttonRect = button.getBoundingClientRect();
    const colors = ['#FBD4DB', '#D3E6F4', '#BCE2D5', '#B9B9D5', '#F9E398'];
  
    const intervalId = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        document.body.appendChild(star);
  
        // Assign a random color from the array
        const colorIndex = Math.floor(Math.random() * colors.length);
        star.style.backgroundColor = colors[colorIndex];
  
        // Position the star over the button
        star.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
        star.style.top = `${buttonRect.top + buttonRect.height / 2}px`;
  
        // Generate wider random trajectory for the stars
        const xEnd = (Math.random() * 400 - 200); 
        const yEnd = (Math.random() * 400 - 200);
        const duration = Math.random() * 1000 + 500;
  
        star.animate([
          { transform: 'translate(0, 0)', opacity: 1 },
          { transform: `translate(${xEnd}px, ${yEnd}px)`, opacity: 0 }
        ], {
          duration: duration,
          easing: 'ease-out',
          fill: 'forwards'
        }).onfinish = () => star.remove();
      }
    }, 100);
  
    button.addEventListener('mouseleave', () => {
      clearInterval(intervalId);
    }, { once: true });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("enterButton").addEventListener("click", function(e) {
        e.preventDefault(); // Prevent default link behavior
        var content1 = document.getElementById("content1");
        var content2 = document.getElementById("content2");
        // Fade out content1
        content1.style.opacity = 0;
        content1.style.transition = "opacity 2s";
        // After a delay, display content2
        setTimeout(function() {
            content1.style.display = "none";
            document.body.style.backgroundColor = "#FFD700"; // New background color
            content2.style.display = "block";
            content2.style.opacity = 0;
            setTimeout(function() {
                content2.style.opacity = 1;
                content2.style.transition = "opacity 2s";
            }, 10); // Short delay before starting opacity transition
        }, 2000); // Match this delay to your fade out transition
    });
});

  