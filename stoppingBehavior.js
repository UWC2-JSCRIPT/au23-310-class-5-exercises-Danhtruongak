// Do not change
document.getElementById("cat").addEventListener("click", () => {
  alert("meow!");
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
const a = document.querySelector("a");
a.addEventListener("click", (e) => {
  e.preventDefault();
  this.alert("Here's some info");
});
// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const btn = document.querySelector("#dog");
btn.addEventListener("click", (e) => {
  alert("Bow wow !");
  e.stopPropagation();
});
