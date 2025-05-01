const obj = {
    name : "Yaksh",
    age : 23,
    class : 'A++',
    marks : 99,
    city : "Ahemdabad",
    state : "Gujarat"
}

for(let idx in obj){
    console.log(idx,obj[idx]);
}

for(const [key,value] of Object.entries(obj)){
    console.log(key,value);
}

