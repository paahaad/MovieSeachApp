// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

window.addEventListener('load',function(){
    event.preventDefault();
    document.getElementById("wallet").innerText = JSON.parse(localStorage.getItem('amount')) || 0
});

function getDom(id){
    return document.getElementById(id)
}
async function searchSugg(){
    try{
        let query = getDom("search").value;
        //console.log(query)
        let res = await fetch(`http://www.omdbapi.com/?apikey=e96044d2&s=${query}`);
        let data = await res.json();
        // console.log(data)
        // appendData(data.Search);
        return data.Search;
    }
    catch(err){
        console.log(err)
    }
}

function appendData(data){
    if(data === undefined){
        return false;
    }
    getDom("movies").innerHTML = "";
    data.forEach(function(ele){
        
        div = document.createElement("div");
        img = document.createElement("img");
        img.src = ele.Poster;
        p = document.createElement("p");
        p.innerText = ele.Title;
        
        btn = document.createElement("button");
        btn.innerText = "BOOK NOW"
        btn.className = "book_now"
        btn.addEventListener('click', function(){
            localStorage.setItem('movie', JSON.stringify(ele))
            location.href = "checkout.html";
        })

        div.append(img, p, btn)
        getDom("movies").append(div)

    });
}

async function main(){
    let data = await searchSugg();
    if(data===undefined){
        return false
    }
    else{
        appendData(data)
    }
}

let ids;
function deb(fun, delay){
    if(ids){
        clearTimeout(ids);
    }
    ids = setTimeout(function(){
        fun();
    }, delay);
}