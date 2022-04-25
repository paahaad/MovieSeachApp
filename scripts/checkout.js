// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
window.addEventListener('load',function(){
    event.preventDefault();
    document.getElementById("wallet").innerText = JSON.parse(localStorage.getItem('amount')) || 0
    data = JSON.parse(localStorage.getItem('movie')) || []
    appendData(data);
});

function getDom(id){
    return document.getElementById(id)
}
function appendData(data){
    getDom("movie").innerHTML = "";
    div = document.createElement("div");
    img = document.createElement("img");
    img.src = data.Poster;
    p = document.createElement("p");
    p.innerText = data.Title;

    div.append(img, p)
    getDom("movie").append(div)
}

const submit = () => {
    val = Number(JSON.parse(localStorage.getItem('amount'))) || 0
    totalCost = 100*Number(getDom('number_of_seats').value)
    if(val<totalCost){
        alert("Insufficient Balance!”")
    }else{
        alert("Booking successful!")
        localStorage.setItem('amount',JSON.stringify(val-totalCost));
        document.getElementById("wallet").innerText = JSON.parse(localStorage.getItem('amount')) || 0
    }
    
}