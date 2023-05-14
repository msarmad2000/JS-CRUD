//CRUD create Read Update Delete
// Global variables
var row = null;



function Submit() {
    // Retreive Data Function
    `     <fieldset>
    <legend class="text-primary"><h2>Data From Local Data Stores</h2></legend>
    <table class="table table-dark text-primary" id="table" >
        <thead class="thead-dark">
        <tr>
            <td>Name</td>
            <td>Job</td>
            <td>Experience</td> 
            <td>Action</td>  
        </tr>
        </thead>    
    </table>
 </fieldset>`
    var dataEntered = retrieveData();
    console.log(dataEntered);
    if( dataEntered == false){
        msg.innerHTML = "Pleaase Enter data in Missing Feilds";
    }
    else{
    var readdata = datafromlocalstorage(dataEntered);
    if ( row== null ) {
        insert(readdata);
        msg.innerHTML = "Data Inserted";
    }
    else{
    Update();
    msg.innerHTML = "Data Updated";
}
}
}
// retrieving data from font
function retrieveData(){    
    var name = document.getElementById("name").value;
    var job =document.getElementById("job").value ;
    var exp =document.getElementById("exp").value;
    var arr=[name,job,exp];
    
    if( arr.includes("") )
    {return false;}
    else{
    return arr;}
    
}
// data in local storage
function datafromlocalstorage(dataEntered){
// storing data in local storage
var n= localStorage.setItem("Name" , dataEntered[0]);
var j=localStorage.setItem("Job",dataEntered[1]);
var e=localStorage.setItem("Experience",dataEntered[2]);

// getting values from local storage
var n1= localStorage.getItem("Name" , n);
var j1= localStorage.getItem("Job" , j);
var e1=localStorage.getItem("Experience",e);
var arr = [n1,j1,e1];
return arr;

}

// insert function
function insert(readdata){
var row = table.insertRow();
row.insertCell(0).innerHTML = readdata[0];
row.insertCell(1).innerHTML = readdata[1];
row.insertCell(2).innerHTML = readdata[2];
row.insertCell(3).innerHTML = `<button onclick = edit(this) id="edit">Edit</button>
<button onclick = remove(this) id="delete">Delete</button>`;
}
// edit 
function edit(td){
    row= td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("job").value = row.cells[1].innerHTML;
    document.getElementById("exp").value = row.cells[2].innerHTML;
}
function Update(){
    row.cells[0].innerHTML =  document.getElementById("name").value;
    row.cells[1].innerHTML =  document.getElementById("job").value;
    row.cells[2].innerHTML =  document.getElementById("exp").value;
    row = null;
}
//delete
function remove(td){
    var ans =  confirm("Are You Sure You want to Delete this record?");
   if( ans== true ){
    row = td.parentElement.parentElement;
   document.getElementById("table").deleteRow(row.rowIndex);
    msg.innerHTML = "Data Deleted";}
    else {
        msg.innerHTML = "You Didnot allow to delete data";}
}
  


function Reset(){
    alert("This is Reset Function");

}