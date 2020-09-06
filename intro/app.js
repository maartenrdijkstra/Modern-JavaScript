const items = [
    {item: "Soy Milk", cost: 2, id: 0},
    {item:"Apple", cost: 1, id:1},
    {item:"Bread", cost: 2, id:2},
    {item:"Blueberries", cost: 3, id:3},
    {item:"Book", cost: 12, id:4},

];

const cart = {};
const output = document.createElement("div");
document.body.appendChild(output);

items.forEach(function(ele) {
    let div = document.createElement('div');
    div.innerHTML = `<h3>${ele.item}</h3>$${ele.cost}`;
    div.style.border = "1px solid #ddd";
    div.style.display = "inline-block";
    div.style.width = "100px";
    div.addEventListener('click', function () {
        let namer = ele.item.toLowerCase();
        if(!cart[namer]) {
            cart[namer] = {
                name: ele.item,
                price: ele.cost,
                qty: 1,
                subtotal: function () {
                    return this.price * this.qty;
                }
            }
        } else {
            cart[namer].qty++;
        }
        relist();
    })


    function relist() {
        output.innerHTML = "";
        let total = 0;
        for(let pro in cart) {
            let subTotal = cart[pro].subtotal();
            total+= subTotal;
            output.innerHTML += `${cart[pro].name} $${cart[pro].price} x`;
            output.innerHTML += `${cart[pro].qty} $${subTotal} `;
        }
        output.innerHTML += `<strong>Total = $${total}</strong>`
    }
    document.body.appendChild(div);
})
