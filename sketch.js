//Create variables here
var dogImage,happydogImage,dog;
var FoodS,database,FoodStack;
  function preload()
   {  
   //load images here
   dogImage = loadImage("images/Dog.png")
   happydogImage = loadImage("images/happydog.png")
   }

  function setup() 
   {
   createCanvas(500,500);
   dog = createSprite(150,350)
   dog.addImage(dogImage);
   dog.scale = 0.2
   database = firebase.database();
   foodStock = database.ref('Food')
   foodStock.on("value",readStock);
   }


  function draw() 
   {  
   background(46,139,87);
   if(keyWentDown(UP_ARROW)){
    writeStock(FoodS)
    dog.addImage(dogHappy);
   }
   drawSprites();
   //add styles here
   text("Press UP_ARROW Key to feed Drago Milk!",20,150)
  }
  function readStock(data)
   {
    foodS = data.val();
   }
  function writeStock(x)
   {
   database.ref('/').update({
    Food:x
   })

   }

