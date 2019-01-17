

let display = document.getElementById('display');
let buttonPlusOne = document.getElementById('button');
let cont = {num: 0, click:0};
let buttonReset = document.getElementById('button2');
let buttonRandom = document.getElementById('buttonRandom'); 
let max = Math.trunc(Math.random()*100);
let result = document.getElementById('paragraph');
let gameStatus;
  
  
  //+1
  buttonPlusOne.addEventListener('click', function(){
         plusOne(cont); 
         gameStatus = check(max, cont.num);
         print(display,cont.num);
         if(gameStatus===0) printWin(max, cont.click);
  });
  
  //Reset
  buttonReset.addEventListener('click', function(){
    reset(cont);
    max = Math.trunc(Math.random()*100);
    print(display,cont.num);
    print(result,"Il Numero MAGICO e` ?");
  });
  
  //Random number
  buttonRandom.addEventListener('click', function(){
    randomize(cont);
    gameStatus = check(max,cont.num);
    print(display,cont.num);
    if(gameStatus===0) printWin(max, cont.click);
  });


//FUNZIONI:

//x is an oject with .num field
function reset(x){
  x.num=0;
  x.click =0;
}

//what is an object
function print(where,what){
  where.innerText = what;
}

//x is an object
function plusOne(x){
  if(x.num<100)
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
 }



