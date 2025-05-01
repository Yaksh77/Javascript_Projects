let btnAdd = document.querySelector("#btnAdd");
let btnUpdate = document.querySelector("#btnUpdate");

let data = [
    // {
    //     id:1,
    //     name:"Yaksh",
    //     email:"yaksh847@gmail.com",
    // },
    // {
    //     id:2,
    //     name:"Harsh",
    //     email:"harsh847@gmail.com",
    // }
];

function readData(){
    localStorage.setItem("object",JSON.stringify(data));
    let tableData = document.querySelector(".data_table");
    
    let object = localStorage.getItem("object");
    let objectData = JSON.parse(object);
    let elements = "";
    objectData.map((record)=>{
        elements +=`<tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td><button class="btnEdit" onClick = {edit(${record.id})}>Edit</button></td>
        <td><button class="btnDelete" onClick = {delet(${record.id})}>Delete</button></td>
        </tr>`
    });
    
    tableData.innerHTML = elements;
}

function delet(id){
    data =  data.filter((record)=>record.id != id);
    console.log(data);
    readData();
}

btnAdd.addEventListener("click",()=>{
     document.querySelector(".create_form").style.display = "block";
     document.querySelector(".add_div").style.display = "none";

});

function create(){
    let name = document.querySelector(".name").value; 
    let email = document.querySelector(".email").value; 
  
        let newObj = {
            id:data.length + 1,
            name:name,
            email:email
        }
        data.push(newObj);


    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";

    readData();
    
}

function edit(id){
    document.querySelector(".update_form").style.display = "block";
    let obj = data.find((rec)=> rec.id === id);
    document.querySelector(".uname").value = obj.name;
    document.querySelector(".uemail").value = obj.email;
    document.querySelector(".id").value = obj.id;
}

btnUpdate.addEventListener("click",()=>{
    let id = parseInt( document.querySelector(".id").value);
    let name = document.querySelector(".uname").value;
    let email = document.querySelector(".uemail").value;

    let index = data.findIndex(rec => rec.id === id);
    data[index] = {id,name,email};
    readData();

    document.querySelector(".update_form").style.display = "none";
});


