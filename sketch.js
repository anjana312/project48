var s1,s2,s3,s4,s5,s6,s7,s8,s9;
var l1,l2,l3,l4;
var imgx,imgo;
var x1,x1,x3,x4,x5;
var o1,o2,o3,o4,o5;
var spritex,spriteo;
var squarebg,player=null;
var xc1=0,xc2=0,xc3=0,xc4=0,xc5=0,xc6=0,xc7=0,xc8=0,xc9=0;
var oc1=0,oc2=0,oc3=0,oc4=0,oc5=0,oc6=0,oc7=0,oc8=0,oc9=0;
var xcount=0,ocount=0;
var num,position="";
var gameState="play";
var playerwon="X";

function preload(){
  imgx=loadImage("imgX.png");
  imgo=loadImage("imgO.png");
}

function setup (){
createCanvas(600,700);

squarebg=createSprite(300,400,600,600);
spritex = createSprite(200,50,180,50);
spriteo = createSprite(400,50,180,50);




s1=createSprite(100,200,200,200);
s2=createSprite(300,200,200,200);
s3=createSprite(500,200,200,200);
s4=createSprite(100,400,200,200);
s5=createSprite(300,400,200,200);
s6=createSprite(500,400,200,200);
s7=createSprite(100,600,200,200);
s8=createSprite(300,600,200,200);
s9=createSprite(500,600,200,200);

l1=createSprite(300,300,600,1);
l1.shapeColor="black";
l2=createSprite(300,500,600,1);
l2.shapeColor="black";
l3=createSprite(200,400,1,600);
l3.shapeColor="black";
l4=createSprite(400,400,1,600);
l4.shapeColor="black";

}

function draw(){
background(0);

if(gameState==="play"){
 // xc1=0; xc2=0; xc3=0; xc4=0; xc5=0; xc6=0;
  //oc1=0; oc2=0; oc3=0; oc4=0; oc5=0; oc6=0;
  if(mousePressedOver(spritex) ){
    player="x";
    //spriteo.visible=false;
  }
  else if(mousePressedOver(spriteo) ){ 
    player="o";
    //spritex.visible=false;
  }
  //console.log(player)

    if(mousePressedOver(s1) && player==="x" && oc1===0){
        s1.addImage(imgx);
        s1.scale=0.3;
        xc1=xc1+1;
        console.log(xc1);
    }
    if(mousePressedOver(s2) && player==="x" && oc2===0){
      s2.addImage(imgx);
      s2.scale=0.3;
      xc2=xc2+1;
      console.log(xc2);
  }
  if(mousePressedOver(s3) && player==="x" && oc3===0){
    s3.addImage(imgx);
    s3.scale=0.3;
    xc3=xc3+1;
  }
  if(mousePressedOver(s4) && player==="x" && oc4===0){
    s4.addImage(imgx);
    s4.scale=0.3;
    xc4=xc4+1;
  }
  if(mousePressedOver(s5) && player==="x" && oc5===0){
    s5.addImage(imgx);
    s5.scale=0.3;
    xc5=xc5+1;
  }
  if(mousePressedOver(s6) && player==="x" && oc6===0){
    s6.addImage(imgx);
    s6.scale=0.3;
    xc6=xc6+1;
  }
  if(mousePressedOver(s7) && player==="x" && oc7===0){
    s7.addImage(imgx);
    s7.scale=0.3;
    xc7=xc7+1;
  }
  if(mousePressedOver(s8) && player==="x" && oc8===0){
    s8.addImage(imgx);
    s8.scale=0.3;
    xc8=xc8+1;
  }
  if(mousePressedOver(s9) && player==="x" && oc9===0){
    s9.addImage(imgx);
    s9.scale=0.3;
    xc9=xc9+1;
  }


  if(mousePressedOver(s1) && player==="o" && xc1===0){
    s1.addImage(imgo);
    s1.scale=0.25;
    oc1=oc1+1;
  }
  if(mousePressedOver(s2) && player==="o" && xc2===0){
  s2.addImage(imgo);
  s2.scale=0.25;
  oc2=oc2+1;
  }
  if(mousePressedOver(s3) && player==="o" && xc3===0){
  s3.addImage(imgo);
  s3.scale=0.25;
  oc3=oc3+1;
  }
  if(mousePressedOver(s4) && player==="o" && xc4===0){
  s4.addImage(imgo);
  s4.scale=0.25;
  oc4=oc4+1;
  }
  if(mousePressedOver(s5) && player==="o" && xc5===0){
  s5.addImage(imgo);
  s5.scale=0.25;
  oc5=oc5+1;
  }
  if(mousePressedOver(s6) && player==="o" && xc6===0){
  s6.addImage(imgo);
  s6.scale=0.25;
  oc6=oc6+1;
  }
  if(mousePressedOver(s7) && player==="o" && xc7===0){
  s7.addImage(imgo);
  s7.scale=0.25;
  oc7=oc7+1;
  }
  if(mousePressedOver(s8) && player==="o" && xc8===0){
  s8.addImage(imgo);
  s8.scale=0.25;
  oc8=oc8+1;
  }
  if(mousePressedOver(s9) && player==="o" && xc9===0){
  s9.addImage(imgo);
  s9.scale=0.25;
  oc9=oc9+1;
  }

  if((xc1>0 && xc2>0 && xc3>0) || (xc1>0 && xc4>0 && xc7>0) || (xc3>0 && xc6>0 && xc9>0)
  || (xc7>0 && xc8>0 && xc9>0) || (xc1>0 && xc5>0 && xc9>0) || (xc3>0 && xc5>0 && xc7>0)){
    gameState="end";
    playerwon="X";
  }
  
  if((oc1>0 && oc2>0 && oc3>0) || (oc1>0 && oc4>0 && oc7>0) || (oc3>0 && oc6>0 && oc9>0)
  || (oc7>0 && oc8>0 && oc9>0) || (oc1>0 && oc5>0 && oc9>0) || (oc3>0 && oc5>0 && oc7>0)){
    gameState="end";
    playerwon="O";
  }
}

drawSprites();
textSize(30);
fill (0);
text("X",130,60);
text("O",330,60);

if(gameState==="end"){
  textSize(130);
fill ("blue");
text(playerwon+" WON",50,350);

console.log("end");
}
}

/*function playerPosition(){
  var p="s";
  num=Math.round (random(1,9));
  p=p+num;
  return p ;
}*/