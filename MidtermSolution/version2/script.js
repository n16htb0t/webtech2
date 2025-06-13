// Task 1: Sum and average
let numberArray = [];

document.getElementById("addNum").addEventListener("click", () => {
  const value = parseFloat(document.getElementById("numInput").value);
  if (!isNaN(value)) {
    numberArray.push(value);
    document.getElementById("numInput").value = "";
  }
});

document.getElementById("calculateStats").addEventListener("click", () => {
  if (numberArray.length === 0) return;
  const sum = numberArray.reduce((a, b) => a + b, 0);
  const avg = (sum / numberArray.length).toFixed(2);
  document.getElementById("statsOutput").textContent = `Sum: ${sum}, Average: ${avg}`;
});

// Task 2: Style text
document.getElementById("applyTextStyles").addEventListener("click", () => {
  const text = document.getElementById("inputText").value;
  const fontSize = document.getElementById("fontSizeSelect").value;
  const alignment = document.getElementById("alignmentSelect").value;
  const bgColor = document.getElementById("backgroundColorSelect").value;

  const styledText = document.getElementById("styledText");
  styledText.textContent = text;
  styledText.style.fontSize = fontSize;
  styledText.style.textAlign = alignment;
  styledText.style.backgroundColor = bgColor;
  styledText.style.color = bgColor === "black" ? "white" : "black";
});

// Task 3: Store total
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
  document.getElementById("totalPrice").textContent = `Total Price: $${total}`;
});

// Task 4: Filter even numbers
let allNumbers = [];

document.getElementById("addNumber").addEventListener("click", () => {
  const num = parseInt(document.getElementById("numberInput").value);
  if (!isNaN(num)) {
    allNumbers.push(num);
    document.getElementById("numberInput").value = "";
  }
});

document.getElementById("filterEven").addEventListener("click", () => {
  const evens = allNumbers.filter(n => n % 2 === 0);
  document.getElementById("output").textContent = `Even Numbers: ${evens.join(", ")}`;
});
