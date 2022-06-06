
//amount ->
let user = JSON.parse(localStorage.getItem("user")) || 0;
// let wallet = Number(user[0].amount);
let wallet = 0;
for(let i=0; i<user.length; i++){
    wallet += Number(user[i].amount);
}
document.getElementById("wallet_balance").innerText = wallet;

//voucher ->
async function getData(){
    try{
        let res = await fetch("https://masai-vouchers-api.herokuapp.com/api/vouchers");

        let data = await res.json();

        //console.log(data[0].vouchers);

        append(data[0].vouchers);
    }
    catch(err){
        console.log(err);
    }
}
getData();

function append(kyaTapleekHaiAapko){

    let container = document.getElementById("voucher_list");

    kyaTapleekHaiAapko.forEach(function(elem){

        let div = document.createElement("div");
        div.setAttribute("class", "voucher");

        let poster = document.createElement("img");
        poster.src = elem.image;
        
        let name = document.createElement("p");
        name.innerText = elem.name;

        let price = document.createElement("h3");
        price.innerText = elem.price;
        let rate = Number(elem.price);

        let button = document.createElement("button");
        button.innerText = "BUY";
        button.setAttribute("class", "buy_voucher");
        button.addEventListener("click", function(){
            
            buyItems(elem,rate);
        })

        div.append(poster, name, price, button);
        container.append(div);
    })

    let purchase = JSON.parse(localStorage.getItem("purchase")) || [];

    function buyItems(elem, rate){
        if(wallet >= rate){
            alert("Hurray! purchase successful");
            document.getElementById("wallet_balance").innerText = wallet-rate;
            purchase.push(elem);
            localStorage.setItem("purchase", JSON.stringify(purchase));

            for(let i=0; i<user.length; i++){
                wallet = wallet - rate;
            }
            //localStorage.setItem("user"), JSON.stringify("wallet");
        }
        else if(wallet < rate){
            alert("Sorry! insufficient balance");
        }
    }
}

