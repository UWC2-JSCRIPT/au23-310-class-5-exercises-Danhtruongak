// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
const a = document.createElement("a");
a.innerText = "Buy Now";
a.setAttribute("id", "cta");
const lastP = document.querySelector("p");
lastP.after(a);

// Access (read) the data-color attribute of the <img>,
// log to the console
const img = document.querySelector("img");
const read = img.dataset;
console.log(read);

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const thirdLi = li[2];
thirdLi.setAttribute("class", "highlight");
// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const p = document.querySelector("p");
p.remove();
