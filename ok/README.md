# 🌐 WebTech2 – Project Overview

Access the project here: [www.d4mr0.tech](https://www.d4mr0.tech)

Web 1240 - [https://n16htb0t.github.io/WEB_1240/](https://n16htb0t.github.io/WEB_1240/)

REACT: [https://github.com/n16htb0t/webtech2/blob/main/ReactPart/React%20Part%201%2022390c2fa21b8088ac9cd6f612c3ac32.md](https://github.com/n16htb0t/webtech2/blob/main/ReactPart/React%20Part%201%2022390c2fa21b8088ac9cd6f612c3ac32.md)

- [SessionStorage_multipleButton](https://www.d4mr0.tech/jsQuiz/User3/SessionStorage_Multiplebuttons.html)        
- [MultipleButtons](https://www.d4mr0.tech/jsQuiz/User3/Multiplebuttons.html)
- [SessionStorage](https://www.d4mr0.tech/jsQuiz/User3/SessionStorage.html)
- [UIStorage](https://www.d4mr0.tech/jsQuiz/User3/uiStorage.html)

- [USER1-single](https://www.d4mr0.tech/jsQuiz/user1/index.html)
- [USER1-Seprate](https://www.d4mr0.tech/jsQuiz/user1/sep/index.html)

- [t2 ](https://www.d4mr0.tech/jsQuiz/user2/t2/index.html)
- [t2-ind2](https://www.d4mr0.tech/jsQuiz/user2/t2/index.html)
- [user2-sep](https://www.d4mr0.tech/jsQuiz/user2/sep/index.html)

- [WEB_1240](https://github.com/n16htb0t/WEB_1240)

Drive:  [https://drive.google.com/drive/u/2/folders/15j1Es0mq-1nEVQbMYGq2s1oD8vQGeaYx](https://drive.google.com/drive/u/2/folders/15j1Es0mq-1nEVQbMYGq2s1oD8vQGeaYx)

```js for react project 4

npm install .

npm install styled-components

```
---


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

## 📁 Project Structure (Click to view files)

- [dom.html](https://www.d4mr0.tech/dom.html)
- [topics.html](https://www.d4mr0.tech/topics.html)

### 📂 Quizzes
- [quiz1.html](https://www.d4mr0.tech/quiz1.html)
- [quiz2.html](https://www.d4mr0.tech/quiz2.html)

### 📂 JS/
- [dropmenu.html](https://www.d4mr0.tech/JS/dropmenu.html)
- [dropmenu.js](https://www.d4mr0.tech/JS/dropmenu.js)
- [index.html](https://www.d4mr0.tech/JS/index.html)
- [script.js](https://www.d4mr0.tech/JS/script.js)

### 📂 lesson 2/
- [2 lesson.pdf](https://www.d4mr0.tech/lesson%202/2%20lesson.pdf)
- [index.html](https://www.d4mr0.tech/lesson%202/lesson%202/index.html)
- [app.js](https://www.d4mr0.tech/lesson%202/lesson%202/app.js)

### 📂 lesson 3/
- [3 lesson.pdf](https://www.d4mr0.tech/lesson%203/3%20lesson.pdf)
- [4 lesson.pdf](https://www.d4mr0.tech/lesson%203/4%20lesson.pdf)
- [index.html](https://www.d4mr0.tech/lesson%203/lesson%203/index.html)
- [app.js](https://www.d4mr0.tech/lesson%203/lesson%203/app.js)

### 📂 lesson 4/
- [index.html](https://www.d4mr0.tech/lesson%204/lesson%204/index.html)
- [app.js](https://www.d4mr0.tech/lesson%204/lesson%204/app.js)

### 📂 lesson 5/
- [7 lesson.pdf](https://www.d4mr0.tech/lesson%205/7%20lesson.pdf)
- [index.html](https://www.d4mr0.tech/lesson%205/lesson%205/index.html)
- [app.js](https://www.d4mr0.tech/lesson%205/lesson%205/app.js)

### 📂 lesson 6/
- [index.html](https://www.d4mr0.tech/lesson%206/lesson%206/index.html)
- [app.js](https://www.d4mr0.tech/lesson%206/lesson%206/app.js)


## License

This cheatsheet is free to use and modify. Feel free to contribute!

