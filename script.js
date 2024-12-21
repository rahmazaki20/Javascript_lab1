
//question_1

function sortednums(num1,num2,num3){

var sorted;

if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
    sorted = num1 + ', ' + num2 + ', ' + num3;
  } else {
    sorted = num1 + ', ' + num3 + ', ' + num2;
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
    sorted = num2 + ', ' + num1 + ', ' + num3;
  } else {
    sorted = num2 + ', ' + num3 + ', ' + num1;
  }
} else {
  if (num1 >= num2) {
    sorted = num3 + ', ' + num1 + ', ' + num2;
  } else {
    sorted = num3 + ', ' + num2 + ', ' + num1;
  }
}
alert(sorted);
}
num1=3;
num2=-7;
num3=2;
sortednums(num1,num2,num3);

//question_2
function FizzBuzz(){
for (let i=0 ; i<=100 ; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      }
     
      else if (i % 3 === 0) {
        console.log("Fizz");
      }
     
      else if (i % 5 === 0) {
        console.log("Buzz");
      }
     
      else {
        console.log(i);
      }
}
}
FizzBuzz()

//question_3

function sums(){
let sum = 0;
for (let i = 1; i < 1000; i++) {
 
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i; 
  }
}
console.log(sum);
}
sums()
;





//question_4
var randomInteger;
var count = 0;

function guess() {
    randomInteger = Math.floor(Math.random() * 10) + 1;
    console.log("randomInteger: " + randomInteger);  

   
    function promptUser() {
        if (count >= 3) {
            console.log("Game Over");
            return; 
        }

        var input = prompt('Enter a number between 1 and 10');

      
        if (input === null) {
            console.log("enter a vaild number");
            return;
        }

        input = parseInt(input);

        if (isNaN(input) || input <= 0 || input > 10) {
            console.log("Please enter a valid number between 1 and 10.");
            promptUser(); 
        } else {
          
            if (randomInteger === input) {
                console.log("Good job!");
            } else {
                console.log("Try again!");
                count++;
                promptUser();  
            }
        }
    }


    promptUser();
}


guess();
