import { useState } from 'react'

const myFunctionalComponent = () => {
  const [count, setCount] = useState(0) // deconstruct
  return (
    <div>
      Count: {count}<br />
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  )
}

export const oneThousand = 1_000
// const oneThousand = 2 // should have error

const a = console?.log("can optional-chaining with non-null")

const nonNullHolder = 0
const nullHolder = null
const b = nullHolder?.log("error optional-chaining with null")

nonNullHolder ?? console.log("can nullish-coalescing with non-null")
nullHolder ?? console.log("error nullish-coalescing with null")

export default myFunctionalComponent