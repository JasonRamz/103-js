//a function has the parentheris with in the code
function greet(name, age){//this the step 1
    //let age = 26;
    return "Hello" + name + "!" + age;// you can add age as well
}

    console.log(greet(" Eric", 26));//this is step 2

    //creation of the function
function multiplyThree(num){
    let mult = num*3
    return mult;

    }

    //run the function
    console.log(multiplyThree(10));

    function sum(){
        console.log(10+10);
     }
     sum();
     
     let sum2 = function(){
        console.log(3+3);
     }
     sum2();

     let total =0;

function addCart(price){
   return total += price;
}

total = addCart(200);
total = addCart(400);
total = addCart(600);
console.log(total);