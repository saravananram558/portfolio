document.getElementById('updateButton').style.display = "none";

//get operation
function getData(){
    fetch('http://localhost:4000/getData')
    .then(response => response.json())
    .then(json =>{
        html =""
        json.forEach(e => {
            html += `<tr>
            <td>${e.name}</td>
            <td>${e.age}</td>
            <td>${e.email}</td>
            <td>${e.message}</td>
            <td><input type="button" class='btn' value="Edit" onclick="editData(${e.id})">
            <input type="button" class='btn' value="Delete" onclick="deleteData(${e.id})"></td>
           </tr>`
        });
        document.getElementById('tbody').innerHTML=html;
    })
}
getData();
// ------------------------------------------------------------------
//edit function
function editData(id) {
    fetch('http://localhost:4000/getUser/' +id)
    .then(response => response.json())
    .then(json => {
        json.forEach(e => {
            console.log(e, "editing")
            document.getElementById("name").value = e.name,
            document.getElementById("age").value = e.age,
            document.getElementById("email").value = e.email,
            document.getElementById("message").value = e.message,
            document.getElementById('hiddenId').value = e.id,
            document.getElementById("updateButton").style.display = "block";
            document.getElementById("addButton").style.display = "none";
        })
    })
    getData();
}
//--------------------------------------------------------------------------------------
//delete function
function deleteData(id){
    fetch('http://localhost:4000/deleteData/' +id, {
        method: 'PUT',
        body: JSON.stringify({
            name:document.getElementById("name").value,
            age:document.getElementById("age").value,
            email:document.getElementById("email").value,
            message:document.getElementById("message").value,
        }),
    })
    .then((response)=>response.json())
    .then((json)=>{
        console.log(json)
        getData();
    })
}
// ----------------------------------------------------------------------------------------
//Post operation
function newUser(){
    fetch('http://localhost:4000/postData', {
        method: 'POST',
        body: JSON.stringify({
            name:document.getElementById("name").value,
            age:document.getElementById("age").value,
            email:document.getElementById("email").value,
            message:document.getElementById("message").value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response)=>response.json())
    .then((json)=>{
        console.log(json)
        getData();
    })
}
// ----------------------------------------------------------------------------------------------------
//update operation
function updateUser() {
    console.log("updated");
    let id = document.getElementById("hiddenId").value
    fetch(`http://localhost:4000/putData/` + id, {
        method: 'PUT',
        body: JSON.stringify({
            name: document.getElementById("name").value,
            age:document.getElementById("age").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            getData();
            document.getElementById('updateButton').style.display = "none";
            document.getElementById('addButton').style.display = "block";
            
        });
        
}

