function sortnum(arr){
    let x= arr.length
    let arr1 =[]
    let y=0  
    let z=false
for(let i=0;i<x;i++){
    // console.log(arr[i])
    for (let p = 2; p < arr[i]; p++) {
        if (arr[i] % p == 0) {
            z = true
            break  
        }
    }
  if(z==true){
    arr1[y]=arr[i]
    y=y+1
  }
  z=false
}
console.log(arr1)

    for( let z=0;z<x;z++){
     
        for( let y=z+1;y<x;y++){
            if(arr1[z]<arr1[y]){
                let a =arr1[y]
                arr1[y]=arr1[z]
                arr1[z]=a
            }
        }
    }
    console.log(arr1)
}

let num = [9,5,7,2,4,1,8,2,12,40,4,6,12,30,14]
sortnum(num)