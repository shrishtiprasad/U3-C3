let user = JSON.parse(localStorage.getItem("user")) || 0;
let wallet = Number(user[0].amount);
document.getElementById("wallet_balance").innerText = wallet;

let data = JSON.parse(localStorage.getItem("purchase")) || [];

//console.log(purchase);

function showData(data){

    data.forEach(function(elem){

        let div = document.createElement("div");
        div.setAttribute("class", "voucher");

        let poster = document.createElement("img");
        poster.src = elem.image;
        
        let name = document.createElement("p");
        name.innerText = elem.name;

        let price = document.createElement("h3");
        price.innerText = elem.price;

        div.append(poster, name, price);
        document.getElementById("purchased_vouchers").append(div);
    })
}
showData(data);