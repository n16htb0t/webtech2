import React, { useEffect, useState } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const [wordInput, setWordInput] = useState('');
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  useEffect(() => {
    const storedWords = JSON.parse(localStorage.getItem('words')) || [];
    setWordList(storedWords);
  }, []);

  useEffect(() => {
    localStorage.setItem('words', JSON.stringify(wordList));
  }, [wordList]);

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(term)
    );
    setFilteredPosts(filtered);
  };

  const handleAddWord = () => {
    if (wordInput.trim()) {
      setWordList(prev => [...prev, wordInput.trim()]);
      setWordInput('');
    }
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <h1>Search Posts</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Enter a title"
      />
      <button onClick={handleSearch}>Search</button>

      <h2>Results:</h2>
      <div>
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>

      <hr />

      <h1>My Words</h1>
      <input
        type="text"
        value={wordInput}
        onChange={e => setWordInput(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={handleAddWord}>Add</button>

      <ul>
        {wordList.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
