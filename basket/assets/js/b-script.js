let goBackButton = document.getElementById("go-back-btn");
goBackButton.addEventListener("click", function () {
    window.location.href = "index.html";
});

function updateList() {
    let data = JSON.parse(localStorage.getItem("myArray")) || [];
    let listContainer = document.getElementById("list-container");
    //listContainer.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let item = JSON.parse(data[i]);
        //let listItem = document.createElement("div");
        // listItem.classList.add("list-item");
        
        let image = document.querySelector(".item-img");
        console.log(image);
        image.src = item.img;
        image.alt = item.title;
        let name = document.querySelector(".item-name");
        name.textContent = item.title;
        let count = document.querySelector(".item-count");
        count.textContent = item.count;
        

        // listItem.innerHTML = `
        //     <img src="${item.img}" alt="${item.title}" class="item-image"> 
        //     <div class="item-details">
        //         <p>${item.price}</p>
        //         <p>Count: ${item.count}</p>
        //     </div>  
        // `;
     //   listContainer.appendChild(listItem);
    }
}

updateList();

        //  <li
        //     class="list-group-item d-flex justify-content-between align-items-start"
        //   >
        //     <div>
        //       <img src="./assets/images/c1.avif" alt="" class="item-img m-2" />
        //     </div>
        //     <div class="ms-2 me-auto">
        //       <div class="fw-bold item-name">Subheading</div>
        //       Content for list item
        //     </div>
        //     <span class="badge text-bg-primary rounded-pill item-count"
        //       >14</span
        //     >
        //   </li>




