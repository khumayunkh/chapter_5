console.log('hello')
// if

// let x=y=2;
// let z = 3;

// while(x<=10){
//     console.log(`x = ${x}`)
//     x++
// }
// if(x===y){
//     if(z===3){
//         console.log('z = 3') // true
//     }else{
//         console.log("z != 3") // false
//     }
//     console.log('x = y') // true
// }else{
//     console.log('x != y') //false
// }

// if(x===1){
//     console.log('x = 1')
// }else if(x===2){
//     console.log('x = 2')
// }else{
//     console.log('error')
// }

// switch(x){
//     case 1:{
//         console.log('x == 1')
//         break
//     };
//     case 3:{
//         console.log('x == 3')
//         break
//     }
//     case 2:{
//         console.log('x == 2')
//         break
//     }
//     default:{
//         break
//     }
// }

// let i = 0
// let j = 10     
// function sum(i,j){ 
//     let summ = 0
//     for(i = 0, j = 2; j<10; i++, j++){
//         sum = i + j
//     }
//     console.log(`i + j = ${sum}`) 
// }

// sum(i,j)

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = 0 
for(let element of data){
    sum += element
}

console.log(sum)
let element = 0
while(element<10){
    element++
    console.log(element)
}

let obj = {
    name: 'Humoyun',
    age: 19
}
for(b in obj){
    console.log(obj[b])
    obj.age+=1
}




