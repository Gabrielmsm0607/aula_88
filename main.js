const { fabric } = require("./fabric");

var canvas=new fabric.canvas('myCanvas');
playX=10;
playY=10;

blockImageWidth=30;
blockImageHeight=30;

var playerObject="";
var blockImageObject="";

function playerUpdate()
{
    fabric.Image.fromURL("player.png",function(img){
        playerObject=img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.sat({
            top:playY,
            left:playX
        });
        canvas.add(playerObject);
    });
}
function newImage(getImage)
{
    fabric.Image.fromURL(getImage,function(img){
        blockImageObject=img;
        blockImageObject.scaleToWidth(blockImageWidth)
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top:playY,
            left:playX
        });
        canvas.add(blockImageObject);
    });
}
 Window.addEventListener("Keydown",myKeydown);
 function myKeydown(e){
    Keypressed=e.Keycode;
    console.log(Keypressed);
    if(e.ShiftKey==true && Keypressed=='80'){
        console.log("p e Shift pressionadas juntas");
        blockImageWidth=blockImageWidth+10;
        blockImageHeight=blockImageHeight+10;
        document.getElementById("currentwhidth").innerHTML=blockImageWidth;
        document.getElementById("currentheight").innerHTML=blockImageHeight;
    }
    if(e.ShiftKey && Keypressed=='77'){
        console.log("M e Shift pressionadas juntas");
        blockImageWidth=blockImageWidth-10;
        blockImageHeight=blockImageHeight-10;
        document.getElementById("currentwhidth").innerHTML=blockImageWidth;
        document.getElementById("currentheight").innerHTML=blockImageHeight;
    }
    if(Keypressed=="38"){
       up();
       console.log("cima");
    }
    if(Keypressed=="40"){
        Down();
        console.log("Baicho");
     }
     if(Keypressed=="37"){
       left();
        console.log("Esquerda");
     }
     if(Keypressed=="39"){
        Right();
        console.log("Direita");
     }
     if(Keypressed=="87"){
        newImage('wall.jpg');
        console.log("W");
     }
     if(Keypressed=="71"){
        newImage('ground.png');
        console.log("g");
     }
     if(Keypressed=="76"){
        newImage('light_green.png');
        console.log("l");
     }
     if(Keypressed=="84"){
        newImage('trunk.jpg');
        console.log("t");
     }
     if(Keypressed=="82"){
        newImage('roof.jpg');
        console.log("r");
     }
     if(Keypressed=="89"){
        newImage('yellow_wall.png');
        console.log("y");
     }
     if(Keypressed=="68"){
        newImage('dark_green.png');
        console.log("d");
     }
     if(Keypressed=="85"){
        newImage('unique.png');
        console.log("u");
     }
     if(Keypressed=="67"){
        newImage('cloud.jpg');
        console.log("c");
     }
 }
function up (){
   if(playerY >= 0){
      playerY = playerY - blockImageHeight;
      comsole.log ("autura da imagem do bloco =" + blockImageHeight);
      comsole.log ("quando a tecla direcional cima for prescionada, X =" + playerX + ",Y = " + playerY);
      canvas.revove (playerObject);
      playerUpdate();
   }
}

function down (){
   if(playerY <= 500){
      playerY = playerY - blockImageHeight;
      comsole.log ("autura da imagem do bloco =" + blockImageHeight);
      comsole.log ("quando a tecla direcional baixo for prescionada, X =" + playerX + ",Y = " + playerY);
      canvas.revove (playerObject);
      playerUpdate();
   }
}

function left (){
   if(playerX > 0){
      playerX = playerX - blockImageWidth;
      comsole.log ("autura da imagem do bloco =" + blockImageWidth);
      comsole.log ("quando a tecla direcional esquerda for prescionada, X =" + playerX + ",Y = " + playerY);
      canvas.revove (playerObject);
      playerUpdate();
   }
}

function rite (){
   if(playerX <= 850){
      playerX = playerX - blockImageWidth;
      comsole.log ("autura da imagem do bloco =" + blockImageWidth);
      comsole.log ("quando a tecla direcional direita for prescionada, X =" + playerX + ",Y = " + playerY);
      canvas.revove (playerObject);
      playerUpdate();
   }
}