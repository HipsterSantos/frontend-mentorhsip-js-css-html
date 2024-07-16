try{

    console.log(obj.height)
    }catch(erro){
    
     console.log('o erro foi ',erro)
    }
    VM33:6 o erro foi  ReferenceError: obj is not defined
        at <anonymous>:3:13
    undefined
    try{
        throw 'This is the erro'
    
    }catch(erro){
    
     console.log('o erro foi ',erro)
    }
    VM112:6 o erro foi  This is the erro
    undefined
    try{
    
    console.log(obj.height)
    }catch(erro){
    
     console.log('o erro foi ',erro)
    }
    VM117:6 o erro foi  ReferenceError: obj is not defined
        at <anonymous>:3:13
    undefined
    var a = 10, b = 17;
    undefined
    try{
        if ( (a+b) == 27 ){throw 'Essa somma tem um previlegio a mais '}
    
    }catch(erro){
    
     console.log('o erro foi ',erro)
    }
    VM244:6 o erro foi  Essa somma tem um previlegio a mais 
    undefined