// Task 1
let numbers = [];

document.getElementById("addNum").addEventListener("click", () => {
  const num = Number(document.getElementById("numInput").value);
  if (!isNaN(num)) {
    numbers.push(num);
    document.getElementById("numInput").value = "";
  }
});

document.getElementById("calculateStats").addEventListener("click", () => {
  if (numbers.length === 0) return;
  const sum = numbers.reduce((a, b) => a + b, 0);
  const avg = (sum / numbers.length).toFixed(2);
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  document.getElementById("statsOutput").textContent = 
    `Average: ${avg}, Max: ${max}, Min: ${min}`;
});

// Task 2
let names = [];

document.getElementById("addName").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();
  if (name) {
    names.push(name);
    document.getElementById("nameInput").value = "";
  }
});

document.getElementById("sortNames").addEventListener("click", () => {
  const list = document.getElementById("nameList");
  list.innerHTML = "";
  names.sort();
  names.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
});

// Task 3
let cart = [];

document.getElementById("addProduct").addEventListener("click", () => {
  const name = document.getElementById("productName").value.trim();
  const price = parseFloat(document.getElementById("productPrice").value);
  if (name && !isNaN(price)) {
    cart.push({ name, price });
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
  }
});

document.getElementById("ShowPrice").addEventListener("click", () => {
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  document.getElementById("totalPrice").textContent = `Total: $${total}`;
});

// Task 4
document.getElementById("applyStyle").addEventListener("click", () => {
  const text = document.getElementById("textInput").value;
  const style = document.getElementById("styleSelect").value;
  const output = document.getElementById("styledText");
  output.textContent = text;

  // Reset styles
  output.style.fontWeight = "normal";
  output.style.fontStyle = "normal";
  output.style.color = "black";

  if (style === "bold") {
    output.style.fontWeight = "bold";
  } else if (style === "italic") {
    output.style.fontStyle = "italic";
  } else if (style === "color") {
    output.style.color = "blue";
  }
});
