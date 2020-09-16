//Create variables here
var dog
var happyDog, database, foodS, foodStock

function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png")

}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();

}


function draw() {  


  drawSprites();
  //add styles here

}



