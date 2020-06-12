var items = [];

let createItem = () => {
    name = document.querySelector("#name").value;
    quantity = document.querySelector("#quantity").value;
    price = document.querySelector("#price").value;

    var item = {
        name: name,
        quantity: quantity,
        price: price,
        id: 1 + Math.random(),
        sum: price * quantity,
    };
    items.push(item);
    console.log(item);
    event.preventDefault(false);
    loadData();
};

// let itemDisplay = document.querySelector("#item-display");
let loadData = () => {
    itemDisplay.innerHTML = "";
    items.forEach(
        (item) =>
            (itemDisplay.innerHTML += `<div class="item"> <div class="table table-body d-flex flex-1">
        <tr>
      <div class="col flex-4 text-center">${item.name}</div>
      <div class="col flex-1 text-left">${item.quantity}</div>
      <div class="col flex-1 text-center">${item.price}</div>
      <div class="col flex-2 text-right">${item.sum}
      </div>
      <div class="col flex-3 text-center">
      <button class="delbtncolor" onclick="deleteItem(${item.id})">
      Delete </button>
      <button onclick="editItem(${item.id})"> Edit</button></<div>
      </tr>
      </div>`)
    );
    totalBills();
};

let deleteItem = (id) => {
    console.log(id);
    let x = confirm("Are you sure you want to Delete the item?");
    if (x) {
        items = items.filter((item) => item.id !== id);
    }
    loadData();
};

let editItem = (id) => {
    i = items.findIndex((obj) => obj.id == id);
    itemDisplay.innerHTML = `<h2> Edit here</h2>
    <form autocomplete="off">
    <input border="solid" required type ="text" id="editName" placeholder="Edit Name"/>
    <input required type ="text" id="editQty" placeholder="Edit Quantity"/>
    <input required type ="text" id="editPrice" placeholder="Edit Price"/>
    <button onclick="editData()">Done</button>
    <button onclick="loadData()">Exit</button>
    </form>`;

    editData = () => {
        items[i].name = document.querySelector("#editName").value;
        items[i].quantity = document.querySelector("#editQty").value;
        items[i].price = document.querySelector("#editPrice").value;
        items[i].sum =
            document.querySelector("#editQty").value *
            document.querySelector("#editPrice").value;
        itemDisplay.innerHTML = "";
        loadData();
    };

};

totalBills = () => {
    let result = items.reduce(function (total, item) {
        return (total = total + item.sum);
    }, 0);
    let discount = document.querySelector("#discount").value;
    let afterDis = result - (discount / 100) * result;
    console.log();
    total.innerHTML = `<label>Total:</label>` + result;
    afterDiscount.innerHTML = `<labelclass="calc-font">After ` + discount + `% Discount:</label>` + afterDis;
    let totalBill = afterDis + 0.13 * afterDis;
    totalAmount.innerHTML = `<label>Total Bill after VAT:</label>` + totalBill;
};


let reset = () => {
    let x = confirm("You will loose all your data. Are you sure about this?");
    if (x) {
        window.location.reload();
    }

}