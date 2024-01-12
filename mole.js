let currMoleTitle;
let currPlantTitle;
let score = 0;
let gameOver = false;

window.onload=function(){
    setGame();
}

function setGame(){
    for(let i=0; i < 9;i++ ){
        let tile= document.createElement ('div')
        tile.id=i.toString();
        tile.addEventListener("click", selectTitle);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole,1000);///1000 millisecond=1 second 

    setInterval(setPlant,2000)//2000 millisecond = 2 second 
}
 //function 
function getRandamTitle(){
    let num = Math.floor(Math.random() *9);
    return num .toString(); 
}



function setMole (){

    if (gameOver){
        return;
    }

    if (currMoleTitle){
          currMoleTitle. innerHTML = ""; 
    }
    let mole =document.createElement("img");
    mole.src=  "mario1.jpg";

    let num =getRandamTitle();
    if (currPlantTitle && currPlantTitle.id==num){
        return;
    }
    currMoleTitle= document.getElementById(num);
    currMoleTitle.appendChild(mole);
}

function setPlant(){

    if (gameOver){
        return;
    }

    if (currPlantTitle){

     currPlantTitle.innerHTML="";
    }

    let Plant = document.createElement("img")
    Plant.src="./PiranhaPlant msg.webp";

    let  num = getRandamTitle();

    if(currMoleTitle && currMoleTitle.id==num){
        return;
    }
    currPlantTitle = document.getElementById(num);
    currPlantTitle.appendChild(Plant)

}
function selectTitle(){
    if (gameOver){
        return;
    }
    if (this==currMoleTitle){
        score += 10;
        document.getElementById("score").innerText=score.toString();
    }

    else if (this==currPlantTitle){
        document.getElementById("score").innerText="GAME OVER:"+ score.toString();
        gameOver = true;

    }
}