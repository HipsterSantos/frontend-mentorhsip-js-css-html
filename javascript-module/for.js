let elements = document.children

/*
undefined
elements
HTMLCollection [html]0: htmllength: 1[[Prototype]]: HTMLCollection
*/

let elements = document.children.hmtl.children
// VM261:1 Uncaught TypeError: Cannot read properties of undefined (reading 'children')
//     at <anonymous>:1:39
// (anonymous) @ VM261:1

let elements = document.children
// undefined
var body = elements[0].children[1]
// undefined
var bodyChildren = body.children
// undefined
/* bodyChildren
HTMLCollection(3) [main.container, script, script]0: main.container1: scriptaccessKey: ""ariaAtomic: nullariaAutoComplete: nullariaBrailleLabel: nullariaBrailleRoleDescription: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaInvalid: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullasync: falseattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}attributionSrc: ""autocapitalize: ""autofocus: falsebaseURI: "http://127.0.0.1:5500/javascript-module/menu.html"blocking: DOMTokenList [value: '']charset: ""childElementCount: 0childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: '']className: ""clientHeight: 0clientLeft: 0clientTop: 0clientWidth: 0contentEditable: "inherit"crossOrigin: nulldataset: DOMStringMap {}defer: falsedir: ""draggable: falseeditContext: nullelementTiming: ""enterKeyHint: ""event: ""fetchPriority: "auto"firstChild: textfirstElementChild: nullhidden: falsehtmlFor: ""id: ""inert: falseinnerHTML: "\n        \n        const menu =  {\n            logo: '',\n            texts: [\n                'Comprar',\n                'About',\n                'Contacts',\n                'shoppinhg',\n                'gallery'\n            ],\n            buttons:[\n            {\n                'login': {\n                    color: 'white',\n                    bg: 'yellow',\n                    p: '1em 3em'\n                },\n                'profile': {\n                    avatar: './img/avatar',\n                    width: 80,\n                    height: 60\n                },\n                'Increver-se':{\n                    color: 'white',\n                    bg: 'red',\n                    p: '1em 3em'\n                }\n            }\n            \n            ]\n        }\n        const isLogged = true;\n\n        const logoContainer = document.getElementsByClassName('logo');\n        const navTextContainer = document.getElementsByClassName('textos')[0];\n        \n        const buttonContainer = document.querySelector('.buttons');\n        const button = document.createElement('button')\n        const btns = Object.keys(menu.buttons[0])\n\n        for (let start = 0; start <= btns.lenght-1; start+=1 ){\n            console.log('reached here',)    \n            \n        }\n\n\n        for (let initial = 0 ;initial <=  menu.texts.length-1; initial+=1){\n            \n            const li = document.createElement('li');\n            li.textContent = menu.texts[initial];\n            navTextContainer.appendChild(li)\n        }\n        \n\n\n\n\n    "innerText: "\n        \n        const menu =  {\n            logo: '',\n            texts: [\n                'Comprar',\n                'About',\n                'Contacts',\n                'shoppinhg',\n                'gallery'\n            ],\n            buttons:[\n            {\n                'login': {\n                    color: 'white',\n                    bg: 'yellow',\n                    p: '1em 3em'\n                },\n                'profile': {\n                    avatar: './img/avatar',\n                    width: 80,\n                    height: 60\n                },\n                'Increver-se':{\n                    color: 'white',\n                    bg: 'red',\n                    p: '1em 3em'\n                }\n            }\n            \n            ]\n        }\n        const isLogged = true;\n\n        const logoContainer = document.getElementsByClassName('logo');\n        const navTextContainer = document.getElementsByClassName('textos')[0];\n        \n        const buttonContainer = document.querySelector('.buttons');\n        const button = document.createElement('button')\n        const btns = Object.keys(menu.buttons[0])\n\n        for (let start = 0; start <= btns.lenght-1; start+=1 ){\n            console.log('reached here',)    \n            \n        }\n\n\n        for (let initial = 0 ;initial <=  menu.texts.length-1; initial+=1){\n            \n            const li = document.createElement('li');\n            li.textContent = menu.texts[initial];\n            navTextContainer.appendChild(li)\n        }\n        \n\n\n\n\n    "inputMode: ""integrity: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: nulllocalName: "script"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: scriptnextSibling: textnoModule: falsenodeName: "SCRIPT"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 0offsetLeft: 0offsetParent: nulloffsetTop: 0offsetWidth: 0onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforeinput: nullonbeforematch: nullonbeforepaste: nullonbeforetoggle: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontentvisibilityautostatechange: nulloncontextlost: nulloncontextmenu: nulloncontextrestored: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonscrollend: nullonsearch: nullonsecuritypolicyviolation: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonslotchange: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<script>\n        \n        const menu =  {\n            logo: '',\n            texts: [\n                'Comprar',\n                'About',\n                'Contacts',\n                'shoppinhg',\n                'gallery'\n            ],\n            buttons:[\n            {\n                'login': {\n                    color: 'white',\n                    bg: 'yellow',\n                    p: '1em 3em'\n                },\n                'profile': {\n                    avatar: './img/avatar',\n                    width: 80,\n                    height: 60\n                },\n                'Increver-se':{\n                    color: 'white',\n                    bg: 'red',\n                    p: '1em 3em'\n                }\n            }\n            \n            ]\n        }\n        const isLogged = true;\n\n        const logoContainer = document.getElementsByClassName('logo');\n        const navTextContainer = document.getElementsByClassName('textos')[0];\n        \n        const buttonContainer = document.querySelector('.buttons');\n        const button = document.createElement('button')\n        const btns = Object.keys(menu.buttons[0])\n\n        for (let start = 0; start <= btns.lenght-1; start+=1 ){\n            console.log('reached here',)    \n            \n        }\n\n\n        for (let initial = 0 ;initial <=  menu.texts.length-1; initial+=1){\n            \n            const li = document.createElement('li');\n            li.textContent = menu.texts[initial];\n            navTextContainer.appendChild(li)\n        }\n        \n\n\n\n\n    </script>"outerText: "\n        \n        const menu =  {\n            logo: '',\n            texts: [\n                'Comprar',\n                'About',\n                'Contacts',\n                'shoppinhg',\n                'gallery'\n            ],\n            buttons:[\n            {\n                'login': {\n                    color: 'white',\n                    bg: 'yellow',\n                    p: '1em 3em'\n                },\n                'profile': {\n                    avatar: './img/avatar',\n                    width: 80,\n                    height: 60\n                },\n                'Increver-se':{\n                    color: 'white',\n                    bg: 'red',\n                    p: '1em 3em'\n                }\n            }\n            \n            ]\n        }\n        const isLogged = true;\n\n        const logoContainer = document.getElementsByClassName('logo');\n        const navTextContainer = document.getElementsByClassName('textos')[0];\n        \n        const buttonContainer = document.querySelector('.buttons');\n        const button = document.createElement('button')\n        const btns = Object.keys(menu.buttons[0])\n\n        for (let start = 0; start <= btns.lenght-1; start+=1 ){\n            console.log('reached here',)    \n            \n        }\n\n\n        for (let initial = 0 ;initial <=  menu.texts.length-1; initial+=1){\n            \n            const li = document.createElement('li');\n            li.textContent = menu.texts[initial];\n            navTextContainer.appendChild(li)\n        }\n        \n\n\n\n\n    "ownerDocument: documentparentElement: bodyparentNode: bodypart: DOMTokenList [value: '']popover: nullprefix: nullpreviousElementSibling: main.containerpreviousSibling: textreferrerPolicy: ""role: nullscrollHeight: 0scrollLeft: 0scrollTop: 0scrollWidth: 0shadowRoot: nullslot: ""spellcheck: truesrc: ""style: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "SCRIPT"text: "\n        \n        const menu =  {\n            logo: '',\n            texts: [\n                'Comprar',\n                'About',\n                'Contacts',\n                'shoppinhg',\n                'gallery'\n            ],\n            buttons:[\n            {\n                'login': {\n                    color: 'white',\n                    bg: 'yellow',\n                    p: '1em 3em'\n                },\n                'profile': {\n                    avatar: './img/avatar',\n                    width: 80,\n                    height: 60\n                },\n                'Increver-se':{\n                    color: 'white',\n                    bg: 'red',\n                    p: '1em 3em'\n                }\n            }\n            \n            ]\n        }\n        const isLogged = true;\n\n        const logoContainer = document.getElementsByClassName('logo');\n        const navTextContainer = document.getElementsByClassName('textos')[0];\n        \n        const buttonContainer = document.querySelector('.buttons');\n        const button = document.createElement('button')\n        const btns = Object.keys(menu.buttons[0])\n\n        for (let start = 0; start <= btns.lenght-1; start+=1 ){\n            console.log('reached here',)    \n            \n        }\n\n\n        for (let initial = 0 ;initial <=  menu.texts.length-1; initial+=1){\n            \n            const li = document.createElement('li');\n            li.textContent = menu.texts[initial];\n            navTextContainer.appendChild(li)\n        }\n        \n\n\n\n\n    "textContent: "\n        \n        const menu =  {\n            logo: '',\n            texts: [\n                'Comprar',\n                'About',\n                'Contacts',\n                'shoppinhg',\n                'gallery'\n            ],\n            buttons:[\n            {\n                'login': {\n                    color: 'white',\n                    bg: 'yellow',\n                    p: '1em 3em'\n                },\n                'profile': {\n                    avatar: './img/avatar',\n                    width: 80,\n                    height: 60\n                },\n                'Increver-se':{\n                    color: 'white',\n                    bg: 'red',\n                    p: '1em 3em'\n                }\n            }\n            \n            ]\n        }\n        const isLogged = true;\n\n        const logoContainer = document.getElementsByClassName('logo');\n        const navTextContainer = document.getElementsByClassName('textos')[0];\n        \n        const buttonContainer = document.querySelector('.buttons');\n        const button = document.createElement('button')\n        const btns = Object.keys(menu.buttons[0])\n\n        for (let start = 0; start <= btns.lenght-1; start+=1 ){\n            console.log('reached here',)    \n            \n        }\n\n\n        for (let initial = 0 ;initial <=  menu.texts.length-1; initial+=1){\n            \n            const li = document.createElement('li');\n            li.textContent = menu.texts[initial];\n            navTextContainer.appendChild(li)\n        }\n        \n\n\n\n\n    "title: ""translate: truetype: ""virtualKeyboardPolicy: ""writingSuggestions: "true"[[Prototype]]: HTMLScriptElement(...)2: scriptlength: 3[[Prototype]]: HTMLCollection8
*/

for (let  initial in bodyChildren){

    console.log(`body has ${initial}`)
    
}
// VM871:3 body has 0
// VM871:3 body has 1
// VM871:3 body has 2
// VM871:3 body has length
// VM871:3 body has item
// VM871:3 body has namedItem
// undefined
// bodyChildren
// HTMLCollection(3) [main.container, script, script]

var arr  = ['login','log out ', 'singup','shoppping', 'items']
// undefined
var objj = {
    "login": true,
}
undefined
var objj = {
    "login": true,
    "signup": false,
    "hasChild": false
}
undefined
for (let  initial in arr){

    console.log(`body has ${initial}`)
    
}
// VM1111:3 body has 0
// VM1111:3 body has 1
// VM1111:3 body has 2
// VM1111:3 body has 3
// VM1111:3 body has 4
// undefined
for (let  initial in arr){

    console.log(`body has ${arr[initial]}`)
    
}
// VM1125:3 body has login
// VM1125:3 body has log out 
// VM1125:3 body has singup
// VM1125:3 body has shoppping
// VM1125:3 body has items
// undefined
for (let  initial in objj{

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
// VM1325:3 body has 0
// VM1325:3 body has 1
// VM1325:3 body has 2
// undefined
for (let  initial of ['primeiro','segundo','terceiro']){

    console.log(`body has ${initial}`)
    
}
VM1332:3 body has primeiro
VM1332:3 body has segundo
VM1332:3 body has terceiro
undefined
let itemsToFilter = ['milker','moloko','druk','moy','done']
undefined
itemsToFilter.forEach( (item,index)=>{
    console.log(item)
}   )
VM1590:2 milker
VM1590:2 moloko
VM1590:2 druk
VM1590:2 moy
VM1590:2 done
undefined
itemsToFilter.forEach( (item,index)=>{
    console.log(item,' = ',index)
}   )
VM1673:2 milker  =  0
VM1673:2 moloko  =  1
VM1673:2 druk  =  2
VM1673:2 moy  =  3
VM1673:2 done  =  4
undefined