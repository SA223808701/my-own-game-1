  var runner, runner_Img;
  var ground;
  var car1;
  var car2;
//var score;
//ar obstacle1, obstacle2, obstacle3, obstacle4;
//var pedestrian1, pesestrian1_Img;
var obs_Img1;
var obs_Img2;
 //, obs_Img3, obs_Img4;
//var bg, bg_Img;
//var gameOver, gameOver_Img;
//var restart, restart_Img;
//var score = 0;
//var PLAY = 1;
 //var END = 0;


function preload(){
       
    //gameOver_Img = loadImage("gameEnd.png");
    //restart_Img = loadImage("restart.png");
    runner_Img = loadImage("runner.png");
     obs_Img1 = loadImage("car1.png");
     obs_Img2 = loadImage("car2.png");
     //obs_Img3 = loadImage("car3.png");
    //obs_Img4 = loadImage("truck.png");
     bg_Img = loadImage("bg.png");
}

function setup(){
    createCanvas(640, 350);

    ground = createSprite(200,400, 860, 200);

    bg = createSprite(320,138,1780,300);
    bg.addImage("bg",bg_Img);
    bg.scale = 0.6;

    //creating invisible ground
   
    //ground.visible = false;
  

    runner = createSprite(50,265,30,40);
    runner.addImage("runner", runner_Img);
    runner.scale = 0.2;
    
    
    car1 = createSprite(400,300,30,40);
    car1.addImage("car1", obs_Img1);
    car1.scale = 0.096;

    car2 = createSprite(240,260,30,40);
    car2.addImage("car2", obs_Img2);
    car2.scale = 0.3;

    
    
}

function draw(){
    background("black");
    //if(gameState===PLAY){
        
        if(keyDown("space")){
         runner.velocityY = -6;
        }
        runner.velocityY = runner.velocityY + 2;
       runner.collide(ground);                     
       
        
        //if(bg.velocityX=-6){
        //bg.x = bg.width/2;
        //}

//if(runner.isTouching(Car_Group)||runner.isTouching(Pedestrian_Group)){
    //gameState = END;
//}

        
    //}

   drawSprites();
}

function spwanObstacles(){

    function spawnCoin() {
        //write code here to spawn the clouds
        if (frameCount % 60 === 0) {
          var  = createSprite(600,120,40,10);
          coin.y = Math.round(random(80,120));
          coin.addImage(coinImage);
          coin.scale = 0.1;
          coin.velocityX = -3;
          
           //assign lifetime to the variable
          coin.lifetime = 200;
          
          //adjust the depth
          coin.depth = mario.depth;
          mario.depth = mario.depth + 1;
          
          //add each cloud to the group
          coinGroup.add(coin);
        }
        
      }

}

//function pedestrian(){
    
//}