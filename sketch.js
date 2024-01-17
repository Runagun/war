let Xpos = 100;
let Ypos = 100;
let Xpos2 = 700;
let Ypos2 = 700;
let farge = 220;
let avstand;
let avstand2;
let poeng = 0;
let Tx = 400;
let Ty = 400;
let ath;
let bg;
let spar;
let tr;
let teller = 0;




function setup() {
  athImg = loadImage("ath.png");
  bgImg = loadImage("bg.png");
  sparImg = loadImage("spar.png");
  trImg = loadImage("tr.png");

  createCanvas(800, 800);
  
}

function draw() {
  image(bgImg,0,0, 800, 800);
  player1();
  player2();
  kollisjon();
  kollisjon2();
  treasure();
  winScreen();
  
  //counter
  teller = teller + 1;
  
}




function winScreen() {
  
  text("Poeng: " + poeng, 400, 100);
  textAlign(CENTER);
  textSize(32)
  stroke(0);
  strokeWeight(6);
  fill("red");
  
  if (poeng >= 10) {
    text("Athenians Win!", 400, 400);
  }
  if (poeng <= -10) {
    text("Romans Win!", 400, 400);
  }
}





function kollisjon2() {
  
  avstand2 = dist(Xpos2, Ypos2, Tx, Ty);
  
  if (avstand2 <= 20) {
    
    farge = "green";
    poeng = poeng + 1;
    Tx = random(30, 770);
    Ty = random(30, 770);
    
  } else {farge = "white";}
  
}


function kollisjon() {
  
  avstand = dist(Xpos, Ypos, Xpos2, Ypos2);
  
  if (avstand <= 20) {
    
    farge = "black";
    poeng = poeng - 1;
    Xpos = random(30, 770);
    Ypos = random(30, 770);
    
  } else {farge = "white";}
  
}



function treasure() {
  
  image(trImg, Tx-30, Ty-30);
  
    if (teller == 10000 || teller < 0) {
    Tx = random(30, 770);
    Ty = random(30, 770);
  }
  
}

function player1() {
  
  image(sparImg, Xpos-30, Ypos-30);
  
  if (keyCode === RIGHT_ARROW) {Xpos = Xpos + 5;}
  if (keyCode === LEFT_ARROW) {Xpos = Xpos - 5;}
  if (keyCode === UP_ARROW) {Ypos = Ypos - 5;}
  if (keyCode === DOWN_ARROW) {Ypos = Ypos + 5;}
  if (keyCode === ENTER) {Xpos = Xpos, Ypos = Ypos}
  
  if (Xpos >= 815) {Xpos = -15;}
  if (Xpos <= -16) {Xpos = 814;}
  if (Ypos >= 815) {Ypos = -15;}
  if (Ypos <= -16) {Ypos = 814;}
  
  }

function player2() {
  
  image(athImg, Xpos2-30, Ypos2-30);
  
  if (keyCode === 68) {Xpos2 = Xpos2 + 5;}
  if (keyCode === 65) {Xpos2 = Xpos2 - 5;}
  if (keyCode === 87) {Ypos2 = Ypos2 - 5;}
  if (keyCode === 83) {Ypos2 = Ypos2 + 5;}
  if (keyCode === 32) {Xpos2 = Xpos2, Ypos2 = Ypos2}
  
  if (Xpos2 >= 815) {Xpos2 = -15;}
  if (Xpos2 <= -16) {Xpos2 = 814;}
  if (Ypos2 >= 815) {Ypos2 = -15;}
  if (Ypos2 <= -16) {Ypos2 = 814;}
  
  }

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}