class Mover { 
  constructor(x,y){ 
    this.location = createVector(x, y); 
    this.velocity = createVector(random(-2,2), random(-2,2)) 
    this.acceleration = createVector(0,0)
  }
  display(){ 
    strokeWeight(10); 
    fill(255,255,0); 
    let r = random(30,50);
    rect(this.location.x, this.location.y, r, r);

  } 

  update(){ 
    this.location.add(this.velocity); 
    var mouse = createVector(mouseX, mouseY);
    var dir = mouse.sub(this.location);
    var topSpeed = 12
    dir.normalize();
    dir.mult(1);
    this.velocity.add(this.acceleration);
    this.velocity.add(dir);
    this.velocity.limit(topSpeed)
    this.location.add(this.velocity);  
  } 

   cekUjung(){ 
    if ( this.location.x > windowWidth ) { 
      this.location.x = 0; 
    } 
    else if (this.location.x < 0){ 
      this.location.x = windowWidth; 
    } 

    if ( this.location.y > windowHeight ) { 
      this.location.y = 0; 
    } 
    else if (this.location.y < 0){ 
      this.location.y = windowHeight; 
    } 
  } 
}

let movers = []
let mouse;
function setup() {
 createCanvas(windowWidth,windowHeight)
 background(220)
 for(let i=0; i<20; i++){
  movers[i] = new Mover(width/2,height/2);
 }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

function draw() {
  background(255,248,220)

  strokeWeight(18);
  fill(218,165,32);
  ellipse(mouseX,mouseY,100,120)

  for(let i=0; i<10; i++){ 
    movers[i].cekUjung(); 
    movers[i].display(); 
    movers[i].update(); 
  }
}