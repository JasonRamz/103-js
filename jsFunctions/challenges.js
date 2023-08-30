//function sum(a,b){
    //let sum = a+b;
    //console.log(sum);

//}
//sum(3,5);//8

//we add the calculation of the prices code
function addItem() {
    let itemName = prompt("Enter item Name:");
    let Price = Number(prompt("Enter the price:"));
    let Tax = Number(prompt("Enter the tax:"));

    total += calculatePrice(itemName, Price, Tax);
    console.log(total);
}

function calculatePrice(itemName, Price, Tax){
    //calculate to get full price
    let fullPrice = Price + Tax;
    
    //displayer
    let itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
        <div>
            <p>Name: ${itemName}</p>
            <p>Price: ${Price}</p>
            <p>Tax amount: ${Tax}</p>
            <p>Full Price: ${fullPrice}</p>
        </div>
    `;
    document.getElementById("itemPrice").appendChild(itemDiv);

    return fullPrice; //return the calculated full price
}

let total = 0; // Initialize total
