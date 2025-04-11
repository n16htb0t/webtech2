# webtech2

## Helpful Websites

- [DevDocs](https://devdocs.io/) – Offline-friendly documentation for multiple programming languages, including DOM-related JavaScript documentation.
- [JavaScript.info](https://javascript.info/) – In-depth tutorials and explanations on JavaScript and DOM manipulation.
- [CSS-Tricks](https://css-tricks.com/) – A great resource for front-end development, with helpful guides on DOM manipulation.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) – The most comprehensive resource for JavaScript, including detailed DOM documentation and examples.
- [FreeCodeCamp](https://www.freecodecamp.org/) – A free platform offering comprehensive tutorials and exercises on JavaScript, including DOM manipulation.

# DOM Cheatsheet

A quick reference for working with the **Document Object Model (DOM)** in JavaScript.

## 🧱 DOM Selection Methods

| Method                            | Description                              | Example                                 |
|-----------------------------------|------------------------------------------|-----------------------------------------|
| `getElementById()`                | Selects element by ID                    | `document.getElementById("header")`     |
| `getElementsByClassName()`        | Selects elements by class name (HTMLCollection) | `document.getElementsByClassName("item")` |
| `getElementsByTagName()`          | Selects elements by tag name (HTMLCollection) | `document.getElementsByTagName("li")`   |
| `querySelector()`                 | Selects first matching element (CSS-style) | `document.querySelector(".btn")`        |
| `querySelectorAll()`              | Selects all matching elements (NodeList) | `document.querySelectorAll("ul li")`    |

---

## ✏️ DOM Manipulation

| Property/Method                   | Description                              | Example                                 |
|----------------------------------|------------------------------------------|-----------------------------------------|
| `element.textContent`            | Gets or sets text                        | `el.textContent = "Hello"`              |
| `element.innerHTML`              | Gets or sets HTML                        | `el.innerHTML = "<strong>Hi</strong>"`  |
| `element.setAttribute()`         | Sets attribute                           | `el.setAttribute("class", "active")`    |
| `element.getAttribute()`         | Gets attribute                           | `el.getAttribute("href")`               |
| `element.removeAttribute()`      | Removes attribute                        | `el.removeAttribute("disabled")`        |
| `element.classList.add()`        | Adds class                               | `el.classList.add("visible")`           |
| `element.classList.remove()`     | Removes class                            | `el.classList.remove("hidden")`         |
| `element.classList.toggle()`     | Toggles class                            | `el.classList.toggle("dark-mode")`      |

---

## ⚙️ DOM Events

| Method/Property                   | Description                              | Example                                 |
|----------------------------------|------------------------------------------|-----------------------------------------|
| `addEventListener()`             | Adds event listener                      | `btn.addEventListener("click", fn)`     |
| `removeEventListener()`          | Removes event listener                   | `btn.removeEventListener("click", fn)`  |
| `event.target`                   | Refers to the element that triggered event | `e.target.style.color = "red"`         |

---

## 🌱 Creating & Inserting Elements

| Method/Property                   | Description                              | Example                                 |
|----------------------------------|------------------------------------------|-----------------------------------------|
| `document.createElement()`       | Creates new element                      | `let p = document.createElement("p")`   |
| `element.appendChild()`          | Appends as last child                    | `parent.appendChild(p)`                 |
| `element.prepend()`              | Inserts as first child                   | `parent.prepend(p)`                     |
| `element.append()`               | Appends one or more nodes                | `el.append("Hello", span)`              |
| `element.insertBefore()`         | Inserts before reference node            | `parent.insertBefore(newEl, refEl)`     |
| `element.remove()`               | Removes element                          | `el.remove()`                           |

---

## 💡 Other Useful DOM Tricks

| Concept                          | Example                                  |
|----------------------------------|------------------------------------------|
| Loop through NodeList            | `document.querySelectorAll(".item").forEach(el => { ... })` |
| Convert HTMLCollection to Array  | `Array.from(document.getElementsByClassName("item"))` |
| Check if class exists            | `el.classList.contains("active")`        |
| Modify style                     | `el.style.color = "blue"`                |

---

## License

This cheatsheet is free to use and modify. Feel free to contribute!

