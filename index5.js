function numc(arr1){
    let y =arr1.length
    let count=1
    for(let x=0;x<y;x++){
        for( let z=x+1;z<y;z++){
            if(arr1[x]===arr1[z]){
                count = count+1
            }
        }
        if(count>y/2){
            console.log("oncurrence : "+count+" length : "+y)
            console.log(arr1[x]+" is our optimizer")
            break
        }
        count=1
    }
}b

let numb = [3,1,3,4,4,5,3,5,3,3,3,6,3]
numc(numb)