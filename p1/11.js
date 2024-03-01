function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
}

function clearCircles() {
    const container = document.getElementById('circle-container');
    container.innerHTML = ''; // Clear the container's content
}

function createNonOverlappingCircles() {
    clearCircles(); // Clear existing circles before creating new ones
    const container = document.getElementById('circle-container');
    const circles = [];
    const maxCircles = 20;
    const attempts = 50;
    const minRadius = 50;
    const maxRadius = 150;
    const colors = ['#82AE35', '#F1E5F1', '#8E70B6', '#A26C7E', '#8DB284', '#BCAFE0', '#E481A2', '#F26D76', '#FAA12F', '#A34A7C']; 
    const links = [
      '12.html',
      '13.html',
      '14.html',
      '15.html',
      '16.html',
      '17.html',
      '18.html',
      // Add more links as needed
    ];
    
    for (let i = 0; i < maxCircles; i++) {
      let overlapping, circle;
      let tries = 0;
      do {
        overlapping = false;
        const radius = Math.floor(Math.random() * (maxRadius - minRadius + 1)) + minRadius;
        const x = Math.random() * (container.offsetWidth - radius * 2) + radius;
        const y = Math.random() * (container.offsetHeight - radius * 2) + radius;
  
        circle = {x, y, radius};
  
        for (let j = 0; j < circles.length; j++) {
          const other = circles[j];
          const distance = Math.sqrt((circle.x - other.x) ** 2 + (circle.y - other.y) ** 2);
          if (distance < circle.radius + other.radius) {
            overlapping = true;
            break;
          }
        }
        tries++;
      } while (overlapping && tries < attempts);
  
      if (!overlapping) {
        circles.push(circle);
        const linkElement = document.createElement('a');
        const linkIndex = i % links.length; 
        linkElement.href = links[linkIndex]; 
        linkElement.className = 'circle';
        linkElement.style.left = `${circle.x - circle.radius}px`;
        linkElement.style.top = `${circle.y - circle.radius}px`;
        linkElement.style.width = `${circle.radius * 2}px`;
        linkElement.style.height = `${circle.radius * 2}px`;
        
        const color = colors[Math.floor(Math.random() * colors.length)]; 
        linkElement.style.backgroundColor = color;
        linkElement.style.setProperty('--glow-color', color); 
        
        container.appendChild(linkElement);
      }
    }
}

// Initial creation of circles
createNonOverlappingCircles();

// Debounce resize event to prevent excessive calls
window.addEventListener('resize', debounce(function() {
    createNonOverlappingCircles();
}, 250));
