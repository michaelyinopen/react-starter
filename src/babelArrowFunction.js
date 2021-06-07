import { useState } from 'react'

const myFunctionalComponent = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      Count: {count}<br />
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}

export default myFunctionalComponent