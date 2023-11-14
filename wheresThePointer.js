// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const td = document.querySelectorAll("td");
const h4 = document.querySelector("h1");
const table = document.querySelector("table");

function pointer(e) {
  const target = e.target;
  target.style.backgroundColor = "skyblue";
  const x = e.clientX;
  const y = e.clientY;
  target.innerHTML = `x:${x}, y:${y}`;
}

table.addEventListener("click", pointer);
