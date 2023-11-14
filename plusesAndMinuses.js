const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const btns = document.querySelectorAll(".btn");

let currentCount = 0;
const counter = (e) => {
  e.preventDefault;
  const h1 = document.querySelector("h1");
  h1.innerText = currentCount;
  if (e.target === increaseBtn) {
    currentCount++;
  } else {
    currentCount--;
  }
};

for (let i = 0; i < btns.length; i++) {
  const eachBtn = btns[i];
  eachBtn.addEventListener("click", counter);
}
// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
