//arrays are like a cell and displayed as rows
let myArray = ["string",10,true];

myArray.push(20);
myArray.push("jason")//insert item at the end
myArray.unshift(false);//insert item at the beggining

myArray.pop();//to remove last item
myArray.shift();//remove the first item
myArray.splice(3,1);//remove a specific position #3 is the start #1 is the the item you delete
document.write(myArray[0]);
document.write(myArray[1]);
document.write(myArray[2]);


//loop demo
for(let i=0;i<=10;i++){
    console.log(i);
}
//grade calculation using names
let studentNames = ["michael","sam","jason","jesenia","prof"];
let studentGrades = [3.9,4.0,3.8,3.8,.9];
let total =0;
for(let i=0;i<studentGrades.length;i++){
    document.write(`<p>student ${i+1}: ${studentNames[i]}, ${studentGrades[i]} </p>`);
    total=total + studentGrades[i];
}


console.log(total);