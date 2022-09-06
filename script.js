let valueofdice;

document.getElementById("buttonn").onclick = function(){
    valueofdice = Math.floor(Math.random()* 6) + 1;

    if(valueofdice == 1){
        document.getElementById("diceimg").src="images/dice1.png";
    }
    else if(valueofdice==2){
        document.getElementById("diceimg").src="images/dice2.png";
    }
    else if(valueofdice==3){
        document.getElementById("diceimg").src="images/dice3.png";
    }
    else if(valueofdice==4){
        document.getElementById("diceimg").src="images/dice4.png";
    }
    else if(valueofdice==5){
        document.getElementById("diceimg").src="images/dice5.png";
    }
    else if(valueofdice==6){
        document.getElementById("diceimg").src="images/dice6.png";
    }

     
}   