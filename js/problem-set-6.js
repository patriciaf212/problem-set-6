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
  var ctx = document.getElementById("canvas2").getContext("2d");

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
  var ctx = document.getElementById("canvas3").getContext("2d");
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
  var ctx = document.getElementById("canvas4").getContext("2d");
  //ctx.clearRect(10, 10, canvas4.width, cavas.height);

  //let sides = [];

  //for (i = 0; i < 3, i++);
    //do {
    //  input = Number(prompt("Enter a side Length:"));
  //  } while (input < 1 || inNaN(input) == true)
    //  sides.push(input);
  //  }

  //  if (Math.pow(sides[0], 2) + Math.pow(sides[1], 2) == Math.pow(sides[2])){
    //  sides = sides.sort();
    //  ctx.moveTo(10, 10);
    //  ctx.lineTo(10, sides[0]);
    //  ctx.lineTo(sides[1], sides[0]);
    //  ctx.lineTo(10, 10);
    //  ctx.stroke();
//    }
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
  var ctx = document.getElementById("canvas5").getContext("2d");

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
  var ctx = document.getElementById("canvas6").getContext("2d");

  let innerRadius = 0;
  let outerRadius = 0;

  do {
    outerRadius = prompt("Enter the Outer Radius: ");
  } while (outerRadius < 1 || isNaN(outerRadius) == true)

  do {
    innerRadius = prompt("Enter Inner Radius: ");
  } while (innerRadius < outerRadius || isNaN(innerRadius) == true);

   ctx.beginPath();
   ctx.arc(outerRadius, outerRadius, outerRadius, 0, Math.PI * 2);

   ctx.moveTo(125, 125);
   ctx.lineTo(161.45, 74.55);
   ctx.lineTo(141.67, 99.27);
   ctx.lineTo(142.56, 130.45);
   ctx.lineTo(112, 120);
   ctx.lineTo(81.44, 130.45);
   ctx.lineTo(82.33, 99.27);
   ctx.lineTo(62.55, 74.55);
   ctx.lineTo(93.66, 65.73);
   ctx.closePath();
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
  var ctx = document.getElementById("canvas7").getContext("2d");
  let numberOfSides = 8,
    size = 80,
    Xcenter = 100,
    Ycenter = 100;

ctx.beginPath();
ctx.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

for (var i = 1; i <= numberOfSides;i += 1) {
    ctx.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
}
ctx.fillStyle = "white"
ctx.strokeStyle = "black";
ctx.fillText('STOP', 10, 50);
ctx.font = "80px serif";
ctx.lineWidth = 1;
ctx.stroke();
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
  var ctx = document.getElementById("canvas8").getContext("2d");

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
  var ctx = document.getElementById("canvas9").getContext("2d");

    let hColor;
    let dColor;
    let x = 150;
    let y = ctx.height - 10;


    ctx.clearRect(0, 0, ctx.width, ctx.height);
    while (true){
      hColor = prompt("House Color: ");
      dColor = prompt("Door Color: ");
      if ((hColor == "black" || hColor == "blue" || hColor == "green" || hColor == "purple" || hColor == "red" || hColor == "yellow" || hColor == "orange")
      && (dColor == "black" || dColor == "blue" || dColor == "green" || dColor == "purple" || dColor == "red" || dColor == "yellow" || dColor == "orange")){
      } else {
        alert("The Color is Not Supported");
      }
    }
    ctx.rect(x, y, 450, 600);
    ctx.fillStyle = hColor;
    ctx.beginPath();
    ctx.fillStyle = hColor;
    ctx.fillRect(x, y, 450, 600);
    ctx.fillStyle = dColor;
    ctx.fillRect(x + (600/2)-30, (y) + 350, 60, 100);
    ctx.fillStyle = "gray";
    ctx.moveTo(x, y);
    ctx.lineTo(x + 286, 150);
    ctx.lineTo(x + 600, y);
    ctx.fill();
    ctx.fillStyle = "light blue";
    ctx.fillRect(300, y + 100, 50, 50);
    ctx.fillRect(526, y + 100, 50, 50);
    ctx.fillRect(300, y + 100, 50, 50);
    ctx.fillRect(526, y + 100, 50, 50);
    ctx.closePath();
}
