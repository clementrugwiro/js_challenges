function checkpal(txt){
   let spl = txt.split("")
//    console.log(spl)
   let rvs =spl.reverse()
//    console.log(rvs)
let x= true;
let y =txt.length
for(z=0;z<y;z++){
    if(txt[z]!=rvs[z]){
        x=false
    }
}
if(x==false){
    console.log("phrase is not palindrome")
}
else{
    console.log("palindrome")
}
}
greet="Step on no petS"

checkpal(greet)