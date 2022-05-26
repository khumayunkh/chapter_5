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

// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sum = 0 
// for(let element of data){
//     sum += element
// }

// let y = 8
// let i
// for(i=0; i<y; i++){
//     if(i == 2){
//         continue
//     }
//     console.log(sum += i) 
//     // console.log(i)
// }

// for(i=0; i<y;i++){
//     if(i==3){
//         break
//     }
//     console.log(i) // 0, 1, 2
// }

// console.log(sum)

// console.log(sum)
// let element = 0
// while(element<10){
//     element++
//     console.log(element)
// }

// let obj = {
//     name: 'Humoyun',
//     age: 19
// }
// for(b in obj){
//     console.log(obj[b])
//     obj.age+=1
// }

// let a = 10
// try{
//     if(a>5){
//         console.log('ok')
//     }
// }catch(er){
//     console.log(er)
// }

// for(let i=0; i<=a; i++){
//     b += i
// }

// while(a>1){
//     b *= a
//     a--
// }

// for(let i=1; i<=a;i++){
//     b *=i
// }
// console.log(b)

// try{
//     for(i=1; i>=a;i++){
//         b *=i
//     }
//     console.log(b)
// }catch{
//     console.log('some error')
// }

// for(let i=0; i<a;i++){
//     if(i===5){
//         continue;
//     }
//     if(i===7){
//         break;
//     }
//     console.log(i)
// }
// let i=0
// while(i<a){
//     i++
//     if(i===5){
//         continue;
//     }
//     if(i===7){
//         break;
//     }
//     console.log(i)
// }

function sum(a){
    return function sum2(b){
        return function sum3(c){
            d = a+b+c
            return console.log(d)
        }
    }
}
sum(2)(3)(4)
let a = [2, 3, 4, 6, 5]
let s = 0
for(array of a){
    s += array
}

console.log(s)
let t = 1 
for(let i=1; i<=s; i++){
    t *= i
}
console.log(t)
let j = 1
while(s>1){
    j*=s;
    s--
}
console.log(j)

// do{
//     a++
//     console.log(a) //5
// }while(a<3){
//     a--
//     console.log(a) //4
// }





