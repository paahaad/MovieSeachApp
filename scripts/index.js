// Store the wallet amount to your local storage with key "amount"
window.addEventListener('load',function(){
    event.preventDefault();
    document.getElementById("wallet").innerText = JSON.parse(localStorage.getItem('amount')) || 0
});
function addToWallet(){
    //1. display amount to h1 from local storage.

    let amt = JSON.parse(localStorage.getItem('amount')) || 0
    let val = Number(document.getElementById('amount').value);
    val = Number(amt) + Number(val);
    localStorage.setItem('amount',JSON.stringify(val));
    document.getElementById("wallet").innerText = val;
}