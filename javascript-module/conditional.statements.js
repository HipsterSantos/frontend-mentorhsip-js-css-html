var myAge = 45; 
// undefined
if (myAge = 45){
    console.log(`I'm ${myAge} years old `)
}
// VM1280:2 I'm 45 years old 
// undefined
if (myAge == 45){
    console.log(`I'm ${myAge} years old `)
}
// VM1283:2 I'm 45 years old 
// undefined
if (myAge == 454){
    console.log(`I'm ${myAge} years old `)
}
else {
    console.log(`Not I'm not 454 years old,instead I'm ${myAge} `)
}
// VM1378:5 Not I'm not 454 years old,instead I'm 45 
// undefined
if (myAge == 454){
    console.log(`I'm ${myAge} years old `)
}
else if (myAge >= 30){
    console.log(`I'm in midle of this age `)
}

else {
    console.log(`Not I'm not 454 years old,instead I'm ${myAge} `)
}
// VM1454:5 I'm in midle of this age 
// undefined
if (myAge == 454){
    console.log(`I'm ${myAge} years old `)
}
else if (myAge >= 30){
    console.log(`I'm in midle of this age `)
}
else if (myAge <= 50){
    console.log(`less than 50`)
}
else if (myAge != 30){
    console.log(`different of `)
}

else {
    console.log(`Not I'm not 454 years old,instead I'm ${myAge} `)
}


// VM1508:5 I'm in midle of this age 
// undefined

let goals_number = 3;

switch(goals_number){

    case 1: console.log('is one'); break; 
    case 2: console.log('is two');break;
    case 3: console.log('is three'); break;
    default: console.log('none of the state cases was true')
        
}
// VM1832:7 is three
// undefined

let goals_number = 0;

switch(goals_number){

    case 1: console.log('is one'); break; 
    case 2: console.log('is two');break;
    case 3: console.log('is three'); break;
    default: console.log('none of the state cases was true')
        
}
// VM1837:8 none of the state cases was true
// undefined
let goals_number = 3;

switch(goals_number){

    case  "one": {
      
        
        let operation = 'transfer money';
        
        console.log('is one'); break; 
    }
    case 2: console.log('is two');break;
    case 3: console.log('is three'); break;
    default: console.log('none of the state cases was true')
        
}
// VM1900:13 is three
// undefined
let goals_number = "one";

switch(goals_number){

    case  "one": {
      
        
        let operation = 'transfer money';
        
        console.log('is one'); break; 
    }
    case 2: console.log('is two');break;
    case 3: console.log('is three'); break;
    default: console.log('none of the state cases was true')
        
}
// VM1907:10 is one
// undefined
let dictionary = {
    "one": 1,
    "two": 2,
}
// undefined
let dictionary = {
    "one": 1,
    "two": 2,
    "three": 3
}
let goals_number = "one";

switch(  dictionary[goals_number]  ){

    case  1: {
      
        
        let operation = 'transfer money';
        
        console.log('is one'); break; 
    }
    case 2: console.log('is two');break;
    case 3: console.log('is three'); break;
    default: console.log('none of the state cases was true')
        
}

// VM2035:15 is one
// undefined
dictionary["one"]
// 1
goals_number
// 'one'
dictionary[goals_number]
// 1   /
var option = 1;
// undefined
switch(option){

    case 1: console.log('Levantamentos') ; break;
    case 2: console.log('Consulta') ; break;
    case 3: console.log('Pagamentos') ; break;
    case 4: console.log('Pagamento ao estado (RUPE)') ; break;    
}
// VM2507:3 Levantamentos
// undefined
option = 4
switch(option){

    case 1: console.log('Levantamentos') ; break;
    case 2: console.log('Consulta') ; break;
    case 3: console.log('Pagamentos') ; break;
    case 4: console.log('Pagamento ao estado (RUPE)') ; break;    
}
// VM2521:7 Pagamento ao estado (RUPE)
// undefined
option = 7
switch(option){

    case 1: console.log('Levantamentos') ; break;
    case 2: console.log('Consulta') ; break;
    case 3: console.log('Pagamentos') ; break;
    case 4: console.log('Pagamento ao estado (RUPE)') ; break;   
    default: console.log('Tente um comando valido '); break; 
}
// VM2597:8 Tente um comando valido 
// undefined