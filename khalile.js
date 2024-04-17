let number1 = prompt("Enter your number here")
number1 = Number(number1)
console.log(number1)
/* This is a number */

let number2 = prompt("Enter your number here")
number2 = Number(number2)
console.log(number2)
/* This is a number */

let number3 = prompt("Enter your number here")
number3 = Number(number3)
console.log(number3)
/* This is a number */

let sum = number1+number2+number3
sum = Number(sum)
console.log(number1 + " + " + number2 + " + " + number3 + " = " + sum)
/* This is a sum operation */

let mult = number1*number2*number3
mult = Number(mult)
console.log(number1 + " * " + number2 + " * " + number3 + " = " + mult)
/* This is a sum operation */

let div = number1/number2/number3
div = Number(div)
console.log(number1 + " / " + number2 + " / " + number3 + " = " + div)
/* This is a div operation */

let sous = number1-number2-number3
sous = Number(sous)
console.log(number1 + " - " + number2 + " - " + number3 + " = " + sous)
/* This is sous operation */

alert(number1 + " + " + number2 + " + " + number3 + " = " + sum + "\n" 
+ number1 + " * " + number2 + " * " + number3 + " = " + mult + "\n" 
+ number1 + " / " + number2 + " / " + number3 + " = " + div + "\n" 
+number1 + " - " + number2 + " - " + number3 + " = " + sous)

/*______________________________________________________________________________________________________________________________________*/

let firstname = " khalil "
let lastname = " akchine "
console.log(" My first name is " + firstname + " and my last name is " + lastname)
console.log(`My first name is ${firstname} and my lastname is ${lastname}`)

/*______________________________________________________________________________________________________________________________________*/

                                                    /* LOOPS */    
 // while
let variable = 0;
while(variable<10){
    console.log(variable)
    variable = variable + 1
}
// while
let numbers = [10,9,6,8,3,9,9,9,9,9,9,9,99,9,9,9,9,9,9,9,9,9,9]
let variables = 0 
while(variables<numbers.length){
    console.log(variables)
    variables = variables + 1
}

//for loop
 
for(let i=0;i<20;i+=2){
    console.log("hello");
}

/*______________________________________________________________________________________________________________________________________*/

                                                    /* the switch statment */   
let code = "x"
switch( code) {
case 1:
    console.log( 'Red' );
    break;
case 2:
    console.log( 'Yellow' );
    break;
case "x":
    console.log( 'Green' );
    break;
default:
    console.log( 'Unknown code' );
}

/*______________________________________________________________________________________________________________________________________*/

                                                    /* the switch statment */   



function addUp(arr){
 
    for(i=0;i<=30;i++){
        console.log(i)
    }
    return i;
}
 
let array = [10,3,5,20,6,9,30]
addUp(array)
                                                

/*______________________________________________________________________________________________________________________________________*/

                                                    /* the switch statment */   


function printString(str, num) {
    for (let i = 0; i < num; i++) {
        console.log(str);
    }
}
console.log( printString("name", 3));

function printNumbersTenTimes() {
    for (let i = 0; i < 10; i++) {
        console.log("iteration" + i)
        for (let j = 1; j <= 3; j++) {
            console.log(j);
        }
    }
}
console.log(printNumbersTenTimes())

/*--------------------------------------------------------------------------------------------------------------------------------- */
function array(animes){
    for ( let i=0;i<animes.length;i++){
        console.log(animes[i])
    }
}
let animes = [ "Sololeveling" , "DemonSlayer" , "Fate" , "TokyoGhoul" , "Naruto"]
array(animes)
console.log("----------------------------")

animes.pop("Naruto")
array(animes)
console.log("----------------------------")

animes.push("Bleach")
array(animes)
console.log("----------------------------")

console.log(animes[3])
console.log("----------------------------")

animes.unshift("DeathNOte")
array(animes)
/*--------------------------------------------------------------------------------------------------------------------------------- */
function checkifnumber(){
    let userinput=prompt("Enter your number here");
    let number=parseFloat(userinput);

    let result;
    if ( number > 0 ){
        result = "positive" ;

    } else if ( number < 0 ){
        result = "negative";

    } else {
        result = "Equal to zero";
    }

    alert("The result is " + result)
}
checkifnumber()
/*--------------------------------------------------------------------------------------------------------------------------------- */

for (let i = 0; i < 5; i++) {
    let line = ""
    for(let j=0;j<4-i;j++){
        line += " "
    }
    for(let j=0;j<=i;j++){
        line += "*"
    }
    console.log(line)
}
/*--------------------------------------------------------------------------------------------------------------------------------- */

let name = prompt("Enter your name")
let age = prompt("Enter your age")
if ( age > 16 ){
    alert(" Welcome " + name)
} else if ( age < 16 ){
     let gender =prompt("Are you a male or a female")
     if (gender ==="male"){
        alert(" Welcome " + name)
    } else if (gender ==="female"){
        alert("you are too young")
    } else (
        alert("invalid input")
    )
} 

/*--------------------------------------------------------------------------------------------------------------------------------- */
function array(arr){
    let min = arr[0]
    for ( let i=0; i<numbers.length; i++){
        if ( numbers[i] < min ){
            min = numbers[i]
        }
    }
    return min
}
let numbers = [ -20,30,9,80,7,-15,3 ]
console.log(array(numbers))
/*--------------------------------------------------------------------------------------------------------------------------------- */

function array(arr){
    let max = arr[0]
    for ( let i=0; i<numbers.length; i++){
        if ( numbers[i] > max ){
            max = numbers[i]
        }
    }
    return max
}
let numbers = [ -20,30,9,80,7,-15,3 ]
console.log(array(numbers))
 


