const canvasSize = 500;
const squaresPerSide = 10;
const squareSide = canvasSize / squaresPerSide;

//offset of squares
const offsetRange = 10;

//create 4 variables for images
let textureOne;
let textureTwo;
let textureThree;
let textureFour;

let textures;

function preload() {
  //load each image
  textureOne = loadImage("Textures/texture-trans1.png");
  textureTwo = loadImage("Textures/texture-trans2.png");
  textureThree = loadImage("Textures/texture-trans3.png");
  textureFour = loadImage("Textures/texture-trans4.png");
}

function setup() {
  createCanvas(canvasSize, canvasSize);

  //prevent draw from re executing continuously
  noLoop();

  //add all textures to one array
  textures = [textureOne, textureTwo, textureThree, textureFour];
}

function draw() {
  background(220);

  //nested loop through columns & rows
  for(let column = 0; column < squaresPerSide; column = column + 1) {
    for(let row = 0; row < squaresPerSide; row = row + 1) {

      //select a random texture from the textures array
      const randomTexture = random(textures);

      //calculate random colour
      const r = random(0, 255);
      const g = random(0, 255);
      const b = random(0, 255);

      //apply the colour "pick up brush"
      tint(r, g, b);

      //calculate offset for x and y (random between - offsetRange to + offsetRange)
      const offsetX = random(-offsetRange, offsetRange);
      const offsetY = random(-offsetRange, offsetRange);

      //calculate x and y for each column and row position
      const x = squareSide * column + offsetX;
      const y = squareSide * row + offsetY;

      //draw the square
      // square(x, y, squareSide);
      image(randomTexture, x, y, squareSide, squareSide);
    }
  }
}
