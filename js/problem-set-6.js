/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  ctx.font = "48px sans-serif";
  ctx.strokeText ("Hello, World!", 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  const canvas = document.getElementById('canvas2');
  const ctx = canvas.getContext('2d');
let h = 0;
let w = 0;
let x = 0;
let y = 0;

h = prompt("Enter Height: ");
while (h < 1) {
  alert("Height is too Small.");
  h = prompt("Enter Height: ");
}

w = prompt("Enter Width: ");
while (w < 1) {
  alert("Width is too Small.");
  w = prompt("Enter Width: ")
}

x = prompt("Enter X - Coordinate: ");
while (x < 5) {
  alert("X - Coordinate is too Small.");
  x = prompt("Enter X - Coordinate: ");
}

y = prompt("Enter Y - Coordinate: ");
while (y < 5) {
  alert("Y - Coordinate is too Small.");
  y = prompt("Enter Y - Coordinate: ")
}

 ctx.strokeRect(x, y, w, h);
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  const canvas = document.getElementById('canvas3');
  const ctx = canvas.getContext('2d');
  let c = "";

  c = prompt("Color: ");
  if (c == "black") {
    ctx.fillStyle = 'black';
    ctx.fillRect(10, 10, 100, 50);
 } else if (c == "blue") {
   ctx.fillStyle = 'blue';
   ctx.fillRect(10, 10, 100, 50);
 } else if (c == "green") {
   ctx.fillStyle = 'green';
   ctx.fillRect(10, 10, 100, 50);
 } else if (c == "purple") {
   ctx.fillStyle = 'purple';
   ctx.fillRect(10, 10, 100, 50);
 } else if (c == "red") {
   ctx.fillStyle = 'red';
   ctx.fillRect(10, 10, 100, 50);
 } else if (c == "yellow") {
   ctx.fillStyle = 'yellow';
   ctx.fillRect(10, 10, 100, 50);
 } else if ( c == "orange") {
   ctx.fillStyle = 'orange';
   ctx.fillRect(10, 10, 100, 50);
 } else {
   alert("Color is not supported.")
 }

}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  const canvas = document.getElementById('canvas4');
  const ctx = canvas.getContext('2d');
  let side1;
  let side2;
  let side3;
  let x = 10;
  let y = 10;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  while(true){
    side1 = Number(prompt("Enter Side 1: "));
    side2 = Number(prompt("Enter Side 2: "));
    side3 = Number(prompt("Enter Side 3: "));
    if (((side1**2) + (side2**2) == (side3**2)) && side1 > 0 && side2 > 0 && side3 > 0 && canvas.width-x-side1 >= 0 && canvas.height-y- side2 >= 0) {
        break;
    }
  else {
    alert("That is not a valid triangle.");
  }
}
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + side1);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x, y + side1);
  ctx.lineTo(x + side2, y + side1);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + side2, y + side1);
  ctx.stroke();
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  const canvas = document.getElementById('canvas5');
  const ctx = canvas.getContext('2d');

let radius = 0;

 do{
   radius = Number(prompt("Enter the radius:"));
 } while (radius < 10 || isNaN(radius) == true)

 ctx.beginPath();
 ctx.arc(radius + 10, radius + 10, radius, 0, Math.PI * 2);
 ctx.stroke();
 ctx.beginPath();
 ctx.arc(radius + 10, radius + 10, radius * 0.7, 0, Math.PI * 1);
 ctx.stroke();
 ctx.beginPath();
 ctx.arc(radius - 10, radius - 10, radius * 0.10, 0, Math.PI * 2);
 ctx.stroke();
 ctx.beginPath();
 ctx.arc(radius + 35, radius - 10, radius * 0.10, 0, Math.PI * 2);
 ctx.stroke();
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  const canvas = document.getElementById('canvas6');
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

    let outerRadius = Number(prompt("Enter the Outer Radius: "));
    let innerRadius = Number(prompt("Enter the Inner Radius: "));

    if (outerRadius >= innerRadius && canvas.width >= outerRadius + 125 && canvas.height >= outerRadius + 125 && innerRadius >= 1 && outerRadius >=1) {
      let point = 5;
      let outerX = [];
      let outerY = [];
      let innerX = [];
      let innerY = [];

      for (let i = 0; i < point; i++) {
        outerX.push(Math.cos((Math.PI * 2 * i) / point - (Math.PI / 2)) * outerRadius + 125);
        outerY.push(Math.sin((Math.PI * 2 * i) / point - (Math.PI / 2)) * outerRadius + 125);
        innerX.push(Math.cos(((Math.PI * 2 * i) / point - (Math.PI / 2)) + (Math.PI / point)) * innerRadius + 125);
        innerY.push(Math.sin(((Math.PI * 2 * i) / point - (Math.PI / 2)) + (Math.PI / point)) * innerRadius + 125);
      }

    ctx.beginPath();
    ctx.moveTo(outerX[0], outerY[0]);

    for (let z = 0; z < outerX.length; z++) {
      ctx.lineTo(innerX[z], innerY[z]);
      ctx.lineTo(outerX[z + 1], outerY[z + 1]);
    }
    ctx.lineTo(outerX[0], outerY[0]);
    ctx.stroke();
    ctx.closePath();
  }
   else {
    alert("Your Inputs are not Valid")
    }
  }


/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  const canvas = document.getElementById('canvas7');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(66, 10);
  ctx.lineTo(146, 10);
  ctx.lineTo(202, 66);
  ctx.lineTo(202, 146);
  ctx.lineTo(146, 202);
  ctx.lineTo(66, 202);
  ctx.lineTo(10, 146);
  ctx.lineTo(10, 66);
  ctx.closePath();

  ctx.fill();
  ctx.lineWidth = 0;
  ctx.font = "60px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("STOP", 30, 130);

}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  const canvas = document.getElementById('canvas8');
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, ctx.width, ctx.height);

  let length = Number(prompt("Enter Length:"));
  let x = 10;
  let y = canvas.height - 10;
  let i = 0;

  lineNumber = 1;

  while (i < 5) {
    for (let n = 0 + lineNumber; n <= 5; n++) {
      ctx.strokeRect(x, y - length, length, length);
      ctx.stroke();
      x += length;
    }
    x = 10 + (length / 2) * lineNumber;
    y -= length;
    lineNumber++;
    i++;
  }

}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  const canvas = document.getElementById('canvas9');
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, ctx.width, ctx.height);

    let hColor;
    let dColor;
    let length = 700;
    let height = 500;
    let x = 150;
    let y = canvas.height - height - 10;

    while (true){
      hColor = prompt("House Color: ");
      dColor = prompt("Door Color: ");
      if ((hColor == "black" || hColor == "blue" || hColor == "green" || hColor == "purple" || hColor == "red" || hColor == "yellow" || hColor == "orange")
      && (dColor == "black" || dColor == "blue" || dColor == "green" || dColor == "purple" || dColor == "red" || dColor == "yellow" || dColor == "orange")){
          break;
      } else {
        alert("The Color is Not Supported");
      }
    }

    ctx.beginPath();
    ctx.fillStyle = hColor;
    ctx.fillRect(x, y, length, height);

    ctx.fillStyle = dColor;
    ctx.fillRect(x + (length / 2) - 30, y + 400, 85, 200);
    ctx.strokeRect(x + (length / 2)- 30, y + 400, 85, 200);
    ctx.stroke();

    ctx.fillStyle = "gray";
    ctx.moveTo(x, y);
    ctx.lineTo(x + 350, 50);
    ctx.lineTo(x + length, y);
    ctx.lineTo(x, y);
    ctx.fill();

    ctx.fillStyle = "lightblue";
    ctx.fillRect(665, y + 150, 75, 75);
    ctx.fillRect(275, y + 150, 75, 75);
    ctx.fillRect(665, y + 350, 75, 75);
    ctx.fillRect(275, y + 350, 75, 75);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(545, 700, 6, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
}
