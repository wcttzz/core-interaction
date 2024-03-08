let lastKnownPosition = { x: 0, y: 0 };
let ticking = false;

function setCursorPos(x, y) {
  const cursor = document.getElementById('custom-cursor');
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}

document.addEventListener('mousemove', e => {
  lastKnownPosition.x = e.clientX;
  lastKnownPosition.y = e.clientY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      setCursorPos(lastKnownPosition.x, lastKnownPosition.y);
      ticking = false;
    });

    ticking = true;
  }
});
