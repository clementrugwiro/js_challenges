let activities = ['Patrick wyne, 30', 'lil wyne, 32','Eric mimi, 21','Dodos deck, 21','Alian Dwine, 22','Patrick wyne, 33','Patrick wyne, 100','Patrick wyne, 40'];

let arr1 = []
function obj(arr){
    let a=arr.length
    for(w=0;w<a;w++){
        arr1[w]=arr[w].split(" ")
    }
    let perso={}
    function person( name,secondname,age){
      perso[name] ={   
        "secondname":secondname,
        "age":age
     }
    }
    for(w=0;w<a;w++){
     person(arr1[w][0],arr1[w][1],arr1[w][2])  
     // console.log(pers.name+':{secondname:'+pers.secondname+" age:"+pers.age+"}")      
    }
    console.log(perso)
    
}

obj(activities)