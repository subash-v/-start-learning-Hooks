import React, { useState,useEffect }  from 'react'

export default function counter() {
    const [count, setCount] = useState(0); // Declare a new state variable, which we'll call "count"
    // const [age, setAge] = useState(42);
    // const [fruit, setFruit] = useState('banana');
    // const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  
    return (
    <div>
       <p>You clicked {count} times </p>
      <button onClick={() => setCount(count + 1) }>
        Click me
      </button>
      
    </div>
  )
}
