# 21. Context API

The Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components.

The Context API provides a way to share values (state, functions, etc.) between components without having to pass props down manually at every level. 

### Jargon

- **Context**: This is created using `React.createContext()`. It serves as a container for the data you want to share.
- **Provider**: This component wraps part of your application and provides the context value to all its descendants. Any component that is a child of this Provider can access the context.
- **Consumer**: This component subscribes to context changes. It allows you to access the context value (using `useContext`  hook)

### Old code

```jsx
import React, { useEffect, useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Incrase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
      <Value count={count} setCount={setCount} />
    </>
  );
}

function Decrease({ count, setCount }) {
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value({ count }) {
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;

```

## New code

- Create a new `CountContext`

```jsx
const CountContext = createContext();
```

- Create a CountContextProvider

```jsx

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}
```

- Wrap your app inside the `CountContextProvider`

```jsx
function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}
```

- Consume the `context` in individual components

```jsx
function Decrease() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

```

- Export the `App` component which renders `Parent`

```jsx
const App = () => {
  return <div>
    <Parent />
  </div>
};
export default App;
```