arr
(5) [1, 2, 2, 3, 4]
arr.find
ƒ find() { [native code] }
arr.find( function(value){
    console.log('value')
})
5VM696:2 value
undefined
arr.find( function(value){
    console.log('value=',value)
})
VM766:2 value= 1
2VM766:2 value= 2
VM766:2 value= 3
VM766:2 value= 4
undefined
arr.find( function(value){
    if(value>3)return value
})
4
arr = [1,2,2,3,4,44,5,7,8]
(9) [1, 2, 2, 3, 4, 44, 5, 7, 8]
arr.find( function(value){
    if(value>3)return value
})
4
arr.find( value=> value>3)
4
function nameFuction(parametros){
    // block 
    console.log('this is a named function ')
}
undefined
const arrow = (parametro)=>{
    console.log('paramentros ')
}
undefined
 const arrow2 = parametro=>{
    console.log('parametros -- ',parametro)
} 
undefined
arrow2()
VM1269:2 parametros --  undefined
undefined
arrow2(223)
VM1269:2 parametros --  223
undefined
arr.filter(value=>value>3)
(5) [4, 44, 5, 7, 8]
arr.filter(value=>value>=3)
(6) [3, 4, 44, 5, 7, 8]
arr.map(value=>value>=3)
(9) [false, false, false, true, true, true, true, true, true]
const person = {
    name: 'Hock',
    height: 5.5,
    'Civil state': 'Single',
    'hairColor': 'Black',
    occupation: ['Designer','Marketer specialist','Scientis']
}
undefined
for( let receiver in arr) {
    console.log('\nreceived value is =',receiver)
}
VM1813:2 
received value is = 0
VM1813:2 
received value is = 1
VM1813:2 
received value is = 2
VM1813:2 
received value is = 3
VM1813:2 
received value is = 4
VM1813:2 
received value is = 5
VM1813:2 
received value is = 6
VM1813:2 
received value is = 7
VM1813:2 
received value is = 8
undefined
const ar= ["name",true,false,34,'place']
undefined
for( let receiver in ar) {
    console.log('\nreceived value is =',receiver)
}
VM1881:2 
received value is = 0
VM1881:2 
received value is = 1
VM1881:2 
received value is = 2
VM1881:2 
received value is = 3
VM1881:2 
received value is = 4
undefined
for( let receiver in ar) {
    console.log('\nreceived value is =',ar[receiver])
    console.log('\nreceived value is =',receiver)
}
VM1935:2 
received value is = name
VM1935:3 
received value is = 0
VM1935:2 
received value is = true
VM1935:3 
received value is = 1
VM1935:2 
received value is = false
VM1935:3 
received value is = 2
VM1935:2 
received value is = 34
VM1935:3 
received value is = 3
VM1935:2 
received value is = place
VM1935:3 
received value is = 4
undefined
for( let receiver of ar) {
    console.log('\nreceived value is =',ar[receiver])
    console.log('\nreceived value is =',receiver)
}
VM1943:2 
received value is = undefined
VM1943:3 
received value is = name
VM1943:2 
received value is = undefined
VM1943:3 
received value is = true
VM1943:2 
received value is = undefined
VM1943:3 
received value is = false
VM1943:2 
received value is = undefined
VM1943:3 
received value is = 34
VM1943:2 
received value is = undefined
VM1943:3 
received value is = place
undefined
for( let receiver of arr) {
    console.log('\nreceived value is =',ar[receiver])
    console.log('\nreceived value is =',receiver)
}
VM1952:2 
received value is = true
VM1952:3 
received value is = 1
VM1952:2 
received value is = false
VM1952:3 
received value is = 2
VM1952:2 
received value is = false
VM1952:3 
received value is = 2
VM1952:2 
received value is = 34
VM1952:3 
received value is = 3
VM1952:2 
received value is = place
VM1952:3 
received value is = 4
VM1952:2 
received value is = undefined
VM1952:3 
received value is = 44
VM1952:2 
received value is = undefined
VM1952:3 
received value is = 5
VM1952:2 
received value is = undefined
VM1952:3 
received value is = 7
VM1952:2 
received value is = undefined
VM1952:3 
received value is = 8
undefined
Object.keys
ƒ keys() { [native code] }
Object.keys(preson)
VM2032:1 Uncaught ReferenceError: preson is not defined
    at <anonymous>:1:13
(anonymous) @ VM2032:1
Object.keys(person)
(5) ['name', 'height', 'Civil state', 'hairColor', 'occupation']
person
{name: 'Hock', height: 5.5, Civil state: 'Single', hairColor: 'Black', occupation: Array(3)}Civil state: "Single"hairColor: "Black"height: 5.5name: "Hock"occupation: (3) ['Designer', 'Marketer specialist', 'Scientis'][[Prototype]]: Object
for ( let keys of Object.keys(person)){
    console.log(` keys = key ; value ${person[key]}`)
}
VM2259:2 Uncaught ReferenceError: key is not defined
    at <anonymous>:2:47
(anonymous) @ VM2259:2
for ( let keys of Object.keys(person)){
    console.log(` keys = key ; value ${person[keys]}`)
}
VM2265:2  keys = key ; value Hock
VM2265:2  keys = key ; value 5.5
VM2265:2  keys = key ; value Single
VM2265:2  keys = key ; value Black
VM2265:2  keys = key ; value Designer,Marketer specialist,Scientis
undefined
for ( let keys of Object.keys(person)){
    console.log(` keys = ${keys} ; value ${person[keys]}`)
}
VM2277:2  keys = name ; value Hock
VM2277:2  keys = height ; value 5.5
VM2277:2  keys = Civil state ; value Single
VM2277:2  keys = hairColor ; value Black
VM2277:2  keys = occupation ; value Designer,Marketer specialist,Scientis
undefined
setTimeout(function(){
    console.log(' my program is running...')
},1000)
20
VM2450:2  my program is running...
Date('Mon Jul 13 2024 ')
'Mon Jul 15 2024 20:39:49 GMT+0100 (West Africa Standard Time)'
const date = new Date('Mon Jul 13 2024 ')
undefined
date
Sat Jul 13 2024 00:00:00 GMT+0100 (West Africa Standard Time)
const j = new Object()
undefined
j 
{}
const ar2 = new Array()
undefined
ar2
[]
const num = Number(232)
undefined
const num = new Number(232)
undefined
num 
Number {232}[[Prototype]]: Number[[PrimitiveValue]]: 232
date.getHours()
0
date.getMinutes()
0
date.getMinutes
ƒ getMinutes() { [native code] }
const d = new Date('Mon Jul 15 2024 20:39:49')
undefined
d.getHours()
20
d.getMinutes()
39
d.getMilliseconds()
0
const counter = 10;
undefined
do {
    console.log('current counter is = ',counter)
    counter = counter - 1;
}while(counter >1);
VM3262:2 current counter is =  10
VM3262:3 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:3:13
(anonymous) @ VM3262:3
let c = 10
do {
    console.log('current counter is = ',c)
    c = c - 1;
}while(c >1);
VM3302:3 current counter is =  10
VM3302:3 current counter is =  9
VM3302:3 current counter is =  8
VM3302:3 current counter is =  7
VM3302:3 current counter is =  6
VM3302:3 current counter is =  5
VM3302:3 current counter is =  4
VM3302:3 current counter is =  3
VM3302:3 current counter is =  2
1
var b = 10
while(b >1){
    console.log('b is = ', b )
    b = b - 1; 
}
VM3425:3 b is =  10
VM3425:3 b is =  9
VM3425:3 b is =  8
VM3425:3 b is =  7
VM3425:3 b is =  6
VM3425:3 b is =  5
VM3425:3 b is =  4
VM3425:3 b is =  3
VM3425:3 b is =  2
1
do {
    cons
}
VM3445:3 Uncaught SyntaxError: Unexpected end of input
do {
    console.log('I was called once')
}while(1>1);
VM3520:2 I was called once
undefined
while(1>1){
    console.log('I was called once ')
}
undefined
//try catch 
undefined
var a = []
undefined
a.size
undefined
a.size()
VM3697:1 Uncaught TypeError: a.size is not a function
    at <anonymous>:1:3
(anonymous) @ VM3697:1
try{
    a.size()
}catch(erro){
    console.log('O erro foi ',erro)
}
VM3814:4 O erro foi  TypeError: a.size is not a function
    at <anonymous>:2:7
undefined
try{
    if (1==1) throw 'E 1 é igual a 1 , esse caso é uma exception'
}catch(erro){
    console.log('O erro foi ',erro)
}
VM3902:4 O erro foi  E 1 é igual a 1 , esse caso é uma exception
undefined