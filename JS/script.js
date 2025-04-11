const body = document.body
body.append("Hello World");


// create a new div element
const div2 = document.createElement("div2");
//div.innerHTML = "Hello Div";
div2.textContent = "Hello 2nd Div";
body.append(div2);

const div = document.querySelector("div")
console.log(div.textContent);
console.log(div.innerText);