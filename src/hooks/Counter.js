import React, { useState } from 'react'

const Counter = props => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <>
      <input type="text" onChange={e => setName(e.target.value)} />
      <div>
        {name} as clicked counter: {count}
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
}

export default Counter
