const decreaseBtn = document.getElementById("btn-decrease");
const resetBtn = document.getElementById("btn-reset");
const increaseBtn = document.getElementById("btn-increase");
const counterDiv = document.getElementById("counter");
let count = 0;

const decreaseHandler = () => {
    count--;
    counterDiv.innerText = count;
    counterColor();
}

const resetHandler = () => {
    count = 0;
    counterDiv.innerText = count;
    counterColor();
}

const increaseHandler = () => {
    count++;
    counterDiv.innerText = count;
    counterColor();
}

const counterColor = () => {
    if(count > 0) {
        counterDiv.style.color = "green";
    }else if(count < 0) {
        counterDiv.style.color = "red";
    }else {
        counterDiv.style.color = "#334443";
    }
}


decreaseBtn.addEventListener("click", decreaseHandler);
resetBtn.addEventListener("click", resetHandler);
increaseBtn.addEventListener("click", increaseHandler);