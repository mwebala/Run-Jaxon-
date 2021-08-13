var jaxon;
var path;
var edges;
var bomb;
var bomb1;
var bomb2;
var bomb_group;
var coin;
var coin2;
var coin3;
var Coin1;
var energy_drinks;
var Coins = 0;
var gamestate = "play"
function preload(){
  //pre-load images
  jaxon_walking = loadAnimation("Runner-1.png","Runner-2.png");
  coin_img = loadImage("coin.png")
  path_img = loadImage("path.png")
  bombs = loadImage("bomb.png")
} 

function setup(){
  createCanvas(600,600);
  //create sprites here
  edges = createEdgeSprites();
  path = createSprite(259,300,450,600);
  path.addImage(path_img);
  path.scale= 2.7
  path.velocityY = -18

  jaxon = createSprite(500,500,10,10);
  jaxon.addAnimation("Boy", jaxon_walking);
  jaxon.scale =0.15;

  coin = createSprite(50,100,10,10);
  coin.addImage(coin_img);
  coin.scale = 0.5
  coin.velocityY = 15

  coin2 = createSprite(500,100,10,10);
  coin2.addImage(coin_img);
  coin2.scale = 0.5
  coin2.velocityY = 15

  coin3 = createSprite(300,300,10,10);
  coin3.addImage(coin_img);
  coin3.scale = 0.5
  coin3.velocityY = 15

  Coin1 = createSprite(20,20)
  Coin1.addImage(coin_img)
  Coin1.scale = 0.3

  bomb_group = new Group()
  var rand =  Math.round(random(1,100))
  

}

function draw() {

  background(0);
if(gamestate ==="play") {
  spawnBombs();
  


  if(path.y< -700){
    path.y = path.width/2
  }

  coin.visible = true
  coin2.visible = true
  coin3.visible = true

if(coin.isTouching(jaxon)){
  coin.visible = false
  coin.y = -200||-1107||-6464
  coin.x = 50
  Coins = Coins + 2 
}else if (coin2.isTouching(jaxon)){
  coin2.visible = false
  coin2.y = -50||-1289||-14657
  coin2.x = 500
  Coins = Coins + 2
} else if(coin3.isTouching(jaxon)){
  coin3.visible = false
  coin3.y = -250||-1563||-18856
  coin3.x = 300
  Coins = Coins + 2
}else if(bomb_group.isTouching(jaxon)){
  jaxon.velocityY = 0 
  jaxon.destroy()
  gamestate = "end"
 bomb_group.destroyEach()


}



if(coin.y>800||coin2.y>800||coin3.y>800){
  coin3.y = -250||-1567||-6287
  coin3.x = 300
  coin2.y = -50||-1289||-2849
  coin2.x = 500
  coin.y = -200||-1107||-1232
  coin.x = 50
}


 
  jaxon.collide(edges[0,1,2])
  jaxon.x= mouseX
 drawSprites();

textFont("calimbri");
  fill("yellow");
  strokeWeight(20);
  textSize(20);
  text("Coins: "+Coins,40,25);
}
else if(gamestate === "end") {
  textFont("calimbri");
  fill("red");
  strokeWeight(20);
  textSize(60);
  text("Game Over!",160,300);
  textSize(40)
  text("You Have Collected "+Coins+" Coins", 60, 370)
} 
}


function spawnBombs(){
  if(frameCount%160==0){
    bomb = createSprite(50, Math.round(random(-3000,100)), 23, 23)
    bomb.addImage(bombs)
    bomb.velocityY= 15
    bomb.scale = 0.2
    bomb_group.add(bomb)
    }
    if(frameCount%160==0){
      bomb1 = createSprite(300, Math.round(random(-20000,100)), 23, 23)
      bomb1.addImage(bombs)
      bomb1.velocityY= 15
      bomb1.scale = 0.2
      bomb_group.add(bomb1)
      }

      if(frameCount%160==0){
        bomb2 = createSprite(500, Math.round(random(-1000000,100)), 23, 23)
        bomb2.addImage(bombs)
        bomb2.velocityY= 15
        bomb2.scale = 0.2
        bomb_group.add(bomb2)
        }

       
      

       
}
