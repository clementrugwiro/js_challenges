function sortprime(arr){
    let x= arr.length
    let arr1 =[]
    let y=0  
    let z=true
for(let i=0;i<x;i++){
    // console.log(arr[i])
    for (let p = 2; p < arr[i]; p++) {
        if (arr[i] % p == 0) {
            z = false
            break  
        }
    }
  if(z==true){
    console.log(arr[i])
    arr1[y]=arr[i]
    y=y+1
  }
  z=true
}
console.log(arr1)
}
let num = [1,2,3,4,5,6,7,8,9]

sortprime(num)