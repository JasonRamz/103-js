var products = [
    { name: "Smartphones", category: "electronics", price: "$350" },
    { name: "Laptop", category: "electronics", price: "$600" },
    { name: "Headphones", category: "electronics", price: "$55" },
    { name: "PC", category: "electronics", price: "$1000" },
    { name: "Desktop", category: "electronics", price: "$1600" },
    { name: "Handsoap", category: "house Items", price: "$7" },
    { name: "Shampoo", category: "bathroom", price: "$20" },
    { name: "Conditioner", category: "bathroom", price: "$15" },
    { name: "Soap bar", category: "bathroom", price: "$5" },
    { name: "Scrubs", category: "bathroom", price: "$10" },
    { name: "T-shirts", category: "clothing", price: "$7" },
    { name: "Pants", category: "clothing", price: "$10" },
    { name: "Shorts", category: "clothing", price: "$5" }
];

var tbody = document.getElementById("productTableBody");

products.forEach(products=>{
    var row = document.createElement("tr");
    
    var nameCell= document.createElement("td");
    nameCell.textContent = products.name;
    row.appendChild(nameCell);

    var categoryCell = document.createElement("td");
    categoryCell.textContent = products.category;
    row.appendChild(categoryCell);

    var priceCell = document.createElement("td");
    priceCell.textContent= products.price;
    row.appendChild(priceCell);

    tbody.appendChild(row);

    console.log("Created Row:  ${product.name} - ${product.category} - ${price}");
});