let goBackButton = document.getElementById("go-back-btn");
goBackButton.addEventListener("click", function () {
    window.location.href = "index.html";
});


function emptyList(){
    let listContainer = document.getElementById("list-container");
    listContainer.innerHTML = "<p style='color: #6c757d; font-size: 1.25rem; text-align: center; margin: 0;'>Your basket is empty!</p>";
}

function updateList() {
    let data = JSON.parse(localStorage.getItem("myArray")) || [];
    let listContainer = document.getElementById("list-container");
    //listContainer.innerHTML = "";

    if(data.length === 0){
        emptyList();
        return;
    }

    for (let i = 0; i < data.length; i++) {
        let item = JSON.parse(data[i]);
        let listItem = document.createElement("div");
        listItem.classList.add("list-item");

        listItem.innerHTML = `
            <div class="item-image-container">
                <img src="${item.img}" alt="${item.title}" class="item-image "> 
            </div>
            <div class="item-details">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <p class="item-price">${item.price}</p>
            </div> 
            <div class="item-count badge text-bg-primary rounded-pill">
                <p>${item.count}</p>
            </div> 
        `;
        if(i==data.length-1){
            listItem.style.borderBottom = "none";
        }
       listContainer.appendChild(listItem);
    }
}

updateList();


let clearListButton = document.getElementById("clear-btn");
clearListButton.addEventListener("click", function () {
    if(!localStorage.getItem("myArray")){
        alert("Your basket is already empty!");
        return;
    }
    localStorage.removeItem("myArray");
    let listContainer = document.getElementById("list-container");
    listContainer.innerHTML = "";
    emptyList();
});

let checkoutButton = document.getElementById("checkout-btn");
checkoutButton.addEventListener("click", function () {
    if(!localStorage.getItem("myArray")){
        alert("Your basket is empty!");
        return;
    }
    alert("Thank you for your purchase!");
    localStorage.removeItem("myArray");
    let listContainer = document.getElementById("list-container");
    listContainer.innerHTML = "";
    emptyList();
});

