// function revnum(num){
//     let num1 = num.reverse()
//     console.log(num1)
// }

function revnum(num){
    let x=num.length
    let a=parseInt(x/2)
    for(z=0;z<=a;z++){
        let y = num[(x-1)-z]
        num[(x-1)-z]=num[z]
        num[z] = y  
    }
    console.log(num)
}

let numbers = [1,2,3,5,6,12,2,3,43,5,56]
revnum(numbers)