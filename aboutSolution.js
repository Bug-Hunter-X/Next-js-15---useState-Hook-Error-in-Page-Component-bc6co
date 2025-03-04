```javascript
// pages/aboutSolution.js
import { useState, useEffect } from 'react';

export default function About() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>Count: {count}</p>
    </div>
  );
}
```