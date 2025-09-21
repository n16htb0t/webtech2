// Task 1  
document.getElementById('searchBtn').addEventListener('click', () => {
      const searchTerm = document.getElementById('searchInput').value.toLowerCase();
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          const filtered = data.filter(post =>
            post.title.toLowerCase().includes(searchTerm)
          );

          const resultsDiv = document.getElementById('results');
          resultsDiv.innerHTML = '';

          if (filtered.length === 0) {
            resultsDiv.textContent = 'No posts found.';
          } else {
            filtered.forEach(post => {
              const titleEl = document.createElement('h3');
              titleEl.textContent = post.title;
              const bodyEl = document.createElement('p');
              bodyEl.textContent = post.body;
              resultsDiv.appendChild(titleEl);
              resultsDiv.appendChild(bodyEl);
            });
          }
        });
    });
// Task 2
    const wordInput = document.getElementById('wordInput');
    const addWordBtn = document.getElementById('addWord');
    const wordList = document.getElementById('wordList');

    function loadWords() {
      const words = JSON.parse(localStorage.getItem('words')) || [];
      wordList.innerHTML = '';
      words.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        wordList.appendChild(li);
      });
    }

    addWordBtn.addEventListener('click', () => {
      const word = wordInput.value.trim();
      if (word) {
        let words = JSON.parse(localStorage.getItem('words')) || [];
        words.push(word);
        localStorage.setItem('words', JSON.stringify(words));
        wordInput.value = '';
        loadWords();
      }
    });
// lodaing word on page
window.addEventListener('load', loadWords);
