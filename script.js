var mode; // determines if the game has started
let flappy; // flappy image
let Bird3; // bird images 
var a = 60;
var b = 350;
var c = 0;
var score = 0;
d = 3
e = 1.3
ballstop = false

function preload() { // the images 
flappy = loadImage( "flappy.png");
Bird3 = loadImage ("Bird3.png")
}

function setup() {
    mode = 0;
    createCanvas(600, 400);
    textSize(21);
    textAlign(CENTER);
}

function draw() {

    clear();
    if (mode == 0) {
        showStartScreen();
    } else if (mode == 1) {
        drawGame();
    } else if (mode == 2) {
        showInstructions();
    }
    // status bar
    // this makes the score cgo up by 1 when the flappy bird goes through
    if (mode == 1) {
        fill(255, 102, 0);
        textSize(20);
        text('Score:', 45, 35);
        text(score, 89, 35);
    }
    if (b < -48) {
        score += 1
    }
    // this is making sure that the game says game over 
    if (b > 0 && b < 40) {
        if (a > c + 180 || a < c + 100) {
            d = 0
            e = 0
            ballstop = true
            background(0)
            textSize(50)
            text("Game Over:", 200, 200)
            text(score, 380, 200)
        }
    }
    
}

function keyPressed() {
    if (mode == 0 && keyCode === ENTER) { // makes the instruction page
        mode = 1;
    } else if (mode == 0 && keyCode === 73) { // 'I' key for instructions
        mode = 2;
    } else if (mode == 2 && keyCode === 27) { // ESC key to go back to start screen
        mode = 0;
    } else if (mode == 1 && keyCode == 38) { // the up arrow  key
        if (!ballstop) {
            a -= 40;
        }
    }  
}

function showStartScreen() { // showing the instruction page
    fill(255);
    textSize(32);
    textStyle(BOLD);
    background(255, 102, 0);
    text('Press enter to start', 300, 150);
    textSize(18);
    text('Press "I" for Instructions', 300, 180);
}

function showInstructions() { // instruction
    background(0);
    fill(255);
    textSize(24);
    textStyle(ITALIC);
    text("Instructions", 250, 50);
    textSize(16);
    text("1. Use the UP arrow key to move the circle up.", 250, 100);
    text("2. Avoid the rectangles.", 250, 130);
    text("3. Press ENTER to start the game.", 250, 160);
    text("4. To start the game headback to the start screen.", 250, 190);
    text("Press ESC to return to the start screen.", 250, 230);
}

function sun() {
    fill(255, 200, 255);
    image( Bird3,27,a,40,40);// the bird picture
    fill(255, 255, 0);
    ellipse(350, 1, 100); // the sun
}

function drawGame() {
  image( flappy,0,0); // the backgroung
    sun();
    fill(0);
    a += e;
    fill(0, 255, 0);
    rect(b, c + 180, 50, 300); // pipe
    rect(b, c - 187, 50, 300); // pipe
    b -= d;
  // the pipes going from right to left 
    if (b < -50) {
        c = random(-100, 100);
        b = 350;
    }
}