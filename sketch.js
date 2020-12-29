var one,two,three,four,five,six,seven,eight,nine;



function preload(){

    one = loadImage("images/1.png");

    two = loadImage("images/2.png");

    three = loadImage("images/3.png");

    four = loadImage("images/4.png");

    five = loadImage("images/5.png");

    six = loadImage("images/6.webp");

    seven = loadImage("images/7.png");

    eight = loadImage("images/8.png");

    nine = loadImage("images/9.png");

}


function setup(){

    createCanvas(1350,675);

}


function draw(){

    background(0);

    spawnRain();

    drawSprites();
    
 }


 function spawnRain(){

    if(frameCount%5 === 0){

        var raindrop = createSprite(random(0,width),random(0,height),random(20,40),random(20,40));

        raindrop.velocityY = 5;

        raindrop.shapeColor = "green";

        raindrop.lifetime = 200;

        raindrop.scale = 0.05;

        var rand = Math.round(random(1,9));

        switch(rand){

            case 1: raindrop.addImage(one);

            break;

            case 2: raindrop.addImage(two);

            break;

            case 3: raindrop.addImage(three);

            break;

            case 4: raindrop.addImage(four);

            break;

            case 5: raindrop.addImage(five);

            break;

            case 6: raindrop.addImage(six);

            break;

            case 7: raindrop.addImage(seven);

            break;

            case 8: raindrop.addImage(eight);

            break;

            case 9: raindrop.addImage(nine);

            break;

        }

    }

 }
