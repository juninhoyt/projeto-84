canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
img_width=300;
img_heigth=100;

var img_image;
img_x=100;
img_y=100;
function add(){
    img_imageTag = new Image();
    img_imageTag.onload = upload;
    img_imageTag.src = img_image;
}
function upload(){
    ctx.drawImage(img_imageTag, img_x, img_y, img_width, img_heigth);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

        if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=99))
        {
        aplhabetkey();
        document.getElementById("d1").innerHTML="Você pressionou uma tecla alfabeto";

        console.log("alphabet key");
        }

        else if(keyPressed>=48 && keyPressed<=57){
            numberkey();
            document.getElementById("d1").innerHTML="você pressionou uma tecla numérica";
            console.log("tecla numérica");
        }

        else if(keyPressed>=37 && keyPressed<=40){
            direcionalkey();
            document.getElementById("d1").innerHTML="você pressionou uma tecla direcional";
            console.log("tecla direcional");

        }

        else if((keyPressed==17)||(keyPressed==18||keyPressed==27)){
            especialkey();
            document.getElementById("d1").innerHTML="você pressionou uma tecla especial";
            console.log("tecla especial");
        }

        else{
            otherkey();
            document.getElementById("d1").innerHTML="você pressionou um símbolo";
            console.log("tecla especial");
        }
        
}
function aplhabetkey(){
    img_image="alfabeto.png";
    add();
} 

function numberkey(){
    img_image="número.png";
    add();
} 

function especialkey(){
    img_image="especial.png";
    add();
} 

function direcionalkey(){
    img_image="direcional.png";
    add();
} 

function otherkey(){
    img_image="outras.png";
    add();
} 

