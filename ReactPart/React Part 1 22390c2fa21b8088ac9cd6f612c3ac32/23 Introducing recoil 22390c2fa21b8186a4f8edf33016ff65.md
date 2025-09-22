# 23. Introducing recoil

To minimise the number of re-renders, and ensure that only components that are `subscribed` to a value `render`, state management was introduced.

There are many libraries that let you do state management - 

1. mobx
2. recoil
3. redux

Here is a simple example with `recoil`

- npm install recoil

```jsx
import React, { createContext, useContext, useState } from 'react';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

const count = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

function Parent() {
  return (
    <RecoilRoot>
      <Incrase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
}

function Incrase() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
}

function Value() {
  const countValue = useRecoilValue(count);
  return <p>Count: {countValue}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;
```

![Screenshot 2024-10-13 at 7.20.23 PM.png](23%20Introducing%20recoil%2022390c2fa21b8186a4f8edf33016ff65/Screenshot_2024-10-13_at_7.20.23_PM.png)