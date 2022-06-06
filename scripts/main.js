
let userDetails = JSON.parse(localStorage.getItem("user")) || [];

function User(n, e, a, p){

    this.name = n;
    this.email = e;
    this.address = a;
    this.amount = p; 
}
function submit(){

    // let form = document.getElementById("form");
    // let name = form.name.value;
    // let email = form.email.value;
    // let address = form.address.value;
    // let amount = form.amount.value;
    // console.log(name, email, address, amount);
    // let u1 = new User(name, email, address, amount);

    let userObj = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        address : document.getElementById("address").value,
        amount : document.getElementById("amount").value
    };

    // let name = document.getElementById("name").value;
    // let email = document.getElementById("email").value;
    // let address = document.getElementById("address").value;
    // let amount = document.getElementById("amount").value;

    //userObj.push(name, email, address, amount);

    userDetails.push(userObj);
    console.log(userDetails);

    localStorage.setItem("user", JSON.stringify(userDetails));

    document.getElementById("name").value = null;
    document.getElementById("email").value = null;
    document.getElementById("address").value = null;
    document.getElementById("amount").value = null;

}