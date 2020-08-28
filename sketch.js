//Create variables here
var database;
var dog, dogI;
var happyDog;
var foodS, foodStock;
function preload()
{
  //load images here
  dogI = loadImage("dogImg.png/images");
  happyDog = loadImage("dogImg1.png/images");
}

function setup() {
  createCanvas(800, 700);

  database = firebase.database();

  dog = createSprite(200,200,50,50);
  dog.addImage(dogI);

  foodStock = database.ref('Food');
  foodStock = ("value", readStock);
}


function draw() {  
 background(46,139,87);

 if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS =data.val();
}

function writeStock(x){
 database.ref('/').update({
   Food : x
 })
}

