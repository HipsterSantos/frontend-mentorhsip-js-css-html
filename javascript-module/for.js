

let elements = document.children.hmtl.children

let elementss = document.children

var body = elements[0].children[1]

var bodyChildren = body.children


for (let  initial in bodyChildren){

    console.log(`body has ${initial}`)
    
}


var arr  = ['login','log out ', 'singup','shoppping', 'items']

var objj = {
    "login": true,
}

var objj = {
    "login": true,
    "signup": false,
    "hasChild": false
}

for (let  initial in arr){

    console.log(`body has ${initial}`)
    
}

for (let  initial in arr){

    console.log(`body has ${arr[initial]}`)
    
}

for (let  initial in objj){

    console.log(`body has ${initial}`)
    
}
// VM1141:1 Uncaught SyntaxError: Unexpected token '{'
for (let  initial in objj){

    console.log(`body has ${initial}`)
    
}
// VM1144:3 body has login
// VM1144:3 body has signup
// VM1144:3 body has hasChild
// undefined
for (let  initial in objj){

    console.log(`body has ${objj[initial]}`)
    
}
// VM1155:3 body has true
// 2VM1155:3 body has false
// undefined
// objj["login"]
// true
// objj.login
// true
for (let  initial of objj){

    console.log(`body has ${initial}`)
    
}

// VM1259:1 Uncaught TypeError: objj is not iterable
//     at <anonymous>:1:22
// (anonymous) @ VM1259:1

for (let  initial of 'somehting'){

    console.log(`body has ${initial}`)
    
}

// VM1275:3 body has s
// VM1275:3 body has o
// VM1275:3 body has m
// VM1275:3 body has e
// VM1275:3 body has h
// VM1275:3 body has t
// VM1275:3 body has i
// VM1275:3 body has n
// VM1275:3 body has g
// undefined
for (let  initial of ['primeiro','segundo','terceiro']){

    console.log(`body has ${initial}`)
    
}
// VM1318:3 body has primeiro
// VM1318:3 body has segundo
// VM1318:3 body has terceiro
// undefined
for (let  initial in ['primeiro','segundo','terceiro']){

    console.log(`body has ${initial}`)
    
}

for (let  initial of ['primeiro','segundo','terceiro']){

    console.log(`body has ${initial}`)
    
}
let itemsToFilter = ['milker','moloko','druk','moy','done']

itemsToFilter.forEach( (item,index)=>{
    console.log(item)
}   )

itemsToFilter.forEach( (item,index)=>{
    console.log(item,' = ',index)
}   )


var menu = ["list one", "list two", "list three"]
for( let inside in menu1 ){

    console.log('inside = ',inside)
}

var objj = {
    "login": true,
    "signup": false,
    "hasChild": false
}

for( let inside in objj ){

    console.log('inside = ',inside)
}

for( let inside of objj ){

    console.log('inside = ',inside)
}

for( let inside of menu1 ){

    console.log('inside = ',inside)
}

for( let inside of "sometthing to test "){

    console.log('inside = ',inside)
}

for( let inside in "sometthing to test "){

    console.log('inside = ',inside)
}

for( let inside in objj){

    console.log('inside = ',inside)
}

menu1.forEach( (item,i)=>{
    console.log(` item = ${item} , position  = ${i}  ; then item[position]  ${menu1[i]}`)
} )

function sum(){
    return 1+1
}
sum()
var name = "dog"
function callback( functionParameter){
    let a = 283
    return functionParameter(a)
}

// undefine
callback(function(valor){console.log('valor passado - for -- ')}),
Array.prototype.forHere = function(callback){
    console.log('print this -->',this)
}

Array.prototype.forHere = function(callback){
    console.log('print this -->',this)
    for(let initial = 0 ; initial< this.length-1; initial+=1){

        callback(this[initial],initial)
    }
}

    for(let initial = 0 ; initial< this.length-1; initial+=1){

        callback(this[initial],initial)
    }


menu1.forHere( (item,i)=>{
    console.log(` item = ${item} , position  = ${i}  ; then item[position]  ${menu1[i]}`)
} )
