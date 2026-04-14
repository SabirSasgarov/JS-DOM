let button = document.querySelectorAll(".btn");

button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let firstNumber = document.getElementById("first-number").value;
        let secondNumber = document.getElementById("second-number").value;
        const result = document.querySelector("#result");
        if (e.target.innerText === "Toplama") {
            result.value = Number(firstNumber) + Number(secondNumber);
        } else if (e.target.innerText === "Cixma") {
            result.value = Number(firstNumber) - Number(secondNumber);
        }else if(e.target.innerText === "Vurma"){
            result.value = Number(firstNumber) * Number(secondNumber);
        }else if(e.target.innerText === "Bolme"){
            result.value = Number(firstNumber) / Number(secondNumber);
        }
    })
})
