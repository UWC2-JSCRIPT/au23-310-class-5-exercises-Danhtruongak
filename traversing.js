// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector("body");
const main = body.getElementsByTagName("main");
console.log(main);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector("ul");
const main1 = ul.parentElement;
const body1 = main1.parentElement;
console.log(body1);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector("p");
const ulEl = p.previousElementSibling;
const liEl = ulEl.children;
const third_li = liEl[2];

console.log(third_li);
