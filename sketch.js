//Create variables here
var dog
var dogHappy, database, foodS, foodStock

function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png")
dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database()

foodStock=database.ref('food');
foodStock.on("value",readStock);

}


function draw() {  

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogHappy);

}
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

if(x<=0){
  x=0
}else{
  x=x-1;
}

  database.ref('/').update({

Food:x
})
}




