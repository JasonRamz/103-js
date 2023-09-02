let students =[];

function register(){
    // get the value from the input
    let student= document.getElementById("txtName").value;
     // validate if the input was not empty
    if(student==""){
        alert("Please add a student Name");
    }else{
        students.push(student);
        console.log(student.length);
        // push the new value to the array
    // clear the input    
        document.getElementById("txtName").value="";
    // display the student on the list  
        display();
    }
}

function display(){
    let tmp="";

    // travel the array(for)
    for(let i=0;i<students.length;i++){
    // create the html tmp
    tmp+=`
    <li class="box-shadow">${students[i]}</li>
    `;
    }
    // insert the tmp into the html
    document.getElementById("studentList").innerHTML=tmp;
    
}