// for of ; for in forEach
undefined
var name = "sebatian";
undefined
var names = ['sebastian', name, 'Trainer','coach']
undefined
names[0]
'sebastian'
names[1]
'sebatian'
for (let initial = 0; initial < names.length-1; ini)
VM470:1 Uncaught SyntaxError: Unexpected end of input
for (let initial = 0; initial < names.length-1; initial+=1){
    console.log('  index actual = ', initial)
}
VM602:2   index actual =  0
VM602:2   index actual =  1
VM602:2   index actual =  2
undefined
for (let initial = 0; initial < names.length-1; initial+=1){
    console.log('  index actual = ', names[initial])
}
VM627:2   index actual =  sebastian
VM627:2   index actual =  sebatian
VM627:2   index actual =  Trainer
undefined
for (let initial = 0; initial <= names.length-1; initial+=1){
    console.log('  index actual = ', names[initial])
}
VM630:2   index actual =  sebastian
VM630:2   index actual =  sebatian
VM630:2   index actual =  Trainer
VM630:2   index actual =  coach
undefined
for (let a in names){
    console.log(' value of a == ',a)
}
VM763:2  value of a ==  0
VM763:2  value of a ==  1
VM763:2  value of a ==  2
VM763:2  value of a ==  3
undefined
for (let a in "sebastian"){
    console.log(' value of a == ',a)
}
VM781:2  value of a ==  0
VM781:2  value of a ==  1
VM781:2  value of a ==  2
VM781:2  value of a ==  3
VM781:2  value of a ==  4
VM781:2  value of a ==  5
VM781:2  value of a ==  6
VM781:2  value of a ==  7
VM781:2  value of a ==  8
undefined
for (let a in names){
    console.log(' value of a == ',names[a])
}
VM802:2  value of a ==  sebastian
VM802:2  value of a ==  sebatian
VM802:2  value of a ==  Trainer
VM802:2  value of a ==  coach
undefined
for (let a of name){
    console.log(' value is == 'a)
}

VM907:2 Uncaught SyntaxError: missing ) after argument list
for (let a of name){
    console.log(' value is == ',a)
}

VM920:2  value is ==  s
VM920:2  value is ==  e
VM920:2  value is ==  b
VM920:2  value is ==  a
VM920:2  value is ==  t
VM920:2  value is ==  i
VM920:2  value is ==  a
VM920:2  value is ==  n
undefined
for (let a of "name"{
    console.log(' value is == ',a)
}

VM931:1 Uncaught SyntaxError: Unexpected token '{'
for (let a of "name"){
    console.log(' value is == ',a)
}

VM934:2  value is ==  n
VM934:2  value is ==  a
VM934:2  value is ==  m
VM934:2  value is ==  e
undefined
var a = "kdklakld"
undefined
class String {
    length;
    constructor(stringValue) {
        this.length = stringValue
    }

}
undefined
class String {
    length;
    constructor(stringValue) {
        this.length = String(stringValue).length
    }
    printName(){
        console.log("Im the current element",this)
    }

}
undefined
var fakeString = new String("alguma coisa")
VM1320:4 Uncaught TypeError: Class constructor String cannot be invoked without 'new'
    at new String (<anonymous>:4:23)
    at <anonymous>:1:18
String @ VM1320:4
(anonymous) @ VM1412:1
class Stringg {
    length;
    constructor(stringValue) {
        this.length = String(stringValue).length
    }
    printName(){
        console.log("Im the current element",this)
    }

}
undefined
var fakeString = new Stringg("alguma coisa")
VM1419:4 Uncaught TypeError: Class constructor String cannot be invoked without 'new'
    at new Stringg (<anonymous>:4:23)
    at <anonymous>:1:18
Stringg @ VM1419:4
(anonymous) @ VM1428:1
class Stringg {
    length;
    constructor(stringValue) {
        this.length = new String(stringValue).length
    }
    printName(){
        console.log("Im the current element",this)
    }

}
undefined
var fakeString = new Stringg("alguma coisa")
VM1320:4 Uncaught TypeError: Class constructor String cannot be invoked without 'new'
    at new String (<anonymous>:4:23)
    at new Stringg (<anonymous>:4:23)
    at <anonymous>:1:18
String @ VM1320:4
Stringg @ VM1437:4
(anonymous) @ VM1442:1
class Stringg {
    length;
    constructor(stringValue) {
        this.length =  stringValue.length
    }
    printName(){
        console.log("Im the current element",this)
    }

}
undefined
var fakeString = new Stringg("alguma coisa")
undefined
fakeString.printName('something')
VM1452:7 Im the current element Stringg {length: 12}length: 12[[Prototype]]: Object
undefined
var name = "somehting"
undefined
var products = ['Clothes','Sofas','Pilow','Wardrobe'];
undefined
products.forEach( (item ,index)=>{
    console.log('\n\nitem  == ',item)
    console.log('\nIndice == ',index)
}  )
VM2055:2

item  ==  Clothes
VM2055:3
Indice ==  0
VM2055:2

item  ==  Sofas
VM2055:3
Indice ==  1
VM2055:2

item  ==  Pilow
VM2055:3
Indice ==  2
VM2055:2

item  ==  Wardrobe
VM2055:3
Indice ==  3
undefined
function printValue(parametros){
    console.log('sem retorno',parametros)
}
undefined
printValue('name')
VM2222:2 sem retorno name
undefined
printValue('name','dkkla')
VM2222:2 sem retorno name
undefined
printValue(['one','two','three'])
VM2222:2 sem retorno (3) ['one', 'two', 'three']
undefined
printValue(function(){})
VM2222:2 sem retorno ƒ (){}
undefined
printValue(function(){
    console.log('something')
})
VM2222:2 sem retorno ƒ (){
    console.log('something')
}
undefined
function funk(params) {
    return params
}
undefined
printValue('value is here')
VM2222:2 sem retorno value is here
undefined
funk(223)
223
const uniqueNumbe = funk(3432)
undefined
uniqueNumbe
3432
function recebeParamentro( parametroAqui){
    // uma vez recebido o paramentro , faz um console
    console.log('paramentro passado e == ',parametroAqui)
}
undefined
recebeParamentro('kdklajdf')
VM2785:3 paramentro passado e ==  kdklajdf
undefined
function Soma(receberRetornoSoma){
    let a,b = 10,3;
    let some = a + b

}
VM2929:2 Uncaught SyntaxError: Unexpected number
function Soma(receberRetornoSoma){
    let a=10, b = 3;
    let some = a + b

}
undefined
function Soma(receberRetornoSoma){
    let a=10, b = 3;
    let some = a + b
    return some

}
undefined
var somaa = Soma()
undefined
somaa
13
function Soma(receberRetornoSoma){
    let a=10, b = 3;
    let some = a + b
    return recebeParamentro(some)

}
undefined
 Soma(recebeParamentro)
VM2785:3 paramentro passado e ==  13
undefined
function recebeParamentro( parametroAqui){
    // uma vez recebido o paramentro , faz um console
    console.log('paramentro passado e == ',parametroAqui)
}
undefined
function Soma(fun){
    let a=10, b = 3;
    let some = a + b
    return fun(some)

}
undefined
Soma(recebeParamentro)
VM3138:3 paramentro passado e ==  13
undefined
(parametros)=>{
    console.log('232')
}
(parametros)=>{
    console.log('232')
}
const f = (parametros)=>{
    console.log('232')
}
undefined
f()
VM3275:2 232
undefined
typeof([])
'object'
typeof(Array())
'object'
Array.prototype.repita = ( param)=> {

    return param(this)
}
( param)=> {

    return param(this)
}
['one','two'].repita( (value) => value)
Window {window: Window, self: Window, document: document, name: 'somehting', location: Location, …}
.prototype.repita = ( param)=> {

    return param(this)
}
VM3662:1 Uncaught SyntaxError: Unexpected token '.'
const arr = [1,2,2,3];
undefined
Array.prototype.repita = function(param){
    for (let c of this ){
        param(c)
    }
}
ƒ (param){
    for (let c of this ){
        param(c)
    }
}
var arr = new Array('One','two')
VM4003:1 Uncaught SyntaxError: Identifier 'arr' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM4003:1
var arr2 = new Array('One','two')
undefined
arr2
(2) ['One', 'two']
arr2.repita( (value)=>console.log(value))
