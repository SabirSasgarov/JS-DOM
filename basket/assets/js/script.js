function updateCount() {
    const data = JSON.parse(localStorage.getItem("myArray")) || [];
    document.getElementById("item-counter-in-basket").textContent = data.length;
}

updateCount();

function Count(title) {
        let data = JSON.parse(localStorage.getItem("myArray")) || [];
        for (let i = 0; i < data.length; i++) {
            let value = JSON.parse(data[i]);
            if (value.title === title) {
                return value.count;
            }
        }
        return 0;
}


let addButtons = document.querySelectorAll(".card-button button");

console.log(addButtons);
for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", function (e) {
        console.log(e.target);
        let card = e.target.parentElement.parentElement;

        let img = card.querySelector("img").src;
        let title = card.querySelector("h2").innerText;
        let price = card.querySelector("p").innerText;
        
        let count = Count(title);
        if (count > 0) {
            let data = JSON.parse(localStorage.getItem("myArray")) || [];
            for (let i = 0; i < data.length; i++) {
                let item = JSON.parse(data[i]);
                if (item.title === title) {
                    item.count = count + 1;
                    data[i] = JSON.stringify(item);
                    break;
                }
            }
            localStorage.setItem("myArray", JSON.stringify(data));
            updateCount();
            return;
        }
        let data = JSON.parse(localStorage.getItem("myArray")) || [];
        let newItem = JSON.stringify({ title, price, img, count: count + 1 });
        data.push(newItem);
        localStorage.setItem("myArray", JSON.stringify(data));

        updateCount();
    });
}

let basketButton = document.getElementById("basket-btn");
console.log(basketButton);
basketButton.addEventListener("click", function () {
    window.location.href = "basket.html";
});





