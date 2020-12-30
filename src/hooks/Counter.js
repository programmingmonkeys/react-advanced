import React, { useState, useEffect } from 'react'

const Counter = props => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    document.title = `${name} has clicked ${count} times`
    return () => {
      console.log('cleanup')
    }
  }, [count, name])

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
