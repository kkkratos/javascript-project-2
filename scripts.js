/*---------------------------------------------------Array functions:----------------------------------------------------------------------*/
// Exercice 1 :                                    
function array(arr){                            
    let min = arr[0]                            
    let max = arr[0]                            
                                                
    for ( let i=0; i<numbers.length; i++){      
        if ( numbers[i] < min ){                 
            min = numbers[i]                    
        } else if ( numbers[i] > max ){         
            max = numbers[i]                    
        }                                       
    }                                           
    let obj = {                                 
        minimum : min,                          
        maximum : max,                          
    }                                           
    return obj                                  
                                                
}                                                
let numbers = [ -20,30,9,80,7,-15,3 ]           
console.log(array(numbers))                     
/*-----------------------------------------------------------------------------------------------------------------------------------------*/
// Exercice 2 :                                 
function array2(arr){                           
    let sum =0                                  
    for (let i=0; i<Numbers.length; i++){       
        sum += Numbers[i]                       
    }                                           
    return sum                                  
}                                               
let Numbers = [ 10,90,46,73,95,82,4,1000]       
console.log(array2(Numbers))                    
/*-----------------------------------------------------------------------------------------------------------------------------------------*/
// Exercice 3 :                                 
function array3(arr){                           
    let ar = []                                 
    for (let i=0; i<positive.length; i++){      
        if (arr[i]>0){                          
            ar.push(arr[i])                     
        }                                       
    }                                           
    return ar;                                  
}                                               
let positive = [ -10,20,-8,6,-9,-6,53]          
console.log(array3(positive))                   
/*---------------------------------------------------Mathematical Functions:---------------------------------------------------------------- */
// Exercice 1:
function number(n){
    let result=1
    for ( let i=1; i<=n; i++){
        result = result*i
    }
    return result
    }
console.log(number(5))
/*-----------------------------------------------------------------------------------------------------------------------------------------*/
// Exercice 2 : 
function modulo(n){
    for (let i=2; i<=n-1;i++){
        if ( n%i===0){
            return "The return is not prime"
        }
    }
    return "The number is prime"
}
console.log(modulo(2))
/*---------------------------------------------------String Manipulation Functions:--------------------------------------------------------*/
// Exercice 1:
function string(a){
    let str = ""
    for (let i=a.length-1 ; i>=0;i--){
        str = str + a[i]
    }
    return str;
}
console.log(string("khalil"))
/*-----------------------------------------------------------------------------------------------------------------------------------------*/
// Exercice 2 : 
function string(str){
    let count = 0
    for (let i = 0; i<str.length ; i++){
        if ( str[i] === "a"|| str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" ){
            count += 1
        }
    }
    return count
    
}
console.log(string("Khalil Akchine"))
/*-----------------------------------------------------------------------------------------------------------------------------------------*/
// Exercice 3 : 
function string(str){
    let words = str.split(" ")
    for ( i=0; i<words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substring(1)
    }
    return words
}
console.log(string("khalil is learning java script"))



