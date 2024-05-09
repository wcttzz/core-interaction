let rolls = [];
const rollHeight = 50; // Height of each toilet paper roll
const maxRollLength = 200; // Maximum unroll length for visualization
const rollSpacing = 15;  // Space between rolls
const coreDiameter = 15; // Diameter of the core (hole in the middle)
const sectionSpacing = 10; // Spacing for the perforations

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Initialize the 12 rolls
  for (let i = 0; i < 12; i++) {
    rolls.push({
      x: i % 2 === 0 ? 50 : windowWidth - maxRollLength - 50, // Start from left or right, with some padding from edge
      y: i * (rollHeight + rollSpacing) + 50, // Vertical position with padding from top
      length: 0, // Initial unrolled length
      unrollDirection: i % 2 === 0 ? 1 : -1 // Unroll to the right or left
    });
  }
}

function draw() {
  background(220);

  // Draw each toilet paper roll
  rolls.forEach((roll, index) => {
    drawRoll(roll.x, roll.y, roll.length, rollHeight, roll.unrollDirection);
    
    // Update roll length incrementally
    if (roll.length < maxRollLength) {
      roll.length += 1; // Control the speed of unrolling
    }
  });
}

function drawRoll(x, y, length, height, direction) {
  fill(255); // White color for the roll
  stroke(0); // Black border for visibility
  
  // Draw the main part of the roll
  rect(x, y, length, height, 5); // Rounded corners for the roll
  
  // Draw the core in the middle
  fill(200); // Lighter color for the core to simulate depth
  if (direction === 1) { // Core is on the left for rolls that unroll to the right
    ellipse(x, y + height / 2, coreDiameter);
  } else { // Core is on the right for rolls that unroll to the left
    ellipse(x + length, y + height / 2, coreDiameter);
  }

  // Draw perforations as vertical lines
  for (let p = x; p < x + length; p += sectionSpacing) {
    stroke(150);
    line(p, y, p, y + height);
  }
}
