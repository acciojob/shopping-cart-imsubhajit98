// let itemInput = document.getElementById('item-name-input');
// let priceInput = document.getElementById('item-price-input');

// let button = document.getElementById('add');
// let table1 = document.getElementById('table');
// let total = document.getElementById('total');

// button.addEventListener('click', addItem);

// let priceArr = [];
// function addItem() {
//     let item = itemInput.value;
//     let price = priceInput.value;
//     let sum = 0;
	
//     if (item !== '' && price !== "") {
//         // you can start items to the screen
//         let row = table1.createElement('tr');
//         priceArr.push(parseInt(price));
//         // console.log(priceArr);
//         row.innerHTML = `<td>${item} </td> <td>${price}</td> `
        
//         for (let i = 0; i < priceArr.length; i++) {
//             sum += priceArr[i];
//         }
        
//         // console.log(sum);
//         table.append(row);
//         total.innerText = sum;
        
//         itemInput.value = '';
//         priceInput.value = '';
//     }
// }
// button.addEventListener('click', addItem)

var itemName = document.getElementById("item-name-input");
var itemQuantity = document.getElementById("item-qty-input");
var itemPrice = document.getElementById("item-price-input");
 
var tbody = document.querySelector("tbody");
 
var grandTotal = document.getElementById("total");
var grand_total = 0;
 
var addItem = document.querySelector("#add");
 
addItem.addEventListener("click", (event) => {
  event.preventDefault();
 
  let newRow = document.createElement("tr");
 
  let name = document.createElement("td");
  name.innerText = itemName.value;
  name.classList.add("item");
  newRow.append(name);
 
  let price = document.createElement("td");
  price.innerText = itemPrice.value;
  newRow.append(price);
  price.classList.add("price");
 
  let quantity = document.createElement("td");
  quantity.innerText = itemQuantity.value;
  newRow.append(quantity);
 
  if (itemName.value && itemQuantity.value && itemPrice.value) {
    let total = document.createElement("td");
    total.innerText = itemPrice.value * itemQuantity.value;
    newRow.append(total);
 
    tbody.append(newRow);
 
    grand_total += Number(total.innerText);
    grandTotal.innerHTML = "Grand Total: ₹ " + grand_total;
  }
 
  itemName.value = "";
  itemQuantity.value = "";
  itemPrice.value = "";
});
 

