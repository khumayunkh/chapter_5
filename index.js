console.log('hello')
// if

let x=y=2;
let z = 3;

if(x===y){
    if(z===3){
        console.log('z = 3') // true
    }else{
        console.log("z != 3") // false
    }
    console.log('x = y') // true
}else{
    console.log('x != y') //false
}

if(x===1){
    console.log('x = 1')
}else if(x===2){
    console.log('x = 2')
}else{
    console.log('error')
}

switch(x){
    case 1:{
        console.log('x == 1')
        break
    };
    case 3:{
        console.log('x == 3')
        break
    }
    case 2:{
        console.log('x == 2')
        break
    }
    default:{
        break
    }
}


