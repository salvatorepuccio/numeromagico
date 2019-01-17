//advanced mode

let display = document.getElementById('display');
let buttonPlusOne = document.getElementById('button');
let cont = {num: 50, click:0};
let buttonReset = document.getElementById('button2');
let buttonRandom = document.getElementById('buttonRandom'); 
let max = Math.trunc(Math.random()*100);
console.log(max);
let result = document.getElementById('paragraph');
let gameStatus;
//advanced variables
let infoAggiuntiva = document.getElementById('info');
let minusOneButton = document.getElementById('minusButton');
  
  
  //+1
  buttonPlusOne.addEventListener('click', function(){
         plusOne(cont); 
         gameStatus = check(max, cont.num);
         printMe(display,cont.num);
         giveHint(gameStatus);
  });
  
  //-1
  minusOneButton.addEventListener('click',function(){
	  minusOne(cont);
	  gameStatus = check(max,cont.num);
	  printMe(display,cont.num);
	  giveHint(gameStatus);
  });
  
  //Reset
  buttonReset.addEventListener('click', function(){
    reset(cont);
    max = Math.trunc(Math.random()*100);
    printMe(display,cont.num);
    printMe(result,"Il Numero MAGICO e` ?");
    printMe(infoAggiuntiva,"Stai sopra o sotto il Numero MAGICO?");
  });
  
  //Random number
  buttonRandom.addEventListener('click', function(){
    randomize(cont);
    gameStatus = check(max,cont.num);
    printMe(display,cont.num);
    //if(gameStatus===0) printWin(max, cont.click);
    //else if(gameStatus<0) printMe(infoAggiuntiva,"Stai sotto al max");
    //else printMe(infoAggiuntiva, "Stai sopra al max");
	giveHint(gameStatus);
  });


//FUNZIONI:

//x is an oject with .num field
function reset(x){
  x.num=50;
  x.click =0;
}

//what is an object
function printMe(where,what){
  where.innerText = what;
}

//x is an object
function plusOne(x){
  x.num++;
  x.click++;
}

function randomize(x){
  let rnd = Math.trunc(Math.random()*100);
  x.num = rnd;
  x.click++;
}

function check(max,num){
  if(num>max) return 1;
  else if(num<max) return -1;
  else if(num===max) return 0;
}
 function printWin(max, x){
   result.innerText = "HAI VINTO! Il Numero MAGICO era: "+max+" ci hai messo "+x+" click";
   infoAggiuntiva.innerText = "Bene";
 }
 
 function minusOne(x){
	x.num--;
	x.click++;
 }
 
 function giveHint(x){
	 
	 if(x===0) printWin(max, cont.click);
         else if(x<0) printMe(infoAggiuntiva,cont.num+" < Numero MAGICO");
         else printMe(infoAggiuntiva, "Numero MAGICO < "+ cont.num);
 }



